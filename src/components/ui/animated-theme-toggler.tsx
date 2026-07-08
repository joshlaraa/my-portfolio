import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 700,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const applyTheme = () => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setIsDark(dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
      });
    };

    if (typeof (document as any).startViewTransition !== "function") {
      applyTheme();
      return;
    }

    await (document as any).startViewTransition(applyTheme).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
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
      }
    );
  }, [duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className, isDark && "text-foreground")}
      {...props}
    >
      {isDark ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
