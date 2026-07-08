import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <main className="relative min-h-screen px-6 lg:px-12 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <AnimatedThemeToggler
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Toggle theme"
          />
        </div>

        <p className="text-sm text-muted-foreground mb-4">Legal</p>
        <div className="h-px bg-border mb-10" />

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: {updated}
        </p>

        <div className="space-y-10 text-base text-muted-foreground leading-relaxed">
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
      <h2 className="text-xl font-semibold text-foreground tracking-tight">
        {heading}
      </h2>
      {children}
    </section>
  );
}
