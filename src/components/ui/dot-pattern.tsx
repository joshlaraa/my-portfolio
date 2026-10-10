import { useId } from "react";

import { cn } from "@/lib/utils";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  /** Horizontal spacing between dots. */
  width?: number;
  /** Vertical spacing between dots. */
  height?: number;
  /** X-offset of the entire pattern. */
  x?: number;
  /** Y-offset of the entire pattern. */
  y?: number;
  /** X-offset of each dot within its tile. */
  cx?: number;
  /** Y-offset of each dot within its tile. */
  cy?: number;
  /** Radius of each dot. */
  cr?: number;
}

/**
 * Tiled dot background rendered as a single SVG pattern, so cost stays
 * constant regardless of how large the covered area is. Dot color follows
 * the `text-*` color of the element.
 */
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          x={x}
          y={y}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={cx} cy={cy} r={cr} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
