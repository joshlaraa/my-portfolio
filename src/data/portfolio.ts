export const EMAIL = "joshualara9087@gmail.com";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: { src: string; width: number; height: number };
  url: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Havana Heating and Air",
    description:
      "A lead-generating website for a San Diego HVAC company, with a free estimate form that emails leads instantly, an interactive service area map, and automated daily traffic reports.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "shadcn/ui",
      "MapLibre",
      "Resend",
      "Vercel",
      "GitHub",
      "Git",
    ],
    image: { src: "/havana-heating-air.webp", width: 1600, height: 900 },
    url: "https://www.havanaheatingandair.com/",
  },
  {
    title: "SKALE",
    description:
      "Building the future of engineering at CSUSM through innovation, community, and applied learning.",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "GitHub",
      "Git",
      "Prettier",
    ],
    image: { src: "/skalev2.webp", width: 1600, height: 828 },
    url: "https://skale-csusm.netlify.app/",
  },
  {
    title: "Project Xplain",
    description:
      "A desktop application that uses LLMs and X-ray image data to generate interactive, educational explanations for my senior capstone project.",
    tags: ["Python", "PySide6", "AWS", "LaTeX", "CSS", "HTML", "GitHub", "Git"],
    image: { src: "/project-xplain.webp", width: 1600, height: 1000 },
    url: "https://github.com/creativeelectron",
  },
  {
    title: "JL Auto Detail",
    description:
      "A responsive business website built to showcase services and generate customer leads for my father's auto detailing company.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "shadcn/ui",
      "GitHub",
      "Git",
    ],
    image: { src: "/jlautodetail.webp", width: 1600, height: 889 },
    url: "https://www.jlautodetail.com/",
  },
  {
    title: "Google Developer Student Club",
    description:
      "We are dedicated to enhancing systems through collaborative projects. Our mission is to advance CSUSM and the surrounding community using software.",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "React Query",
    ],
    image: { src: "/gdsc.webp", width: 1600, height: 906 },
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
      "Tailwind CSS",
      "React Router",
      "React Query",
      "AWS",
      "Go",
      "Supabase",
    ],
    image: { src: "/melo.webp", width: 1600, height: 881 },
    url: "https://github.com/melosong-music/frontend",
  },
];

export interface TimelineEntry {
  title: string;
  org: string;
  period: string;
  location?: string;
}

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: "Software Engineer I",
    org: "Honeywell Aerospace",
    location: "Phoenix, AZ",
    period: "July 2026 — Present",
  },
  {
    title: "Software Engineer Intern",
    org: "Honeywell Aerospace",
    location: "Clearwater, FL",
    period: "June 2025 — August 2025",
  },
  {
    title: "Software Engineer Intern",
    org: "Millennium Health",
    location: "San Diego, CA",
    period: "June 2024 — August 2024",
  },
];

export const LEADERSHIP: TimelineEntry[] = [
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
];

export const SKILLS = [
  "UI/UX Design",
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "React Router",
  "React Query",
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
];

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export const SOCIALS: SocialLink[] = [
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
    handle: "2026 Version",
    url: "/JoshLaraResume.pdf",
  },
];
