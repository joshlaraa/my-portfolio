import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "SKALE",
    description:
      "Building the future of engineering at CSUSM through innovation, community, and applied learning.",
    tags: ["Shadcn", "React", "Next.js"],
    image: "/skale.png",
  },
  {
    title: "Google Development Studio Club",
    description:
      "We are dedicated to enhancing systems through collaborative projects. Our mission is to advance CSUSM and the surrounding community using Software.",
    tags: ["Design", "Development", "Branding"],
    image: "/gdsc.png",
  },
  {
    title: "Project #3",
    description: "Project #3 description.",
    tags: ["Tag #1", "Tag #2", "Tag #3"],
    image: "",
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
  const [headerRef, headerInView] = useInView();

  return (
    <section id="work" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`mb-20 transition-all duration-1000 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
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
  const [ref, isInView] = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : `opacity-0 ${
                    index % 2 === 1 ? "translate-x-8" : "-translate-x-8"
                  }`
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {project.title}
          </h2>
          <p
            className={`text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : `opacity-0 ${
                    index % 2 === 1 ? "translate-x-8" : "-translate-x-8"
                  }`
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {project.description}
          </p>
          <div
            className={`flex flex-wrap gap-3 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : `opacity-0 ${
                    index % 2 === 1 ? "translate-x-8" : "-translate-x-8"
                  }`
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm bg-secondary rounded-full text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className={`pt-4 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : `opacity-0 ${
                    index % 2 === 1 ? "translate-x-8" : "-translate-x-8"
                  }`
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <button className="inline-flex items-center gap-2 text-accent transition-all group-hover:gap-4 duration-300">
              <span className="text-sm font-medium">View project</span>
              <ArrowUpRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isHovered ? "rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`${
            index % 2 === 1 ? "lg:order-1" : ""
          } transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-2xl">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            <div
              className={`absolute inset-0 bg-accent/5 transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
