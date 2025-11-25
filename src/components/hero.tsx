export function Hero() {
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
          Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
          A rising senior at California State University San Marcos, majoring in
          Software Engineering. Passionate about building applications that
          leave an impact on today's world.
        </p>
      </div>
    </section>
  );
}
