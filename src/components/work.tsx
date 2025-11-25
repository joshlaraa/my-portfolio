import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "SKALE",
    description:
      "Building the future of engineering at CSUSM through innovation, community, and applied learning.",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "Shadcn",
      "GitHub",
      "Git",
      "Prettier",
    ],
    image: "/skalev2.png",
    url: "https://skale-csusm.netlify.app/",
  },
  {
    title: "Google Development Student Club",
    description:
      "We are dedicated to enhancing systems through collaborative projects. Our mission is to advance CSUSM and the surrounding community using Software.",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "Shadcn",
      "React-Router-Dom",
      "React-Query",
    ],
    image: "/gdsc.png",
    url: "https://github.com/csusmGDSC",
  },
  {
    title: "Melo Music Streaming",
    description:
      "A music streaming application for discovering and enjoying music.",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "React-Router-Dom",
      "React-Query",
      "AWS",
      "Go",
      "Supabase",
    ],
    image: "/melo.png",
    url: "https://github.com/melosong-music/frontend",
  },
];

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

export function Work() {
  const [headerRef] = useInView();

  return (
    <section id="work" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <p className="text-sm text-muted-foreground mb-4">Selected work</p>
          <div className="h-px bg-border" />
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [ref] = useInView();

  return (
    <div ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            {project.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => {
              const key = tag.toLowerCase().replace(/[^a-z0-9]/g, "");
              const tagStyles: Record<string, string> = {
                react:
                  "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40",
                typescript:
                  "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/28 dark:text-sky-300 dark:hover:bg-sky-800/36",
                vite: "bg-violet-50 text-violet-700 hover:bg-violet-100 hover:text-violet-800 dark:bg-violet-900/28 dark:text-violet-300 dark:hover:bg-violet-800/36",
                tailwindcss:
                  "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:text-cyan-800 dark:bg-cyan-900/28 dark:text-cyan-300 dark:hover:bg-cyan-800/36",
                tailwind:
                  "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:text-cyan-800 dark:bg-cyan-900/28 dark:text-cyan-300 dark:hover:bg-cyan-800/36",
                shadcn:
                  "bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800 dark:bg-purple-900/28 dark:text-purple-300 dark:hover:bg-purple-800/36",
                design:
                  "bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800 dark:bg-rose-900/28 dark:text-rose-300 dark:hover:bg-rose-800/36",
                development:
                  "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-amber-900/28 dark:text-amber-300 dark:hover:bg-amber-800/36",
                branding:
                  "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 dark:bg-emerald-900/28 dark:text-emerald-300 dark:hover:bg-emerald-800/36",
                nextjs:
                  "bg-neutral-50 text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900 dark:bg-neutral-800/30 dark:text-neutral-200 dark:hover:bg-neutral-700/36",
                github:
                  "bg-neutral-50 text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900 dark:bg-neutral-800/30 dark:text-neutral-200 dark:hover:bg-neutral-700/36",
                git: "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-amber-900/28 dark:text-amber-300 dark:hover:bg-amber-800/36",
                aws: "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-amber-900/28 dark:text-amber-300 dark:hover:bg-amber-800/36",
                prettier:
                  "bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 dark:bg-fuchsia-900/28 dark:text-fuchsia-300 dark:hover:bg-fuchsia-800/36",
                reactrouterdom:
                  "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 dark:bg-indigo-900/28 dark:text-indigo-300 dark:hover:bg-indigo-800/36",
                reactquery:
                  "bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800 dark:bg-teal-900/28 dark:text-teal-300 dark:hover:bg-teal-800/36",
                prisma:
                  "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:text-cyan-800 dark:bg-cyan-900/28 dark:text-cyan-300 dark:hover:bg-cyan-800/36",
                postgres:
                  "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/28 dark:text-sky-300 dark:hover:bg-sky-800/36",
                sqlite:
                  "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-amber-900/28 dark:text-amber-300 dark:hover:bg-amber-800/36",
                node: "bg-lime-50 text-lime-700 hover:bg-lime-100 hover:text-lime-800 dark:bg-lime-900/28 dark:text-lime-300 dark:hover:bg-lime-800/36",
                npm: "bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800 dark:bg-red-900/28 dark:text-red-300 dark:hover:bg-red-800/36",
                docker:
                  "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/28 dark:text-sky-300 dark:hover:bg-sky-800/36",
                eslint:
                  "bg-lime-50 text-lime-700 hover:bg-lime-100 hover:text-lime-800 dark:bg-lime-900/28 dark:text-lime-300 dark:hover:bg-lime-800/36",
                mongodb:
                  "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 dark:bg-emerald-900/28 dark:text-emerald-300 dark:hover:bg-emerald-800/36",
                supabase:
                  "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 dark:bg-emerald-900/28 dark:text-emerald-300 dark:hover:bg-emerald-800/36",
                javascript:
                  "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-amber-900/28 dark:text-amber-300 dark:hover:bg-amber-800/36",
                html: "bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800 dark:bg-rose-900/28 dark:text-rose-300 dark:hover:bg-rose-800/36",
                css: "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/28 dark:text-sky-300 dark:hover:bg-sky-800/36",
                default:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-foreground",
              };

              const classes = tagStyles[key] || tagStyles.default;

              return (
                <span
                  key={tag}
                  className={`px-4 py-2 text-sm rounded-full border border-transparent ${classes}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div className="pt-4">
            <a
              href={project.url || "#"}
              target={project.url && project.url !== "#" ? "_blank" : undefined}
              rel={
                project.url && project.url !== "#"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground group"
            >
              <span className="text-sm font-medium">View project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
        </div>

        <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
          <div className="relative rounded-2xl overflow-hidden bg-white/95 dark:bg-slate-800 shadow-sm dark:shadow-none transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-md">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-[220px] md:h-[300px] lg:h-[340px] object-cover block transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-accent/5 dark:bg-accent/5 opacity-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
