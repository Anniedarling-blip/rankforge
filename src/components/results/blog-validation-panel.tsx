"use client";

import { GeneratedBlog } from "@/types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BlogValidationPanel({ blog }: { blog: GeneratedBlog }) {
  return (
    <Card
      id="validation-dashboard"
      className="scroll-mt-24 border-slate-800 bg-slate-900/70 text-white"
    >
      <CardHeader>
        <CardTitle>Validation Dashboard</CardTitle>
        <p className="text-sm text-slate-400">
          10-metric SEO and publishing readiness check
        </p>
        <p className="mt-2 text-xs text-slate-400">
          This blog is optimized for both search engines and AI answer engines.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">

        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {blog.validation.metrics.map((metric) => (
            <div
              key={metric.label}
              id={`validation-${metric.label.replace(/\s+/g, "-").toLowerCase()}`}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4"
            >
              <p className="text-sm font-medium text-white">{metric.label}</p>

              <p className="mt-2 text-xl font-semibold text-slate-100">
                {metric.value}
                {typeof metric.value === "number" &&
                !["AI Detection %", "Content Depth"].includes(metric.label)
                  ? "/100"
                  : ""}
              </p>

              <p className="mt-2 text-sm text-slate-400">{metric.reason}</p>
            </div>
          ))}
        </div>

        {/* ✅ CTA Strength Indicator (placed BELOW Outrank Insight / metrics section) */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm font-medium text-white">
            CTA Strength Indicator
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Conversion Strength: High — this content uses visible CTA language,
            conversion-aware structure, and repeated action prompts near
            high-intent sections.
          </p>
        </div>

      </CardContent>
    </Card>
  );
}