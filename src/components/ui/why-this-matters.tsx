"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export function WhyThisMatters({
  text,
}: {
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="will-change-transform"
    >
      <div className="mt-4 relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent" />

        <div className="mb-2 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-indigo-300" />
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
            Why this matters
          </span>
        </div>

        <p className="text-sm leading-relaxed text-indigo-100">{text}</p>
      </div>
    </motion.div>
  );
}