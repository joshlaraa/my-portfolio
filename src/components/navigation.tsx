"use client";

import React, { useEffect, useState } from "react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-base lg:text-lg font-medium text-foreground hover:opacity-70 transition-all duration-300"
          ></button>

          <div className="flex-1 flex items-center justify-center">
            <TooltipProvider>
              <Dock direction="middle">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
