"use client";

import { SeoAnalysisResult, SeoInput } from "@/types/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DynamicProofPanel({
  input,
  result,
}: {
  input: SeoInput;
  result: SeoAnalysisResult;
}) {
  return (
    <Card
      id="dynamic-proof"
      className="scroll-mt-24 border-slate-800 bg-slate-900/70 text-white"
    >
      <CardHeader>
        <CardTitle>Dynamic Intelligence Proof</CardTitle>
        <p className="text-sm text-slate-400">
          This output changes based on the exact input context
        </p>
      </CardHeader>

      <CardContent className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm font-medium text-white">Input Factors</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Business Type: {input.businessType}</li>
            <li>• Platform: {input.platform}</li>
            <li>• Goal: {input.goal}</li>
            <li>• Audience: {input.audience}</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm font-medium text-white">Output Impact</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Intent: {result.intent.searchIntent}</li>
            <li>• Article Type: {result.strategy.articleType}</li>
            <li>• CTA Style: {result.platformAdaptation.ctaStyle}</li>
            <li>• Ranking Potential: {result.performance.rankingPotential}</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}