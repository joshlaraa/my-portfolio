import { cn } from "@/lib/utils";

const HOLD_SHAPES = {
  jug: "M6 22c0-9 7-16 16-15 8 1 13 7 12 14-1 6-6 9-12 9-4 0-6 3-10 2-4-1-6-5-6-10z",
  crimp: "M4 20c0-3 3-5 8-5h16c5 0 8 2 8 5s-3 5-8 5H12c-5 0-8-2-8-5z",
  sloper: "M5 26c0-10 7-18 16-18s15 8 15 18c0 3-3 5-6 5H11c-3 0-6-2-6-5z",
  pinch:
    "M12 6c5-2 9 2 10 8 1 5 6 7 8 12 2 6-3 10-9 9-7-1-12-6-13-13-1-7 0-14 4-16z",
} as const;

const BROWN = "fill-[#6b4f3a] dark:fill-[#a07c5b]";

interface Hold {
  x: number;
  y: number;
  shape: keyof typeof HOLD_SHAPES;
  rotate: number;
  className: string;
}

interface RouteConfig {
  viewBox: string;
  path: string;
  holds: Hold[];
  flag: { x: number; y: number };
}

const WALL: RouteConfig = {
  viewBox: "0 0 160 640",
  path: "M40 630 C40 600 40 590 40 580 S108 500 108 480 S46 405 46 385 S112 310 112 290 S58 215 58 195 S104 125 104 105 S80 60 80 46",
  holds: [
    { x: 40, y: 580, shape: "jug", rotate: -10, className: "fill-blue-500" },
    { x: 108, y: 480, shape: "crimp", rotate: 18, className: "fill-[#FFC425]" },
    { x: 46, y: 385, shape: "sloper", rotate: -6, className: "fill-rose-400" },
    {
      x: 112,
      y: 290,
      shape: "pinch",
      rotate: 24,
      className: "fill-emerald-400",
    },
    { x: 58, y: 195, shape: "jug", rotate: 140, className: "fill-violet-400" },
    { x: 104, y: 105, shape: "crimp", rotate: -14, className: BROWN },
  ],
  flag: { x: 80, y: 46 },
};

function Route({
  route,
  className,
}: {
  route: RouteConfig;
  className?: string;
}) {
  return (
    <svg
      viewBox={route.viewBox}
      fill="none"
      className={cn("overflow-visible", className)}
    >
      <path
        d={route.path}
        className="animate-route stroke-muted-foreground/40"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      {route.holds.map((hold, i) => (
        <g
          key={`${hold.x}-${hold.y}`}
          transform={`translate(${hold.x} ${hold.y}) rotate(${hold.rotate}) scale(1.3) translate(-20 -20)`}
        >
          <g
            className="animate-float"
            style={{ animationDelay: `${i * -1.1}s` }}
          >
            <path d={HOLD_SHAPES[hold.shape]} className={hold.className} />
            <circle cx="20" cy="20" r="2.25" className="fill-background/70" />
          </g>
        </g>
      ))}
      <g transform={`translate(${route.flag.x} ${route.flag.y})`}>
        <path
          d="M0 0V-30"
          className="stroke-muted-foreground/60"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M0 -30L16 -24L0 -18Z" className="fill-blue-500" />
      </g>
    </svg>
  );
}

/** Decorative bouldering routes framing the hero on large screens. */
export function ClimbingWall() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden opacity-60 lg:block dark:opacity-50"
    >
      <Route
        route={WALL}
        className="absolute top-[18%] left-4 h-[66%] w-auto xl:left-12"
      />
      <Route
        route={WALL}
        className="absolute top-[14%] right-4 h-[66%] w-auto -scale-x-100 xl:right-12"
      />
    </div>
  );
}
