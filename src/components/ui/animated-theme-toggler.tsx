import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps extends React.ComponentProps<"button"> {
  duration?: number;
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

/** Suppresses per-element color transitions so the theme swaps in one frame. */
const SWITCHING_CLASS = "theme-switching";

export const AnimatedThemeToggler = ({
  className,
  duration = 700,
  onClick,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggleTheme = async (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    const { top, left, width, height } =
      event.currentTarget.getBoundingClientRect();

    const root = document.documentElement;
    const applyTheme = () => {
      root.classList.add(SWITCHING_CLASS);
      flushSync(() => {
        const dark = root.classList.toggle("dark");
        setIsDark(dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
      });
    };
    const endSwitch = () => root.classList.remove(SWITCHING_CLASS);

    const doc = document as DocumentWithViewTransition;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (typeof doc.startViewTransition !== "function" || reduceMotion) {
      applyTheme();
      getComputedStyle(root).getPropertyValue("color");
      endSwitch();
      return;
    }

    const transition = doc.startViewTransition(applyTheme);
    transition.finished.finally(endSwitch);
    await transition.ready;

    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      {...props}
      onClick={toggleTheme}
      className={cn(className, isDark && "text-foreground")}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
};
