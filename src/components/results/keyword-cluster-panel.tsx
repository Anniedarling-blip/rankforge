import { KeywordClusterGroup } from "@/types/seo";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";
import { HoverCard } from "@/components/animation/hover-card";

export function KeywordClusterPanel({
  groups,
}: {
  groups: KeywordClusterGroup[];
}) {
  return (
    <div>
      <div id="keyword-clusters" className="scroll-mt-24"></div>
      <SectionHeader
        title="Keyword Clusters"
        description="Expand the target keyword into structured topic and intent groups."
      />

      <StaggerContainer className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <StaggerItem key={group.label}>
            <HoverCard>
              <Card className="border-slate-800 bg-slate-900/70 text-white">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{group.label}</h3>
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300">
                      {group.priority}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400">{group.usageTip}</p>

                  <StaggerContainer className="flex flex-wrap gap-2">
                    {group.keywords.map((keyword) => (
                      <StaggerItem key={keyword}>
                        <div className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-200">
                          {keyword}
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}