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
                  "Figma",
                  "Tailwind CSS",
                  "Framer",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-background border border-border rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
