"use client";

import Link from "next/link";
import { CompletionCheck } from "@/components/completion-check";
import type { Lesson, Track } from "@/data/course";
import { useCompletion } from "@/lib/completion";

export function LessonRow({
  track,
  lesson,
}: {
  track: Track;
  lesson: Lesson;
}) {
  const { isCompleted } = useCompletion();
  const completed = isCompleted(track.id, lesson.id);
  const href = `/aulas/${track.id}/${lesson.id}`;

  return (
    <Link
      href={href}
      className="flex w-full items-center justify-between gap-4 rounded-[10px] border border-[#e6e6e6] bg-white px-5 py-[18px] transition-colors hover:border-[#cfcfcf]"
    >
      <div className="flex min-w-0 flex-1 items-center gap-3.5">
        <CompletionCheck completed={completed} />
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-medium leading-5 text-[#0f0f0f]">
            {lesson.title}
          </p>
          <p
            className={`mt-1 text-xs leading-4 ${
              completed ? "font-medium text-[#0f7333]" : "text-[#737373]"
            }`}
          >
            {completed ? "Vídeo · Concluída" : "Vídeo · Não concluída"}
          </p>
        </div>
      </div>
      <span className="shrink-0 text-[13px] font-medium text-[#737373]">
        {completed ? "Reassistir" : "Assistir →"}
      </span>
    </Link>
  );
}
