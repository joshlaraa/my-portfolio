export function Contact() {
  return (
    <section id="contact" className="pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-sm text-muted-foreground mb-4">Contact</p>
          <div className="h-px bg-border" />
        </div>

        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-balance">
            If you would like to discuss a project or just say hi, I'm always
            down to chat 📲
          </h2>

          <div className="space-y-8 mt-16">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Mail</p>
              <a
                href="mailto:joshualara9087@gmail.com"
                className="text-lg text-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2 group"
              >
                joshualara9087@gmail.com
                <span className="opacity-0 transform group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </a>
            </div>

            <div className="h-px bg-border" />

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: "LinkedIn",
                  handle: "@joshlaraa",
                  url: "https://www.linkedin.com/in/josh-laraa/",
                },
                {
                  label: "GitHub",
                  handle: "@joshlaraa",
                  url: "https://github.com/joshlaraa",
                },
                {
                  label: "Resume",
                  handle: "2025 Version",
                  url: "/JoshLaraResume.pdf",
                },
              ].map((social) => (
                <div key={social.label}>
                  <p className="text-sm text-muted-foreground mb-2">
                    {social.label}
                  </p>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    {social.handle}
                    <span className="opacity-0 transform group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-12 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025. Designed by Josh Lara</p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-foreground transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-foreground transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
