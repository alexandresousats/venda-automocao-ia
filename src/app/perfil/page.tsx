import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { MOCK_PROFILE } from "@/data/profile";

export default function PerfilPage() {
  return (
    <PageShell className="pt-14">
      <PageHeader
        eyebrow="Conta"
        title="Perfil"
        description="Visão rápida da conta. Para editar dados, senha ou tema, use Configurações."
      />

      <section className="w-full max-w-xl overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
        <div className="flex items-center gap-4 border-b border-[var(--border)] px-6 py-5">
          <span className="inline-flex size-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-semibold text-[var(--foreground)]">
            {MOCK_PROFILE.iniciais}
          </span>
          <div>
            <p className="text-lg font-semibold text-[var(--foreground)]">
              {MOCK_PROFILE.nome} {MOCK_PROFILE.sobrenome}
            </p>
            <p className="text-sm text-[var(--muted)]">{MOCK_PROFILE.email}</p>
          </div>
        </div>
        <div className="px-6 py-5">
          <Link
            href="/configuracoes"
            className="inline-flex rounded-lg bg-[var(--foreground)] px-4 py-2.5 text-sm font-medium text-[var(--background)]"
          >
            Ir para Configurações
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
