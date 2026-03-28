"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
      style={{
        filter: "drop-shadow(0 0 6px rgba(255,255,255,0.04))",
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.section>
  );
}