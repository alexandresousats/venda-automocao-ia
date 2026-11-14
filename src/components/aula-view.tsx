"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { LessonRow } from "@/components/lesson-row";
import { PageShell } from "@/components/page-shell";
import { VideoPlayer } from "@/components/video-player";
import { getLesson } from "@/data/course";
import { useCompletion } from "@/lib/completion";

export function AulaView() {
  const params = useParams<{ trackId: string; lessonId: string }>();
  const trackId = params.trackId;
  const lessonId = params.lessonId;
  const match = getLesson(trackId, lessonId);
  const { isCompleted, toggleCompleted, trackCompletedCount, ready } =
    useCompletion();

  if (!match) {
    return (
      <PageShell>
        <p className="text-[#737373]">Aula não encontrada.</p>
        <Link href="/trilhas" className="text-sm font-medium text-[#0f0f0f]">
          Voltar para trilhas →
        </Link>
      </PageShell>
    );
  }

  const { track, lesson } = match;
  const completed = ready && isCompleted(track.id, lesson.id);
  const done = ready ? trackCompletedCount(track) : 0;

  return (
    <PageShell className="gap-8 pt-10">
      <p className="text-[13px] font-medium text-[#737373]">
        Trilha {track.number} — {track.title}
        {"  /  "}
        Aula {lesson.number}
      </p>

      <VideoPlayer title={lesson.title} />

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <p className="text-[13px] font-medium text-[#737373]">
            Aula {lesson.number} · Vídeo
          </p>
          <h1 className="text-[26px] font-semibold leading-9 text-[#0f0f0f]">
            {lesson.title}
          </h1>
          <p className="max-w-3xl text-[15px] leading-[21px] text-[#737373]">
            {lesson.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => toggleCompleted(track.id, lesson.id)}
          className={
            completed
              ? "btn-complete shrink-0 px-4 py-3 text-sm"
              : "btn-ghost shrink-0 px-3.5 py-2.5 text-[13px] text-[var(--muted)]"
          }
        >
          {completed ? (
            <>
              <span className="inline-flex size-[18px] items-center justify-center rounded-sm bg-white">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7.2L5.6 9.8L11 4.2"
                    stroke="#17a34a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Aula concluída
            </>
          ) : (
            <>
              <span className="inline-block size-[18px] rounded-full border-[1.5px] border-[#737373]" />
              Marcar como concluída ao terminar
            </>
          )}
        </button>
      </div>

      <section className="flex w-full flex-col gap-3">
        <h2 className="text-lg font-semibold text-[#0f0f0f]">
          Aulas desta trilha
        </h2>
        <p className="text-[13px] font-medium text-[#737373]">
          Progresso: {done} de {track.lessons.length} concluídas
        </p>
        <div className="flex flex-col gap-2">
          {track.lessons.map((item) => (
            <LessonRow key={item.id} track={track} lesson={item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
