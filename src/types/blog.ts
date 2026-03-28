export type PublishingPlatform =
  | "Medium"
  | "LinkedIn"
  | "Dev.to"
  | "WordPress"
  | "Hashnode";

export interface BlogValidationMetric {
  label: string;
  value: string | number;
  reason: string;
}

export interface BlogValidationResult {
  seoScore: number;
  keywordPlacementAccuracy: number;
  contentDepth: "Low" | "Medium" | "High";
  featuredSnippetEligibility: number;
  readabilityScore: number;
  aiDetectionPercentage: number;
  geoOptimization: number;
  ctaEffectiveness: number;
  structuralStrength: number;
  platformAdaptationQuality: number;
  metrics: BlogValidationMetric[];
}

export interface PlatformAdaptationEntry {
  platform: PublishingPlatform;
  content: string;
  adaptationNote: string;
}

export interface GeneratedBlog {
  id: string;
  title: string;
  primaryKeyword: string;
  markdown: string;
  metaTitle: string;
  metaDescription: string;
  validation: BlogValidationResult;
  platformVersions: PlatformAdaptationEntry[];
}

export interface Part3Assets {
  blogs: GeneratedBlog[];
}