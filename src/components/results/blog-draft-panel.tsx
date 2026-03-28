"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";
import { HoverCard } from "@/components/animation/hover-card";

export function BlogDraftPanel({ data }: { data: any }) {
  return (
    <div>
      <div id="blog-generator" className="scroll-mt-24"></div>
      <SectionHeader
        title="Blog Generator"
        description="Turn the strategy and blueprint into a draft-ready content asset."
      />

      <HoverCard>
        <Card className="border-slate-800 bg-slate-900/70 text-white">
          <CardContent className="p-5 space-y-5">
            <div>
              <p className="text-sm text-slate-400">Intro</p>
              <p className="mt-2 text-slate-200">{data.intro}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Draft Sections</p>
              <StaggerContainer className="mt-3 space-y-4">
                {data.sections.map((section: any) => (
                  <StaggerItem key={section.heading}>
                    <HoverCard>
                      <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                        <p className="font-medium text-white">{section.heading}</p>
                        <p className="mt-2 text-sm text-slate-300">
                          {section.content}
                        </p>
                      </div>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <p className="text-sm text-slate-400">CTA Block</p>
              <p className="mt-2 text-slate-200">{data.ctaBlock}</p>
            </div>

            {data.faq?.length > 0 && (
              <div>
                <p className="text-sm text-slate-400">FAQ Block</p>
                <StaggerContainer className="mt-3 space-y-2">
                  {data.faq.map((item: string) => (
                    <StaggerItem key={item}>
                      <div className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-300">
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </HoverCard>
    </div>
  );
}