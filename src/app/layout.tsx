import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { AppNav } from "@/components/app-nav";
import { COURSE } from "@/data/course";
import { CompletionProvider } from "@/lib/completion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${COURSE.title} · ${COURSE.brand}`,
  description: COURSE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#0f0f0f]">
        <CompletionProvider>
          <Suspense
            fallback={
              <header className="flex h-[61px] w-full items-center border-b border-[#e6e6e6] bg-white px-6 md:px-12">
                <span className="text-base font-semibold text-[#0f0f0f]">
                  {COURSE.brand}
                </span>
              </header>
            }
          >
            <AppNav />
          </Suspense>
          {children}
        </CompletionProvider>
      </body>
    </html>
  );
}
