"use client";

import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import {
  COURSE,
  MATERIALS,
  TOTAL_LESSONS,
  TRACKS,
} from "@/data/course";
import { useCompletion } from "@/lib/completion";

export default function HomePage() {
  const { completedCount, progressPercent, trackCompletedCount, ready } =
    useCompletion();

  return (
    <PageShell className="gap-12 pt-16">
      <section className="flex flex-col gap-5">
        <p className="text-[13px] font-medium text-[#737373]">
          {COURSE.eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.15] text-[#0f0f0f] md:text-[44px] md:leading-[59px]">
          {COURSE.title}
        </h1>
        <p className="max-w-3xl text-base leading-[22px] text-[#737373]">
          {COURSE.description}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/trilhas" className="btn-primary px-5 py-3 text-sm">
            Começar pelas trilhas
          </Link>
          <a href="#materiais" className="btn-secondary px-5 py-3 text-sm">
            Ver materiais
          </a>
        </div>
      </section>

      <section className="flex w-full flex-col gap-3 rounded-xl border border-[#e0e0e0] bg-[#f7f7f7] p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[13px] font-medium text-[#737373]">
              Seu progresso
            </p>
            <p className="text-xl font-semibold text-[#0f0f0f]">
              {ready
                ? `${completedCount} de ${TOTAL_LESSONS} aulas concluídas`
                : `— de ${TOTAL_LESSONS} aulas concluídas`}
            </p>
          </div>
          <p className="text-[13px] font-medium text-[#737373]">
            {ready ? `${progressPercent}%` : "—"}
          </p>
        </div>
        <div className="h-2 w-full overflow-hidden rounded bg-[#e0e0e0]">
          <div
            className="h-2 rounded bg-[#0f0f0f] transition-[width] duration-300"
            style={{ width: ready ? `${progressPercent}%` : "0%" }}
          />
        </div>
      </section>

      <section className="flex w-full flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[22px] font-semibold text-[#0f0f0f]">
            As 4 trilhas
          </h2>
          <p className="text-sm text-[#737373]">
            Dois vídeos por trilha · progresso marcado ao concluir
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {TRACKS.map((track) => {
            const done = ready ? trackCompletedCount(track) : 0;
            return (
              <Link
                key={track.id}
                href={`/aulas/${track.id}/${track.lessons[0].id}`}
                className="flex min-h-[200px] flex-col justify-between rounded-xl border border-[#e0e0e0] bg-white p-6 transition-colors hover:border-[#cfcfcf]"
              >
                <div className="flex flex-col gap-2.5">
                  <p className="text-xs font-medium text-[#737373]">
                    {track.numberLabel}
                  </p>
                  <h3 className="text-xl font-semibold text-[#0f0f0f]">
                    {track.title}
                  </h3>
                  <p className="text-sm leading-[19px] text-[#737373]">
                    {track.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between gap-3 text-[13px] font-medium">
                  <span className="text-[#0f0f0f]">
                    {done} de {track.lessons.length} aulas concluídas
                  </span>
                  <span className="text-[#737373]">Ver aulas →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="materiais" className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[22px] font-semibold text-[#0f0f0f]">
            Materiais de apoio
          </h2>
          <p className="text-sm text-[#737373]">
            Baixe os arquivos para acompanhar as aulas
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#e0e0e0]">
          {MATERIALS.map((material, index) => (
            <div
              key={material.id}
              className={`flex items-center justify-between gap-4 px-5 py-[18px] ${
                index % 2 === 1 ? "bg-[#f7f7f7]" : "bg-white"
              } ${index < MATERIALS.length - 1 ? "border-b border-[#e0e0e0]" : ""}`}
            >
              <p className="text-sm font-medium text-[#0f0f0f]">
                {material.title}
              </p>
              <Link
                href={material.href}
                className="btn-secondary rounded-md px-3 py-1.5 text-xs font-semibold"
              >
                Baixar
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
