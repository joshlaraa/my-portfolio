import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useDocumentTitle } from "@/hooks/use-document-title";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  useDocumentTitle(title);

  return (
    <main className="relative min-h-dvh px-6 pt-[max(4rem,env(safe-area-inset-top))] pb-16 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 flex items-center justify-between">
          <Link
            to="/"
            className="-mx-2 inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to home
          </Link>
          <AnimatedThemeToggler className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:text-foreground" />
        </div>

        <p className="mb-4 text-sm text-muted-foreground">Legal</p>
        <div className="mb-10 h-px bg-border" />

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mb-12 text-sm text-muted-foreground">
          Last updated: {updated}
        </p>

        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </main>
  );
}

interface LegalSectionProps {
  heading: string;
  children: ReactNode;
}

export function LegalSection({ heading, children }: LegalSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {heading}
      </h2>
      {children}
    </section>
  );
}
