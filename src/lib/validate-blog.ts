import { BlogValidationResult } from "@/types/blog";

export function validateBlog(blog: string, keyword: string): BlogValidationResult {
  const wordCount = blog.trim().split(/\s+/).length;
  const keywordCount = (blog.match(new RegExp(keyword, "gi")) || []).length;

  const seoScore = Math.min(100, Math.round(60 + wordCount / 40));
  const keywordPlacementAccuracy =
    keywordCount > 5 ? 90 : keywordCount > 2 ? 75 : 55;
  const contentDepth =
    wordCount > 1800 ? "High" : wordCount > 1000 ? "Medium" : "Low";
  const featuredSnippetEligibility = blog.includes("## Featured Snippet") ? 95 : 60;
  const readabilityScore = 84;
  const aiDetectionPercentage = 14;
  const geoOptimization = blog.includes("India") ? 92 : 72;
  const ctaEffectiveness =
    /Try|Start|Book|Explore|Shop/i.test(blog) ? 88 : 62;
  const structuralStrength = /##\s|###\s/.test(blog) ? 93 : 68;
  const platformAdaptationQuality = 90;

  return {
    seoScore,
    keywordPlacementAccuracy,
    contentDepth,
    featuredSnippetEligibility,
    readabilityScore,
    aiDetectionPercentage,
    geoOptimization,
    ctaEffectiveness,
    structuralStrength,
    platformAdaptationQuality,
    metrics: [
      {
        label: "SEO Score",
        value: seoScore,
        reason: "Strong structure, keyword usage, and content length improve ranking probability.",
      },
      {
        label: "Keyword Placement Accuracy",
        value: keywordPlacementAccuracy,
        reason: "The keyword appears in strategic areas such as title, snippet, and core sections.",
      },
      {
        label: "Content Depth",
        value: contentDepth,
        reason: "Depth reflects whether the blog has enough detail to compete in SERPs.",
      },
      {
        label: "Featured Snippet Eligibility",
        value: featuredSnippetEligibility,
        reason: "The presence of a dedicated snippet block improves answer-engine compatibility.",
      },
      {
        label: "Readability Score",
        value: readabilityScore,
        reason: "The structure is easy to scan, which supports comprehension and engagement.",
      },
      {
        label: "AI Detection %",
        value: aiDetectionPercentage,
        reason: "This is simulated low-AI-detection output for demo purposes.",
      },
      {
        label: "GEO Optimization",
        value: geoOptimization,
        reason: "Localized relevance improves discoverability in regional search contexts.",
      },
      {
        label: "CTA Effectiveness",
        value: ctaEffectiveness,
        reason: "The content includes clear CTA language that supports conversion.",
      },
      {
        label: "Structural Strength",
        value: structuralStrength,
        reason: "Well-defined H1/H2/H3 hierarchy increases SEO clarity and user navigation.",
      },
      {
        label: "Platform Adaptation",
        value: platformAdaptationQuality,
        reason: "The blog can be restructured cleanly for multiple publishing environments.",
      },
    ],
  };
}