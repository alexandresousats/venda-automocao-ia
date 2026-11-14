"use client";

import { useEffect, useId, useRef, useState } from "react";
import { MOCK_PROFILE } from "@/data/profile";

export function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 2200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          setNotice(null);
          setOpen((value) => !value);
        }}
        className="inline-flex size-9 items-center justify-center rounded-full border border-[#e0e0e0] bg-[#f5f5f5] text-xs font-semibold tracking-wide text-[#0f0f0f] transition-colors hover:border-[#cfcfcf] hover:bg-[#eeeeee]"
        title="Perfil"
      >
        {MOCK_PROFILE.iniciais}
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Perfil"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-[280px] overflow-hidden rounded-xl border border-[#e6e6e6] bg-white shadow-[0_12px_32px_rgba(15,15,15,0.08)]"
        >
          <div className="border-b border-[#e6e6e6] px-4 py-3">
            <p className="text-sm font-semibold text-[#0f0f0f]">
              {MOCK_PROFILE.nome} {MOCK_PROFILE.sobrenome}
            </p>
            <p className="mt-0.5 text-xs text-[#737373]">{MOCK_PROFILE.email}</p>
          </div>

          <div className="flex flex-col py-1">
            <ProfileRow label="Nome" value={MOCK_PROFILE.nome} />
            <ProfileRow label="Sobrenome" value={MOCK_PROFILE.sobrenome} />
            <ProfileRow label="E-mail" value={MOCK_PROFILE.email} />
            <ProfileRow label="Senha" value={MOCK_PROFILE.senhaMascarada} />
          </div>

          <div className="border-t border-[#e6e6e6] py-1">
            <button
              type="button"
              role="menuitem"
              className="flex w-full px-4 py-2.5 text-left text-sm text-[#0f0f0f] hover:bg-[#f7f7f7]"
              onClick={() => {
                setNotice("Link de reset enviado (mock).");
                setOpen(false);
              }}
            >
              Resetar senha
            </button>
            <button
              type="button"
              role="menuitem"
              className="flex w-full px-4 py-2.5 text-left text-sm text-[#0f0f0f] hover:bg-[#f7f7f7]"
              onClick={() => {
                setNotice("Segurança: sessão local apenas (mock).");
                setOpen(false);
              }}
            >
              Segurança
            </button>
          </div>
        </div>
      ) : null}

      {notice ? (
        <div className="absolute right-0 top-[calc(100%+10px)] z-40 min-w-[220px] rounded-lg border border-[#e6e6e6] bg-white px-3 py-2 text-xs text-[#0f0f0f] shadow-sm">
          {notice}
        </div>
      ) : null}
    </div>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      role="menuitem"
      className="flex items-start justify-between gap-3 px-4 py-2.5"
    >
      <span className="text-[13px] text-[#737373]">{label}</span>
      <span className="max-w-[160px] truncate text-right text-[13px] font-medium text-[#0f0f0f]">
        {value}
      </span>
    </div>
  );
}
