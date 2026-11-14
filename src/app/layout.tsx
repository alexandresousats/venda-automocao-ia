import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { AppNav } from "@/components/app-nav";
import { COURSE } from "@/data/course";
import { CompletionProvider } from "@/lib/completion";
import { ThemeProvider } from "@/lib/theme";
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
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('curso-atendimento-ia:theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          <CompletionProvider>
            <Suspense
              fallback={
                <header className="flex h-[61px] w-full items-center border-b border-[var(--border)] bg-[var(--background)] px-6 md:px-12">
                  <span className="text-base font-semibold text-[var(--foreground)]">
                    {COURSE.brand}
                  </span>
                </header>
              }
            >
              <AppNav />
            </Suspense>
            {children}
          </CompletionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
