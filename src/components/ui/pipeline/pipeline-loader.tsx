"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { pipelineSteps } from "@/data/pipeline-steps";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PipelineLoader() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= pipelineSteps.length - 1) return prev;
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="mt-6 border-slate-800 bg-slate-900/70 text-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Processing Pipeline
        </CardTitle>
        <p className="text-sm text-slate-400">
          Building your SEO strategy step-by-step
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        {pipelineSteps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{
              opacity: index <= activeStep ? 1 : 0.4,
              x: 0,
              scale: index === activeStep ? 1.03 : 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className={`rounded-xl border px-4 py-3 text-sm flex items-center gap-3
              ${
                index <= activeStep
                  ? "bg-indigo-500/20 border-indigo-500 text-white"
                  : "bg-slate-950 border-slate-800 text-slate-400"
              }
            `}
            style={{
              filter:
                index === activeStep
                  ? "drop-shadow(0 0 8px rgba(99,102,241,0.4))"
                  : "none",
            }}
          >
            {/* animated dot */}
            <motion.div
              animate={
                index === activeStep
                  ? { scale: [1, 1.4, 1] }
                  : { scale: 1 }
              }
              transition={{
                repeat: index === activeStep ? Infinity : 0,
                duration: 0.8,
              }}
              className={`h-2 w-2 rounded-full ${
                index <= activeStep ? "bg-indigo-400" : "bg-slate-600"
              }`}
            />

            <span>{step}...</span>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}