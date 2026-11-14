"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { MOCK_PROFILE } from "@/data/profile";

export function ProfileMenu() {
  const [open, setOpen] = useState(false);
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

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="avatar-btn"
        title="Conta"
      >
        {MOCK_PROFILE.iniciais}
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Menu da conta"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-[220px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-[0_12px_32px_rgba(15,15,15,0.12)]"
        >
          <Link
            href="/perfil"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="menu-item border-b border-[var(--border)]"
          >
            <span>Perfil</span>
            <span aria-hidden className="menu-arrow">
              →
            </span>
          </Link>
          <Link
            href="/configuracoes"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="menu-item"
          >
            <span>Configurações</span>
            <span aria-hidden className="menu-arrow">
              →
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
