import { BlueprintResult } from "@/types/seo";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";
import { HoverCard } from "@/components/animation/hover-card";

export function BlueprintPanel({ data }: { data: BlueprintResult }) {
  return (
    <div>
      <div id="blog-blueprint" className="scroll-mt-24"></div>
      <SectionHeader
        title="Content Blueprint"
        description="Convert strategy into titles, metadata, structure, and CTA placement."
      />

      <HoverCard>
        <Card className="border-slate-800 bg-slate-900/70 text-white">
          <CardContent className="p-5 space-y-5">
            <div>
              <p className="text-sm text-slate-400">Titles</p>
              <StaggerContainer className="mt-3 space-y-2">
                {data.titles.map((title) => (
                  <StaggerItem key={title}>
                    <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-slate-200">
                      {title}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <p className="text-sm text-slate-400">Meta Title</p>
              <p className="mt-1">{data.metaTitle}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Meta Description</p>
              <p className="mt-1">{data.metaDescription}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Featured Snippet</p>
              <p className="mt-1">{data.featuredSnippet}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">H1</p>
              <p className="mt-1">{data.outline.h1}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">H2 Structure</p>
              <StaggerContainer className="mt-3 space-y-2">
                {data.outline.h2.map((item) => (
                  <StaggerItem key={item}>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-300">
                      • {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <p className="text-sm text-slate-400">H3 Structure</p>
              <StaggerContainer className="mt-3 space-y-2">
                {data.outline.h3.map((item) => (
                  <StaggerItem key={item}>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-300">
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