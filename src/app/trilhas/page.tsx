"use client";

import { LessonRow } from "@/components/lesson-row";
import { PageHeader, PageShell } from "@/components/page-shell";
import { TRACKS } from "@/data/course";
import { useCompletion } from "@/lib/completion";

export default function TrilhasPage() {
  const { trackCompletedCount, ready } = useCompletion();

  return (
    <PageShell className="pt-14">
      <PageHeader
        eyebrow="Trilhas"
        title="Quatro trilhas · oito aulas em vídeo"
        description="Conclua cada aula para marcar o check. O progresso da trilha atualiza automaticamente."
      />

      <div className="flex w-full flex-col gap-6">
        {TRACKS.map((track) => {
          const done = ready ? trackCompletedCount(track) : 0;
          return (
            <section
              key={track.id}
              className="flex w-full flex-col gap-3 rounded-xl border border-[#e6e6e6] bg-white p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <p className="text-[13px] font-medium text-[#737373]">
                    Trilha {track.numberLabel}
                  </p>
                  <h2 className="text-[22px] font-semibold leading-8 text-[#0f0f0f]">
                    {track.title}
                  </h2>
                  <p className="text-sm leading-5 text-[#737373]">
                    {track.description}
                  </p>
                </div>
                <p className="shrink-0 text-[13px] font-medium text-[#0f0f0f] md:pt-1">
                  {done} de {track.lessons.length} aulas concluídas
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {track.lessons.map((lesson) => (
                  <LessonRow key={lesson.id} track={track} lesson={lesson} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
