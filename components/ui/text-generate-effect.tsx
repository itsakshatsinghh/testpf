"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  // Split words, respecting line breaks
  const wordsArray = words.split(/(\s+|\n)/); // keep spaces and detect \n

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((part, idx) => {
          if (part === "\n") {
            return <br key={"br" + idx} />;
          }

          return (
            <motion.span
              key={part + idx}
              className={cn(
                "text-white opacity-0",
                idx > 3 && part.trim() !== "" && "text-purple"
              )}
            >
              {part}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
