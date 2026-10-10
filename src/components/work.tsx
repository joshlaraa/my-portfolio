import { ArrowUpRight } from "lucide-react";

import { TechBadgeList } from "@/components/tech-badge";
import { PROJECTS, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section id="work" className="px-6 py-24 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 sm:mb-20">
          <h2 className="mb-4 text-sm font-normal text-muted-foreground">
            Selected work
          </h2>
          <div className="h-px bg-border" />
        </div>

        <div className="space-y-24 sm:space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className={cn("space-y-6", reversed && "lg:order-2")}>
        <h3 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
          {project.title}
        </h3>
        <p className="text-lg leading-relaxed text-pretty text-muted-foreground lg:text-xl">
          {project.description}
        </p>
        <TechBadgeList items={project.tags} />
        <div className="pt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <span className="text-sm font-medium">View project</span>
            <span className="sr-only">
              : {project.title} (opens in new tab)
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
            />
          </a>
        </div>
      </div>

      <div className={cn(reversed && "lg:order-1")}>
        <div className="overflow-hidden rounded-2xl bg-white/95 shadow-sm transition duration-300 ease-out hover:scale-[1.02] hover:shadow-md dark:bg-slate-800 dark:shadow-none">
          <img
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            decoding="async"
            className="block h-[220px] w-full object-cover md:h-[300px] lg:h-[340px]"
          />
        </div>
      </div>
    </article>
  );
}
