import { Suspense } from "react";
import { AulaView } from "@/components/aula-view";
import { TRACKS } from "@/data/course";

export function generateStaticParams() {
  return TRACKS.flatMap((track) =>
    track.lessons.map((lesson) => ({
      trackId: track.id,
      lessonId: lesson.id,
    })),
  );
}

export default function AulaPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-[7.5vw] lg:px-[120px]">
          <div className="h-[280px] animate-pulse rounded-xl bg-[#171717] sm:h-[420px] lg:h-[560px]" />
        </main>
      }
    >
      <AulaView />
    </Suspense>
  );
}
