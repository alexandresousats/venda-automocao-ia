"use client";

import { useState, type FormEvent } from "react";
import { PageHeader, PageShell } from "@/components/page-shell";
import { CONTRACT_FEATURES } from "@/data/course";

export default function ContratarPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <PageShell className="pt-14">
      <PageHeader
        eyebrow="Serviço"
        title="Contratar Automação"
        description="Prefere não fazer sozinho? Contrate a configuração completa do atendimento com IA no WhatsApp."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="flex flex-col gap-4 rounded-xl border border-[#e6e6e6] bg-white p-8">
          <p className="text-[13px] font-medium text-[#737373]">
            Implantação completa
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f]">
            Setup guiado + entrega pronta
          </h2>
          <ul className="flex flex-col gap-3">
            {CONTRACT_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-sm text-[#0f0f0f]"
              >
                <span className="font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold text-[#0f0f0f]">Sob consulta</p>
          <a
            href="#formulario"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#0f0f0f] px-5 py-3 text-sm font-medium text-white"
          >
            Solicitar orçamento
          </a>
        </section>

        <section
          id="formulario"
          className="flex flex-col gap-5 rounded-xl border border-[#e0e0e0] bg-white p-7"
        >
          <div className="flex flex-col gap-1.5">
            <h2 className="text-lg font-semibold text-[#0f0f0f]">
              Envie seus dados
            </h2>
            <p className="text-[13px] text-[#737373]">
              Retorno em até 1 dia útil pelo WhatsApp informado.
            </p>
          </div>

          {sent ? (
            <div className="rounded-lg border border-[#e0e0e0] bg-[#f7f7f7] p-4 text-sm text-[#0f0f0f]">
              Pedido registrado localmente (mock). Em produção, isso enviaria
              para o time comercial.
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <Field
                label="Nome"
                required
                name="nome"
                placeholder="Seu nome completo"
              />
              <Field
                label="WhatsApp"
                required
                name="whatsapp"
                placeholder="(11) 99999-9999"
              />
              <Field
                label="Negócio"
                required
                name="negocio"
                placeholder="Nome do negócio / nicho"
              />
              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#0f0f0f]">
                  Observações
                </span>
                <textarea
                  name="observacoes"
                  rows={4}
                  placeholder="Conte o que já tentou ou o prazo desejado"
                  className="min-h-24 w-full resize-y rounded-lg border border-[#e0e0e0] bg-white px-3.5 py-3 text-sm text-[#0f0f0f] outline-none placeholder:text-[#9e9e9e] focus:border-[#0f0f0f]"
                />
              </label>
              <div className="h-px w-full bg-[#e0e0e0]" />
              <div className="flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center rounded-lg bg-[#0f0f0f] text-sm font-semibold text-white"
                >
                  Enviar pedido
                </button>
                <p className="text-xs text-[#9e9e9e]">
                  Ao enviar, você concorda em ser contactado sobre a
                  implantação.
                </p>
              </div>
            </form>
          )}
        </section>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-1 text-[13px] font-medium text-[#0f0f0f]">
        {label}
        {required ? <span>*</span> : null}
      </span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-[#e0e0e0] bg-white px-3.5 text-sm text-[#0f0f0f] outline-none placeholder:text-[#9e9e9e] focus:border-[#0f0f0f]"
      />
    </label>
  );
}
