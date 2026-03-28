import { PerformanceResult } from "@/types/seo";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { WhyThisMatters } from "@/components/ui/why-this-matters";
import { Lightbulb } from "lucide-react";

export function PerformancePanel({ data }: { data: PerformanceResult }) {
  const items = [
    { label: "Ranking Potential", value: data.rankingPotential },
    { label: "Traffic Potential", value: data.trafficPotential },
    { label: "Conversion Potential", value: data.conversionPotential },
    { label: "Snippet Probability", value: data.snippetProbability },
  ];

  return (
    <div>
      <div id="projected-performance" className="scroll-mt-24"></div>
      <SectionHeader
        title="Projected Performance"
        description="Forecast likely outcomes so the strategy feels actionable, not theoretical."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <Card
            key={item.label}
            className="border-slate-800 bg-slate-900/70 text-white"
          >
            <CardContent className="p-5">
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-4 border-slate-800 bg-slate-900/70 text-white">
        <CardContent className="p-5">
          <WhyThisMatters text={data.whyThisMatters} />
        </CardContent>
      </Card>
    </div>
  );
}