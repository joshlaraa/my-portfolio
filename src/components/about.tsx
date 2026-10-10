import { TechBadgeList } from "@/components/tech-badge";
import {
  EXPERIENCE,
  LEADERSHIP,
  SKILLS,
  type TimelineEntry,
} from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 sm:mb-20">
          <p className="mb-4 text-sm text-muted-foreground">Information</p>
          <div className="h-px bg-border" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Dedicated to Creativity, Culture & Growth 🚀
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-pretty text-muted-foreground">
              <p>
                I'm Josh, a curious engineer based in Phoenix, AZ, where I work
                as a Software Engineer I at Honeywell Aerospace. At California
                State University San Marcos, I helped raise over $160k for
                student innovation and led technical clubs and cultural
                organizations like the Society of Hispanic Professional
                Engineers and the Society of Asian Scientists and Engineers.
              </p>
              <p>
                Before joining Honeywell full time, I shipped real products end
                to end across internships at Honeywell Aerospace and Millennium
                Health, from cutting software setup time to minutes to building
                applications with full ownership.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <Timeline heading="Experience" entries={EXPERIENCE} />
            <Timeline heading="Leadership" entries={LEADERSHIP} />

            <div>
              <h3 className="mb-4 text-sm text-muted-foreground">Skills</h3>
              <TechBadgeList items={SKILLS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline({
  heading,
  entries,
}: {
  heading: string;
  entries: TimelineEntry[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm text-muted-foreground">{heading}</h3>
      <ul className="space-y-4">
        {entries.map((entry) => (
          <li
            key={`${entry.org}-${entry.period}`}
            className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
          >
            <div className="min-w-0">
              <h4 className="font-medium">{entry.title}</h4>
              <p className="text-sm text-muted-foreground">
                {entry.org}
                {entry.location && ` · ${entry.location}`}
              </p>
            </div>
            <span className="text-sm whitespace-nowrap text-muted-foreground tabular-nums">
              {entry.period}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
