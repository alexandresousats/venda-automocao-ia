"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  TOTAL_LESSONS,
  TRACKS,
  allLessonKeys,
  lessonKey,
  type Track,
} from "@/data/course";

const STORAGE_KEY = "curso-atendimento-ia:completed-lessons";

type CompletionContextValue = {
  ready: boolean;
  completed: Set<string>;
  isCompleted: (trackId: string, lessonId: string) => boolean;
  toggleCompleted: (trackId: string, lessonId: string) => void;
  markCompleted: (trackId: string, lessonId: string) => void;
  completedCount: number;
  progressPercent: number;
  trackCompletedCount: (track: Track) => number;
};

const CompletionContext = createContext<CompletionContextValue | null>(null);

function readStorage(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    const valid = new Set(allLessonKeys());
    return new Set(parsed.filter((key) => valid.has(key)));
  } catch {
    return new Set();
  }
}

function writeStorage(completed: Set<string>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
}

export function CompletionProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCompleted(readStorage());
    setReady(true);
  }, []);

  const persist = useCallback((next: Set<string>) => {
    setCompleted(next);
    writeStorage(next);
  }, []);

  const isCompleted = useCallback(
    (trackId: string, lessonId: string) =>
      completed.has(lessonKey(trackId, lessonId)),
    [completed],
  );

  const toggleCompleted = useCallback(
    (trackId: string, lessonId: string) => {
      const key = lessonKey(trackId, lessonId);
      const next = new Set(completed);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      persist(next);
    },
    [completed, persist],
  );

  const markCompleted = useCallback(
    (trackId: string, lessonId: string) => {
      const key = lessonKey(trackId, lessonId);
      if (completed.has(key)) return;
      const next = new Set(completed);
      next.add(key);
      persist(next);
    },
    [completed, persist],
  );

  const trackCompletedCount = useCallback(
    (track: Track) =>
      track.lessons.filter((lesson) =>
        completed.has(lessonKey(track.id, lesson.id)),
      ).length,
    [completed],
  );

  const completedCount = completed.size;
  const progressPercent =
    TOTAL_LESSONS === 0
      ? 0
      : Math.round((completedCount / TOTAL_LESSONS) * 100);

  const value = useMemo(
    () => ({
      ready,
      completed,
      isCompleted,
      toggleCompleted,
      markCompleted,
      completedCount,
      progressPercent,
      trackCompletedCount,
    }),
    [
      ready,
      completed,
      isCompleted,
      toggleCompleted,
      markCompleted,
      completedCount,
      progressPercent,
      trackCompletedCount,
    ],
  );

  return (
    <CompletionContext.Provider value={value}>
      {children}
    </CompletionContext.Provider>
  );
}

export function useCompletion() {
  const ctx = useContext(CompletionContext);
  if (!ctx) {
    throw new Error("useCompletion must be used within CompletionProvider");
  }
  return ctx;
}

export function useTrackProgress(trackId: string) {
  const { trackCompletedCount } = useCompletion();
  const track = TRACKS.find((item) => item.id === trackId);
  if (!track) return { done: 0, total: 0 };
  return {
    done: trackCompletedCount(track),
    total: track.lessons.length,
  };
}
