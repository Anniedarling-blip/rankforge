"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";
import { HoverCard } from "@/components/animation/hover-card";

export function PlatformAdaptationPanel({ data }: { data: any }) {
  return (
    <div>
      <div id="platform-adaptation" className="scroll-mt-24"></div>
      <SectionHeader
        title="Platform Adaptation"
        description="Adjust the output so it fits the publishing style of the selected platform."
      />

      <HoverCard>
        <Card className="border-slate-800 bg-slate-900/70 text-white">
          <CardContent className="p-5 space-y-4">
            <div>
              <p className="text-sm text-slate-400">Platform</p>
              <p className="mt-1">{data.platform}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Formatting Style</p>
              <p className="mt-1">{data.formattingStyle}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">CTA Style</p>
              <p className="mt-1">{data.ctaStyle}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Content Adjustments</p>
              <StaggerContainer className="mt-2 space-y-2 text-slate-300">
                {data.contentAdjustments.map((item: string) => (
                  <StaggerItem key={item}>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2">
                      • {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </CardContent>
        </Card>
      </HoverCard>
    </div>
  );
}