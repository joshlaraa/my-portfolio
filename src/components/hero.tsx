import { ArrowDown } from "lucide-react";

const SECTIONS = ["hero", "work", "about", "contact"];

export function Hero() {
  const scrollToNextSection = () => {
    const scrollPosition = window.scrollY + 100;
    let currentIndex = 0;
    SECTIONS.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= scrollPosition) {
        currentIndex = index;
      }
    });
    const nextId = SECTIONS[Math.min(currentIndex + 1, SECTIONS.length - 1)];
    document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 py-32">
        <p className="text-muted-foreground text-sm lg:text-base tracking-wide">
          Hey there, I'm Josh Lara 👋🏽
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-balance leading-[1.1] tracking-tight">
          Software Engineer
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
          A recent graduate from California State University San Marcos, majored in
          Software Engineering. Passionate about building applications that
          leave an impact on today's world.
        </p>
      </div>

      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        className="supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 absolute bottom-8 right-6 lg:bottom-10 lg:right-12 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border text-muted-foreground backdrop-blur-md transition-all duration-300 hover:text-foreground active:scale-95"
      >
        <ArrowDown className="h-4 w-4" />
      </button>
    </section>
  );
}
