import { StrategyResult } from "@/types/seo";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";
import { HoverCard } from "@/components/animation/hover-card";

export function StrategyPanel({ data }: { data: StrategyResult }) {
  return (
    <div>
      <div id="strategy-planner" className="scroll-mt-24"></div>
      <SectionHeader
        title="Strategy Layer"
        description="Turn intent and SERP insight into a conversion-aware content plan."
      />

      <HoverCard>
        <Card className="border-slate-800 bg-slate-900/70 text-white">
          <CardContent className="p-5 space-y-5">
            <div>
              <p className="text-sm text-slate-400">Article Type</p>
              <p className="mt-1">{data.articleType}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Positioning</p>
              <p className="mt-1">{data.positioning}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Tone Strategy</p>
              <p className="mt-1">{data.toneStrategy}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">CTA Strategy</p>
              <p className="mt-1">{data.ctaStrategy}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Trust Builders</p>
              <StaggerContainer className="mt-3 grid gap-3 md:grid-cols-2">
                {data.trustBuilders.map((item) => (
                  <StaggerItem key={item}>
                    <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-slate-300">
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <p className="text-sm text-slate-400">Outrank Plan</p>
              <StaggerContainer className="mt-3 space-y-2">
                {data.outrankPlan.map((item) => (
                  <StaggerItem key={item}>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-300">
                      • {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <p className="text-sm text-slate-400">Why This Matters</p>
              <p className="mt-2 text-slate-200">{data.whyThisMatters}</p>
            </div>
          </CardContent>
        </Card>
      </HoverCard>
    </div>
  );
}