// components/ui/TextReveal.tsx
"use client";
import { motion } from "motion/react";
import { ease } from "@/lib/motion";

const word = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 1, ease } },
};

export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.h1
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
    >
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-[0.15em] -mb-[0.15em]"
        >
          <motion.span variants={word} className="inline-block">
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}