"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/data";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-11 right-11 z-[5000] flex flex-row space-x-4 rounded-3xl border border-white/[0.2] bg-black-100 px-3 py-5 shadow-[0_2px_3px_-1px_rgba(0,0,0,0.1),0_1px_0_rgba(25,28,33,0.02),0_0_0_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) =>
          navItem.name === "My Resume" ? (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
              )}
            >
              <span className="!cursor-pointer text-sm">{navItem.name}</span>
            </a>
          ) : (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
              )}
            >
              <span className="!cursor-pointer text-sm">{navItem.name}</span>
            </Link>
          )
        )}
      </motion.nav>
    </AnimatePresence>
  );
};
