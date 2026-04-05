"use client";

import { SerpGapResult } from "@/types/seo";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";
import { HoverCard } from "@/components/animation/hover-card";

function ListBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <HoverCard>
      <Card className="border-slate-800 bg-slate-900/70 text-white">
        <CardContent className="p-5">
          <p className="text-sm text-slate-400">{title}</p>

          <StaggerContainer className="mt-3 space-y-2">
            {items.map((item) => (
              <StaggerItem key={item}>
                <div className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-300">
                  • {item}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </CardContent>
      </Card>
    </HoverCard>
  );
}

export function SerpGapPanel({ data }: { data: SerpGapResult }) {
  return (
    <div id="serp-gap" className="scroll-mt-24">
      <SectionHeader
        title="SERP Gap Analysis"
        description="Understand common patterns, weak points, and high-leverage opportunities."
      />

      {/* Grid */}
      <StaggerContainer className="grid gap-4 md:grid-cols-2">
        <StaggerItem>
          <ListBlock title="Common Patterns" items={data.commonPatterns} />
        </StaggerItem>

        <StaggerItem>
          <ListBlock title="Content Gaps" items={data.contentGaps} />
        </StaggerItem>

        <StaggerItem>
          <ListBlock title="Missed Angles" items={data.missedAngles} />
        </StaggerItem>

        <StaggerItem>
          <ListBlock title="Outrank Strategy" items={data.outrankStrategy} />
        </StaggerItem>
      </StaggerContainer>

      {/* Insight Section */}
      <div className="mt-4">
        <HoverCard>
          <Card className="border-slate-800 bg-slate-900/70 text-white">
            <CardContent className="space-y-4 p-5">

              {/* Why This Matters */}
              <div>
                <p className="text-sm text-slate-400">Why This Matters</p>
                <p className="mt-2 text-slate-200">{data.whyThisMatters}</p>
              </div>

              {/* Outrank Insight */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-medium text-white">
                  Outrank Insight
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  This strategy targets weak competitor structures, missing
                  subtopics, and shallow intent coverage to outperform existing
                  SERP results.
                </p>
              </div>

              {/* ✅ CTA Strength Indicator (INSERTED BELOW OUTRANK INSIGHT) */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-medium text-white">
                  CTA Strength Indicator
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Conversion Strength: High — this content uses visible CTA
                  language, conversion-aware structure, and repeated action
                  prompts near high-intent sections.
                </p>
              </div>

            </CardContent>
          </Card>
        </HoverCard>
      </div>
    </div>
  );
}