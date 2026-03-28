export type BusinessType = "SaaS" | "Ecommerce" | "Personal Brand";

export type SearchIntent =
  | "Informational"
  | "Navigational"
  | "Commercial"
  | "Transactional";

export type FunnelStage = "TOFU" | "MOFU" | "BOFU";

export type PriorityTag = "High Impact" | "Supporting" | "Long-tail";

export type Potential = "Low" | "Medium" | "High";

export type CompetitionLevel = "Low" | "Medium" | "High";

export interface SeoInput {
  keyword: string;
  audience: string;
  product: string;
  goal: string;
  tone: string;
  platform: string;
  businessType: BusinessType;
  notes?: string;
}

export interface IntentResult {
  searchIntent: SearchIntent;
  funnelStage: FunnelStage;
  painPoint: string;
  contentAngle: string;
  buyerSignal: string;
  intentConfidenceScore: number;
  whyThisMatters: string;
}

export interface KeywordClusterGroup {
  label: string;
  keywords: string[];
  priority: PriorityTag;
  usageTip: string;
}

export interface SerpGapResult {
  commonPatterns: string[];
  contentGaps: string[];
  missedAngles: string[];
  outrankStrategy: string[];
  competitorWeaknessSimulation: string[];
  whyThisMatters: string;
}

export interface StrategyResult {
  articleType: string;
  positioning: string;
  toneStrategy: string;
  ctaStrategy: string;
  trustBuilders: string[];
  outrankPlan: string[];
  whyThisMatters: string;
}

export interface BlueprintResult {
  titles: string[];
  metaTitle: string;
  metaDescription: string;
  featuredSnippet: string;
  outline: {
    h1: string;
    h2: string[];
    h3: string[];
  };
  ctaPlacementMarkers: string[];
  whyThisMatters: string;
}

export interface ScoreItem {
  label: string;
  score: number;
  reason: string;
}

export interface ScoringResult {
  scores: ScoreItem[];
  overallScore: number;
  percentileStrength: number;
  scoreSummary: string;
}

export interface PerformanceResult {
  rankingPotential: Potential;
  trafficPotential: Potential;
  conversionPotential: Potential;
  snippetProbability: Potential;
  whyThisMatters: string;
}

export interface PlatformAdaptationResult {
  platform: string;
  formattingStyle: string;
  ctaStyle: string;
  contentAdjustments: string[];
}

export interface DecisionTraceItem {
  title: string;
  detail: string;
}

export interface SerpSimulationResult {
  dominantContentType: string;
  competitionLevel: CompetitionLevel;
  estimatedTopPageAverageScore: number;
  topRankingPatterns: string[];
  rankingBarriers: string[];
  fastWinOpportunities: string[];
  simulationSummary: string;
}

export interface CompetitorScoreCard {
  competitorLabel: string;
  estimatedScore: number;
  strongestAdvantage: string;
  likelyWeakness: string;
  outrankOpportunity: string;
}

export interface BlogDraftSection {
  heading: string;
  content: string;
}

export interface BlogDraftResult {
  intro: string;
  sections: BlogDraftSection[];
  faq: string[];
  ctaBlock: string;
}

export interface SeoAnalysisResult {
  intent: IntentResult;
  keywordClusters: KeywordClusterGroup[];
  serpGap: SerpGapResult;
  strategy: StrategyResult;
  blueprint: BlueprintResult;
  scoring: ScoringResult;
  performance: PerformanceResult;
  serpSimulation: SerpSimulationResult;
  competitorScoring: CompetitorScoreCard[];
  decisionTrace: DecisionTraceItem[];
  blogDraft: BlogDraftResult;
  platformAdaptation: PlatformAdaptationResult;
}