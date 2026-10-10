import { cn } from "@/lib/utils";

const PALETTE = {
  blue: "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40",
  sky: "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 dark:hover:bg-sky-800/40",
  cyan: "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-800/40",
  teal: "bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 dark:hover:bg-teal-800/40",
  green:
    "bg-green-50 text-green-800 hover:bg-green-100 hover:text-green-900 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/40",
  emerald:
    "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-800/40",
  violet:
    "bg-violet-50 text-violet-700 hover:bg-violet-100 hover:text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 dark:hover:bg-violet-800/40",
  purple:
    "bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-800/40",
  indigo:
    "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/40",
  fuchsia:
    "bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 dark:hover:bg-fuchsia-800/40",
  rose: "bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-800/40",
  red: "bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-800/40",
  amber:
    "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-800/40",
  neutral:
    "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800/40 dark:text-neutral-200 dark:hover:bg-neutral-700/40",
} as const;

const TECH_COLORS: Record<string, keyof typeof PALETTE> = {
  uiuxdesign: "rose",
  react: "blue",
  typescript: "sky",
  nextjs: "green",
  vite: "violet",
  tailwindcss: "cyan",
  shadcnui: "purple",
  reactrouter: "indigo",
  reactquery: "teal",
  python: "sky",
  pyside6: "green",
  go: "cyan",
  supabase: "emerald",
  aws: "amber",
  latex: "red",
  css: "sky",
  html: "rose",
  figma: "fuchsia",
  framer: "indigo",
  prettier: "fuchsia",
  github: "neutral",
  git: "amber",
  maplibre: "teal",
  resend: "violet",
  vercel: "neutral",
};

function normalize(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function TechBadgeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 sm:gap-3">
      {items.map((item) => (
        <li key={item}>
          <TechBadge name={item} />
        </li>
      ))}
    </ul>
  );
}

export function TechBadge({ name }: { name: string }) {
  const color = TECH_COLORS[normalize(name)] ?? "neutral";

  return (
    <span
      translate="no"
      className={cn(
        "inline-flex rounded-full px-4 py-2 text-sm transition-colors duration-200",
        PALETTE[color],
      )}
    >
      {name}
    </span>
  );
}
