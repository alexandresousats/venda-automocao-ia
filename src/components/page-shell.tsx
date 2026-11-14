import type { ReactNode } from "react";

export function PageShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 pb-20 pt-10 md:px-[7.5vw] lg:px-[120px] ${className}`}
    >
      {children}
    </main>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[13px] font-medium text-[var(--muted)]">{eyebrow}</p>
      <h1 className="text-3xl font-bold leading-tight text-[var(--foreground)] md:text-4xl md:leading-[50px]">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-[22px] text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}
