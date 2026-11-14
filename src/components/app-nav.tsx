"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProfileMenu } from "@/components/profile-menu";
import { COURSE } from "@/data/course";

const NAV = [
  { href: "/trilhas", label: "Trilhas" },
  { href: "/suporte", label: "Suporte técnico" },
] as const;

export function AppNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-[#e6e6e6] bg-white px-6 py-[18px] md:px-12">
      <div className="flex min-w-0 flex-1 items-center">
        <Link
          href="/"
          className="truncate text-base font-semibold text-[#0f0f0f]"
        >
          {COURSE.brand}
        </Link>
      </div>

      <nav className="hidden items-center justify-center gap-8 text-sm sm:flex">
        {NAV.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "font-semibold text-[#0f0f0f]"
                  : "font-normal text-[#737373] hover:text-[#0f0f0f]"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-1 items-center justify-end gap-3">
        <Link
          href="/contratar"
          className="rounded-lg bg-[#0f0f0f] px-4 py-2.5 text-[13px] font-medium text-white hover:bg-black"
        >
          Contratar Automação
        </Link>
        <ProfileMenu />
      </div>
    </header>
  );
}
