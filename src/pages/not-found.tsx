import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <p className="text-sm text-muted-foreground tracking-wide mb-4">
        Error 404
      </p>
      <h1 className="text-7xl md:text-9xl font-semibold tracking-tight mb-6">
        404
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-10 text-pretty leading-relaxed">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm text-muted-foreground backdrop-blur-md transition-all duration-300 hover:text-foreground active:scale-95"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </main>
  );
}
