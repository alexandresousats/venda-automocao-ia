"use client";

import { useState } from "react";

export function VideoPlayer({ title }: { title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-xl bg-[#1a1a1a]">
      <button
        type="button"
        aria-label={playing ? `Pausar ${title}` : `Reproduzir ${title}`}
        onClick={() => setPlaying((value) => !value)}
        className="relative flex h-[280px] w-full items-center justify-center bg-[#171717] sm:h-[420px] lg:h-[560px]"
      >
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
        <span className="relative flex size-20 items-center justify-center rounded-full border-[6px] border-white/35 bg-white/95 shadow-sm">
          {playing ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden
            >
              <rect x="7" y="6" width="5" height="16" rx="1.5" fill="#0f0f0f" />
              <rect
                x="16"
                y="6"
                width="5"
                height="16"
                rx="1.5"
                fill="#0f0f0f"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden
              className="translate-x-0.5"
            >
              <path d="M10 7.5v13l11-6.5-11-6.5z" fill="#0f0f0f" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
