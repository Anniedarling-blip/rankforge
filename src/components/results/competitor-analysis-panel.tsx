"use client";

import { SeoAnalysisResult } from "@/types/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CompetitorAnalysisPanel({
  data,
}: {
  data: SeoAnalysisResult["competitorScoring"];
}) {
  return (
    <Card
      id="competitor-analysis"
      className="scroll-mt-24 border-slate-800 bg-slate-900/70 text-white"
    >
      <CardHeader>
        <CardTitle>Competitor Snapshot</CardTitle>
        <p className="text-sm text-slate-400">
          Simulated competitor strength and outrank opportunities
        </p>
      </CardHeader>

      <CardContent className="grid gap-4 md:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.competitorLabel}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <p className="text-sm font-medium text-white">
              {item.competitorLabel}
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-100">
              {item.estimatedScore}/100
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>
                <span className="text-slate-400">Strongest Advantage:</span>{" "}
                {item.strongestAdvantage}
              </p>
              <p>
                <span className="text-slate-400">Likely Weakness:</span>{" "}
                {item.likelyWeakness}
              </p>
              <p>
                <span className="text-slate-400">Outrank Opportunity:</span>{" "}
                {item.outrankOpportunity}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}