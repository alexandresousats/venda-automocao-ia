import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import {
  COMMON_ERRORS,
  REPORT_CHECKLIST,
  SUPPORT_CHANNELS,
} from "@/data/course";

export default function SuportePage() {
  return (
    <PageShell className="pt-14">
      <PageHeader
        eyebrow="Suporte técnico"
        title="Como pedir ajuda"
        description="Use os canais abaixo e inclua o máximo de contexto. Quanto mais claro o relato, mais rápido a resolução."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {SUPPORT_CHANNELS.map((channel) => (
          <div
            key={channel.title}
            className="flex flex-col gap-2.5 rounded-xl border border-[#e6e6e6] bg-white p-6"
          >
            <h2 className="text-lg font-semibold text-[#0f0f0f]">
              {channel.title}
            </h2>
            <p className="text-sm leading-5 text-[#737373]">
              {channel.description}
            </p>
            {channel.title === "Trilha 4" ? (
              <Link
                href="/trilhas"
                className="mt-1 text-[13px] font-medium text-[#0f0f0f]"
              >
                Ver trilha →
              </Link>
            ) : null}
          </div>
        ))}
      </div>

      <section className="flex w-full flex-col gap-3">
        <h2 className="text-[22px] font-semibold text-[#0f0f0f]">
          O que incluir no relato
        </h2>
        {REPORT_CHECKLIST.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-lg bg-[#f5f5f5] px-4 py-3.5"
          >
            <span className="inline-block size-[18px] shrink-0 rounded border border-[#e6e6e6] bg-white" />
            <p className="text-sm text-[#0f0f0f]">{item}</p>
          </div>
        ))}
      </section>

      <section className="flex w-full flex-col gap-3">
        <h2 className="text-[22px] font-semibold text-[#0f0f0f]">
          Erros comuns (visão rápida)
        </h2>
        {COMMON_ERRORS.map((error) => (
          <div
            key={error.title}
            className="flex flex-col gap-1.5 rounded-[10px] border border-[#e6e6e6] bg-white px-5 py-[18px]"
          >
            <h3 className="text-[15px] font-semibold text-[#0f0f0f]">
              {error.title}
            </h3>
            <p className="text-sm leading-5 text-[#737373]">{error.solution}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
