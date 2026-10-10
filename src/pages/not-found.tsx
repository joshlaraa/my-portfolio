import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

import { useDocumentTitle } from "@/hooks/use-document-title";

export function NotFound() {
  useDocumentTitle("Page not found");

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <p className="mb-4 text-sm tracking-wide text-muted-foreground">
        Error 404
      </p>
      <h1 className="mb-6 text-7xl font-semibold tracking-tight md:text-9xl">
        404
      </h1>
      <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-2xl border bg-background/40 px-5 py-3 text-sm text-muted-foreground backdrop-blur-md transition-[color,scale] duration-200 hover:text-foreground active:scale-95"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Back to home
      </Link>
    </main>
  );
}
