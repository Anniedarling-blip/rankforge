"use client";

import { SeoAnalysisResult } from "@/types/seo";

export function KeywordQualityAlert({
  result,
}: {
  result: SeoAnalysisResult;
}) {
  const lowConfidence = result.intent.intentConfidenceScore <= 25;
  const weakCluster = result.keywordClusters.some(
    (item) => item.label === "Keyword Validation Needed"
  );

  if (!lowConfidence && !weakCluster) return null;

  return (
    <div
      id="keyword-quality-alert"
      className="scroll-mt-24 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-100"
    >
      <p className="text-sm font-semibold">Low-Quality Keyword Detected</p>
      <p className="mt-2 text-sm text-amber-100/80">
        This keyword appears weak or low-signal. Results may be less reliable
        until the query is refined with clearer intent and topic specificity.
      </p>
    </div>
  );
}