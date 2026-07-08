"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { Separator } from "@/components/ui/separator";
import { HomeIcon, Briefcase, User, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#work", icon: Briefcase, label: "Work" },
    { href: "#about", icon: User, label: "About" },
    { href: "#contact", icon: Phone, label: "Contact" },
  ],
};

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const glowBlur = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const glowSpread = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const glowAlpha = useTransform(scrollYProgress, [0, 1], [0, 0.3]);
  const glowBorder = useTransform(scrollYProgress, [0, 1], [0, 0.45]);
  const boxShadow = useMotionTemplate`0 0 ${glowBlur}px ${glowSpread}px rgba(59, 130, 246, ${glowAlpha})`;
  const borderColor = useMotionTemplate`rgba(59, 130, 246, ${glowBorder})`;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "work", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[max(1rem,env(safe-area-inset-top))]">
      <div className="relative">
        <TooltipProvider>
          <Dock
            direction="middle"
            className="mt-0 min-w-0 gap-2 px-3 sm:min-w-[500px] sm:gap-10 sm:px-6"
          >
          {DATA.navbar.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      aria-label={item.label}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(id);
                        scrollToSection(id);
                      }}
                      className={cn(
                        "flex items-center justify-center w-full h-full rounded-full relative",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      {isActive && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
                      )}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
          <Separator orientation="vertical" className="h-full" />

          <DockIcon key="theme-toggler">
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "flex items-center justify-center w-full h-full rounded-full relative text-muted-foreground hover:text-foreground"
                  )}
                >
                  <AnimatedThemeToggler
                    className="flex items-center justify-center w-full h-full"
                    aria-label="Toggle theme"
                  />
                </div>
              </TooltipTrigger>
            </Tooltip>
          </DockIcon>
          </Dock>
        </TooltipProvider>

        <motion.div
          aria-hidden
          style={{ boxShadow, borderColor }}
          className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent"
        />
      </div>
    </nav>
  );
}
