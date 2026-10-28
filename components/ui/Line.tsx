"use client";
import { motion } from "motion/react";
import { ease } from "@/lib/motion";

export function Line({className}: {className?: string}) {
  return (
    <motion.div
      className={`line-draw border-b border-gray-400 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease }}
    />
  );
}
