import { ArrowDown } from "lucide-react";

import { ClimbingWall } from "@/components/climbing-wall";
import { cn } from "@/lib/utils";

const INTERESTS = [
  {
    emoji: "🧗🏽",
    label: "Rock climber",
    className:
      "bg-stone-100 text-stone-700 dark:bg-stone-800/50 dark:text-stone-300",
  },
  {
    emoji: "🌴",
    label: "San Diego at heart",
    className: "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  },
  {
    emoji: "⚾",
    label: "Go Padres!",
    className:
      "bg-[#FFC425]/20 text-[#2F241D] dark:bg-[#FFC425]/10 dark:text-[#FFC425]",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 lg:px-12"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      <ClimbingWall />

      <div className="mx-auto max-w-5xl space-y-8 py-32 text-center">
        <p className="text-sm tracking-wide text-muted-foreground lg:text-base">
          Hey there, I'm Josh Lara 👋🏽
        </p>
        <h1 className="text-5xl leading-[1.1] font-semibold tracking-tight text-balance md:text-7xl lg:text-8xl">
          Software Engineer
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl lg:text-2xl">
          Software Engineer I at Honeywell Aerospace, building applications that
          leave an impact on today's world.
        </p>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {INTERESTS.map((interest) => (
            <li
              key={interest.label}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-[translate] duration-200 hover:-translate-y-0.5",
                interest.className,
              )}
            >
              <span aria-hidden="true">{interest.emoji}</span>
              {interest.label}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute right-6 bottom-[max(2rem,env(safe-area-inset-bottom))] z-40 flex h-12 w-12 items-center justify-center rounded-2xl border bg-background/40 text-muted-foreground backdrop-blur-md transition-[color,scale] duration-200 hover:text-foreground active:scale-95 lg:right-12 lg:bottom-10"
      >
        <ArrowDown aria-hidden="true" className="h-4 w-4" />
      </a>
    </section>
  );
}
