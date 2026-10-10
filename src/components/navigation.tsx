import {
  domAnimation,
  LazyMotion,
  m,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { Briefcase, House, Phone, User } from "lucide-react";

import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "hero", icon: House, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "work", icon: Briefcase, label: "Work" },
  { id: "contact", icon: Phone, label: "Contact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const itemClass =
  "relative flex size-full items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:text-foreground";

export function Navigation() {
  const activeSection = useActiveSection(SECTION_IDS);

  const { scrollYProgress } = useScroll();
  const glowBlur = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const glowSpread = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const glowAlpha = useTransform(scrollYProgress, [0, 1], [0, 0.3]);
  const glowBorder = useTransform(scrollYProgress, [0, 1], [0, 0.45]);
  const boxShadow = useMotionTemplate`0 0 ${glowBlur}px ${glowSpread}px rgba(59, 130, 246, ${glowAlpha})`;
  const borderColor = useMotionTemplate`rgba(59, 130, 246, ${glowBorder})`;

  return (
    <LazyMotion features={domAnimation} strict>
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[max(1rem,env(safe-area-inset-top))]"
      >
        <div className="relative">
          <TooltipProvider>
            <Dock
              direction="middle"
              className="mt-0 gap-2 px-3 sm:min-w-[500px] sm:gap-10 sm:px-6"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <DockIcon key={item.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={`#${item.id}`}
                          aria-label={item.label}
                          aria-current={isActive ? "location" : undefined}
                          className={cn(
                            itemClass,
                            isActive && "text-foreground",
                          )}
                        >
                          <item.icon aria-hidden="true" className="h-4 w-4" />
                          <span
                            aria-hidden="true"
                            className={cn(
                              "absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500 transition-[opacity,scale] duration-300",
                              isActive
                                ? "scale-100 opacity-100"
                                : "scale-0 opacity-0",
                            )}
                          />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>{item.label}</TooltipContent>
                    </Tooltip>
                  </DockIcon>
                );
              })}

              <Separator orientation="vertical" className="h-full" />

              <DockIcon>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <AnimatedThemeToggler className={itemClass} />
                  </TooltipTrigger>
                  <TooltipContent>Toggle theme</TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </TooltipProvider>

          <m.div
            aria-hidden="true"
            style={{ boxShadow, borderColor }}
            className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent"
          />
        </div>
      </nav>
    </LazyMotion>
  );
}
