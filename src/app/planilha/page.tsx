import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { PRICING_ROWS, PRICING_SUMMARY } from "@/data/course";

export default function PlanilhaPage() {
  return (
    <PageShell className="gap-8 pt-14">
      <PageHeader
        eyebrow="Materiais"
        title="Planilha de investimento"
        description="Estime custos de VPS, ferramentas e tempo para colocar o atendimento com IA no ar."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PRICING_SUMMARY.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-2 rounded-xl border border-[#e6e6e6] bg-white px-6 py-5"
          >
            <p className="text-[13px] font-medium text-[#737373]">
              {item.label}
            </p>
            <p className="text-2xl font-semibold text-[#0f0f0f]">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="w-full overflow-hidden rounded-xl border border-[#e0e0e0]">
        <div className="hidden bg-[#121212] px-6 py-3.5 text-xs font-semibold text-white md:grid md:grid-cols-[3fr_2fr_2fr_3fr]">
          <span>Item</span>
          <span>Tipo</span>
          <span>Estimativa</span>
          <span>Notas</span>
        </div>
        {PRICING_ROWS.map((row, index) => (
          <div
            key={row.item}
            className={`grid grid-cols-1 gap-3 border-b border-[#e0e0e0] px-6 py-[18px] last:border-b-0 md:grid-cols-[3fr_2fr_2fr_3fr] md:items-center md:gap-0 ${
              index % 2 === 1 ? "bg-[#f9f9f9]" : "bg-white"
            }`}
          >
            <p className="text-sm font-medium text-[#0f0f0f]">{row.item}</p>
            <div>
              <span className="inline-flex rounded-md border border-[#e0e0e0] bg-white px-2.5 py-1 text-xs font-medium text-[#0f0f0f]">
                {row.type}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#0f0f0f]">
              {row.estimate}
            </p>
            <p className="text-[13px] text-[#6b6b6b]">{row.notes}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="#"
          className="rounded-lg bg-[#0f0f0f] px-5 py-3 text-sm font-medium text-white"
        >
          Abrir planilha modelo
        </a>
        <Link
          href="/#materiais"
          className="rounded-lg border border-[#e6e6e6] bg-white px-5 py-3 text-sm font-medium text-[#0f0f0f]"
        >
          Ver lista de VPS
        </Link>
      </div>
    </PageShell>
  );
}
