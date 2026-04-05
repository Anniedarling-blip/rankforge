import { SeoAnalysisResult, SeoInput } from "@/types/seo";
import { Reveal } from "@/components/animation/reveal";
import { DecisionTracePanel } from "./decision-trace-panel";
import { IntentPanel } from "./intent-panel";
import { KeywordClusterPanel } from "./keyword-cluster-panel";
import { SerpGapPanel } from "./serp-gap-panel";
import { StrategyPanel } from "./strategy-panel";
import { BlueprintPanel } from "./blueprint-panel";
import { BlogDraftPanel } from "./blog-draft-panel";
import { PlatformAdaptationPanel } from "./platform-adaptation-panel";
import { ScoringPanel } from "./scoring-panel";
import { PerformancePanel } from "./performance-panel";

// ✅ ADDED IMPORTS
import { KeywordQualityAlert } from "./keyword-quality-alert";
import { CompetitorAnalysisPanel } from "./competitor-analysis-panel";
import { VisualAnalyticsPanel } from "./visual-analytics-panel";
import { DynamicProofPanel } from "./dynamic-proof-panel";

// ✅ UPDATED PROPS
export function ResultsDashboard({
  result,
  input,
}: {
  result: SeoAnalysisResult;
  input: SeoInput;
}) {
  return (
    <div className="mt-8 space-y-12">

      <Reveal delay={0.1}>
        <DecisionTracePanel items={result.decisionTrace} />
      </Reveal>

      {/* ✅ NEW BLOCKS (Correct Placement) */}
      <KeywordQualityAlert result={result} />

      <DynamicProofPanel input={input} result={result} />

      <CompetitorAnalysisPanel data={result.competitorScoring} />

      <VisualAnalyticsPanel
        scoring={result.scoring}
        performance={result.performance}
        competitors={result.competitorScoring}
      />

      <Reveal delay={0.2}>
        <IntentPanel data={result.intent} />
      </Reveal>

      <Reveal delay={0.3}>
        <KeywordClusterPanel groups={result.keywordClusters} />
      </Reveal>

      <Reveal delay={0.4}>
        <SerpGapPanel data={result.serpGap} />
      </Reveal>

      <Reveal delay={0.5}>
        <StrategyPanel data={result.strategy} />
      </Reveal>

      <Reveal delay={0.6}>
        <BlueprintPanel data={result.blueprint} />
      </Reveal>

      <Reveal delay={0.7}>
        <BlogDraftPanel data={result.blogDraft} />
      </Reveal>

      <Reveal delay={0.8}>
        <PlatformAdaptationPanel data={result.platformAdaptation} />
      </Reveal>

      <Reveal delay={0.9}>
        <ScoringPanel data={result.scoring} />
      </Reveal>

      <Reveal delay={1.0}>
        <PerformancePanel data={result.performance} />
      </Reveal>
    </div>
  );
}