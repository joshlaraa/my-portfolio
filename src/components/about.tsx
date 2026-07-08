"use client";

import { useEffect, useRef, useState } from "react";

function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView] as const;
}

export function About() {
  const [headerRef] = useInView();
  const [contentRef] = useInView();
  const [sidebarRef] = useInView();

  return (
    <section id="about" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <p className="text-sm text-muted-foreground mb-4">Information</p>
          <div className="h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          <div ref={contentRef} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Dedicated to Creativity, Culture & Growth 🚀
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {
                  "I'm Josh, a curious engineer based in San Diego, CA. As a recent graduate of California State University San Marcos, I helped raise over $160k for student innovation and led technical clubs and cultural organizations like Society of Hispanic Professional Engineers and Society of Asian Scientists and Engineers."
                }
              </p>
              <p>
                {
                  "Across two internships, including Honeywell Aerospace, I've shipped real products end to end, from cutting software setup time to minutes to building applications with full ownership."
                }
              </p>
            </div>
          </div>

          <div ref={sidebarRef} className="space-y-8">
            <div>
              <h3 className="text-sm text-muted-foreground mb-4">Experience</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Software Engineer Intern",
                    company: "Honeywell",
                    period: "June 2025 — August 2025",
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Millennium Health",
                    period: "June 2024 — August 2024",
                  },
                ].map((job, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {job.company}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-muted-foreground mb-4">Leadership</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Founder",
                    org: "Student Knowledge and Applied Learning in Engineering",
                    period: "2024 — 2026",
                  },
                  {
                    title: "Treasurer",
                    org: "Society of Hispanic Professional Engineers",
                    period: "2023 — 2026",
                  },
                ].map((role, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium">{role.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {role.org}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-muted-foreground mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "UI/UX Design",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Vite",
                  "Tailwind CSS",
                  "Shadcn",
                  "React-Router-Dom",
                  "React-Query",
                  "Python",
                  "PySide6",
                  "Go",
                  "Supabase",
                  "AWS",
                  "LaTeX",
                  "CSS",
                  "HTML",
                  "Figma",
                  "Framer",
                  "Prettier",
                  "GitHub",
                  "Git",
                ].map((skill) => {
                  const key = skill.toLowerCase().replace(/[^a-z0-9]/g, "");
                  const skillStyles: Record<string, string> = {
                    react:
                      "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40",
                    typescript:
                      "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/28 dark:text-sky-300 dark:hover:bg-sky-800/36",
                    nextjs:
                      "bg-green-50 text-green-800 hover:bg-green-100 hover:text-green-900 dark:bg-green-800/30 dark:text-green-200 dark:hover:bg-green-700/36",
                    tailwindcss:
                      "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:text-cyan-800 dark:bg-cyan-900/28 dark:text-cyan-300 dark:hover:bg-cyan-800/36",
                    vite: "bg-violet-50 text-violet-700 hover:bg-violet-100 hover:text-violet-800 dark:bg-violet-900/28 dark:text-violet-300 dark:hover:bg-violet-800/36",
                    shadcn:
                      "bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800 dark:bg-purple-900/28 dark:text-purple-300 dark:hover:bg-purple-800/36",
                    reactrouterdom:
                      "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 dark:bg-indigo-900/28 dark:text-indigo-300 dark:hover:bg-indigo-800/36",
                    reactquery:
                      "bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800 dark:bg-teal-900/28 dark:text-teal-300 dark:hover:bg-teal-800/36",
                    python:
                      "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/28 dark:text-sky-300 dark:hover:bg-sky-800/36",
                    pyside6:
                      "bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 dark:bg-green-900/28 dark:text-green-300 dark:hover:bg-green-800/36",
                    go: "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:text-cyan-800 dark:bg-cyan-900/28 dark:text-cyan-300 dark:hover:bg-cyan-800/36",
                    supabase:
                      "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 dark:bg-emerald-900/28 dark:text-emerald-300 dark:hover:bg-emerald-800/36",
                    aws: "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-amber-900/28 dark:text-amber-300 dark:hover:bg-amber-800/36",
                    latex:
                      "bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800 dark:bg-red-900/28 dark:text-red-300 dark:hover:bg-red-800/36",
                    css: "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/28 dark:text-sky-300 dark:hover:bg-sky-800/36",
                    html: "bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800 dark:bg-rose-900/28 dark:text-rose-300 dark:hover:bg-rose-800/36",
                    prettier:
                      "bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 dark:bg-fuchsia-900/28 dark:text-fuchsia-300 dark:hover:bg-fuchsia-800/36",
                    github:
                      "bg-neutral-50 text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900 dark:bg-neutral-800/30 dark:text-neutral-200 dark:hover:bg-neutral-700/36",
                    git: "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-amber-900/28 dark:text-amber-300 dark:hover:bg-amber-800/36",
                    uiuxdesign:
                      "bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800 dark:bg-rose-900/28 dark:text-rose-300 dark:hover:bg-rose-800/36",
                    figma:
                      "bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 dark:bg-fuchsia-900/28 dark:text-fuchsia-300 dark:hover:bg-fuchsia-800/36",
                    framer:
                      "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 dark:bg-indigo-900/28 dark:text-indigo-300 dark:hover:bg-indigo-800/36",
                    default:
                      "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-foreground",
                  };

                  const classes = skillStyles[key] || skillStyles.default;

                  return (
                    <span
                      key={skill}
                      className={`px-4 py-2 text-sm rounded-full border border-transparent ${classes}`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
