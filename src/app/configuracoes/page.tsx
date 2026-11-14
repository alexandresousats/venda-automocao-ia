"use client";

import { useState, type FormEvent } from "react";
import { PageHeader, PageShell } from "@/components/page-shell";
import { MOCK_PROFILE } from "@/data/profile";
import { useTheme } from "@/lib/theme";

export default function ConfiguracoesPage() {
  const { theme, setTheme, ready } = useTheme();
  const [nome, setNome] = useState<string>(MOCK_PROFILE.nome);
  const [sobrenome, setSobrenome] = useState<string>(MOCK_PROFILE.sobrenome);
  const [email, setEmail] = useState<string>(MOCK_PROFILE.email);
  const [senha, setSenha] = useState<string>("");
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Alterações salvas localmente (mock).");
  }

  return (
    <PageShell className="pt-14">
      <PageHeader
        eyebrow="Conta"
        title="Configurações"
        description="Gerencie seus dados, senha e preferência de tema. Tudo permanece no navegador."
      />

      <div className="grid w-full max-w-2xl gap-6">
        <section className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
          <h2 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
            Dados da conta
          </h2>
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <Field
              label="Nome"
              value={nome}
              onChange={setNome}
              autoComplete="given-name"
            />
            <Field
              label="Sobrenome"
              value={sobrenome}
              onChange={setSobrenome}
              autoComplete="family-name"
            />
            <Field
              label="E-mail"
              type="email"
              value={email}
              onChange={setEmail}
              autoComplete="email"
            />
            <Field
              label="Senha"
              type="password"
              value={senha}
              onChange={setSenha}
              placeholder="Nova senha (mock)"
              autoComplete="new-password"
            />
              <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className="btn-primary px-4 py-2.5 text-sm">
                Salvar alterações
              </button>
              <button
                type="button"
                className="btn-secondary px-4 py-2.5 text-sm"
                onClick={() =>
                  setNotice("E-mail de reset enviado (mock).")
                }
              >
                Resetar senha
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
          <h2 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
            Segurança
          </h2>
          <p className="mb-4 text-sm text-[var(--muted)]">
            Sessão apenas neste navegador. Não há autenticação real nesta demo.
          </p>
          <div className="rounded-lg bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]">
            Status: sessão local ativa · dados mock
          </div>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-[var(--foreground)]">
                Tema
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Alternar entre claro e escuro (salvo no navegador).
              </p>
            </div>
            <div className="inline-flex rounded-lg border border-[var(--border)] p-1">
              <ThemeButton
                active={ready && theme === "light"}
                onClick={() => setTheme("light")}
                label="Claro"
              />
              <ThemeButton
                active={ready && theme === "dark"}
                onClick={() => setTheme("dark")}
                label="Escuro"
              />
            </div>
          </div>
        </section>

        {notice ? (
          <p className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]">
            {notice}
          </p>
        ) : null}
      </div>
    </PageShell>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] font-medium text-[var(--foreground)]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-10 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--background)] px-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
      />
    </label>
  );
}

function ThemeButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "btn-primary rounded-md px-3 py-1.5 text-sm"
          : "rounded-md px-3 py-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
      }
    >
      {label}
    </button>
  );
}
