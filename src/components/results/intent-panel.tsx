import { SeoAnalysisResult } from "@/types/seo";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { WhyThisMatters } from "@/components/ui/why-this-matters";

export function IntentPanel({ data }: { data: SeoAnalysisResult["intent"] }) {
  return (
    <div id="intent-engine" className="scroll-mt-24">
      <SectionHeader
        title="Intent Engine"
        description="Understand what the keyword signals and why that changes the strategy."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border-slate-800 bg-slate-900/70 text-white">
          <CardContent className="p-5">
            <p className="text-sm text-slate-400">Search Intent</p>
            <p className="mt-2 text-lg font-semibold">{data.searchIntent}</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/70 text-white">
          <CardContent className="p-5">
            <p className="text-sm text-slate-400">Funnel Stage</p>
            <p className="mt-2 text-lg font-semibold">{data.funnelStage}</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/70 text-white">
          <CardContent className="p-5">
            <p className="text-sm text-slate-400">Intent Confidence</p>
            <p className="mt-2 text-lg font-semibold">
              {data.intentConfidenceScore}/100
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/70 text-white md:col-span-2 xl:col-span-3">
          <CardContent className="grid gap-4 p-5 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-400">Pain Point</p>
              <p className="mt-2 text-slate-200">{data.painPoint}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Content Angle</p>
              <p className="mt-2 text-slate-200">{data.contentAngle}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Buyer Signal</p>
              <p className="mt-2 text-slate-200">{data.buyerSignal}</p>
            </div>

            <div>
              <WhyThisMatters text={data.whyThisMatters} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}