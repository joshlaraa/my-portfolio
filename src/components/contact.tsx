import { Link } from "react-router";

import { EMAIL, SOCIALS } from "@/data/portfolio";

const linkClass =
  "group inline-flex items-center gap-2 rounded-md text-foreground";

function HoverArrow() {
  return (
    <span
      aria-hidden="true"
      className="opacity-0 transition-[opacity,translate] duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100"
    >
      →
    </span>
  );
}

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="px-6 pt-24 pb-16 sm:pt-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 sm:mb-20">
          <p className="mb-4 text-sm text-muted-foreground">Contact</p>
          <div className="h-px bg-border" />
        </div>

        <div className="max-w-3xl">
          <h2 className="mb-8 text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            If you would like to discuss a project or just say hi, I'm always
            down to chat 📲
          </h2>

          <div className="mt-16 space-y-8">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Mail</p>
              <a
                href={`mailto:${EMAIL}`}
                className={`${linkClass} text-lg break-all`}
              >
                {EMAIL}
                <HoverArrow />
              </a>
            </div>

            <div className="h-px bg-border" />

            <ul className="grid gap-6 sm:grid-cols-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {social.label}
                  </p>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label}: ${social.handle} (opens in new tab)`}
                    className={`${linkClass} text-base`}
                  >
                    {social.handle}
                    <HoverArrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="mt-20 border-t border-border pt-12">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>
              &copy; <time dateTime={String(year)}>{year}</time> Designed and
              built by Josh Lara
            </p>
            <nav aria-label="Legal" className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="rounded-md transition-colors duration-200 hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="rounded-md transition-colors duration-200 hover:text-foreground"
              >
                Terms
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </section>
  );
}
