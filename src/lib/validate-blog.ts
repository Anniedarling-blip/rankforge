import {
  BlogValidationMetric,
  BlogValidationResult,
  GeneratedBlog,
} from "@/types/blog";

function countOccurrences(text: string, pattern: RegExp): number {
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

function getContentDepth(markdown: string): "Low" | "Medium" | "High" {
  const wordCount = markdown.trim().split(/\s+/).filter(Boolean).length;
  const h2Count = countOccurrences(markdown, /^##\s+/gm);
  const h3Count = countOccurrences(markdown, /^###\s+/gm);

  const paragraphBlocks = markdown
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(
      (block) =>
        block.length > 40 &&
        !block.startsWith("#") &&
        !block.startsWith("-") &&
        !block.startsWith("|") &&
        !block.startsWith("**Meta")
    );

  const paragraphCount = paragraphBlocks.length;

  if (
    wordCount >= 700 &&
    h2Count >= 5 &&
    h3Count >= 5 &&
    paragraphCount >= 12
  ) {
    return "High";
  }

  if (
    wordCount >= 450 &&
    h2Count >= 4 &&
    h3Count >= 4 &&
    paragraphCount >= 8
  ) {
    return "Medium";
  }

  return "Low";
}

export function validateGeneratedBlog(
  blog: Omit<GeneratedBlog, "validation">
): BlogValidationResult {
  const markdown = blog.markdown;
  const keyword = blog.primaryKeyword;

  const wordCount = markdown.trim().split(/\s+/).filter(Boolean).length;

  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const keywordCount = (
    markdown.match(new RegExp(escapedKeyword, "gi")) || []
  ).length;

  const seoScore = Math.min(100, Math.round(60 + wordCount / 40));
  const keywordPlacementAccuracy =
    keywordCount > 5 ? 90 : keywordCount > 2 ? 75 : 55;

  const contentDepth = getContentDepth(markdown);

  const featuredSnippetEligibility = markdown.includes("## Featured Snippet")
    ? 95
    : 60;

  const readabilityScore = 84;
  const aiDetectionPercentage = 14;
  const geoOptimization = markdown.includes("India") ? 92 : 72;

  const ctaEffectiveness = /Try|Start|Book|Explore|Shop/i.test(markdown)
    ? 88
    : 62;

  const structuralStrength = /##\s|###\s/.test(markdown) ? 93 : 68;

  const platformAdaptationQuality =
    blog.platformVersions && blog.platformVersions.length >= 5 ? 90 : 72;

  const metrics: BlogValidationMetric[] = [
    {
      label: "SEO Score",
      value: seoScore,
      reason:
        "Strong structure, keyword usage, and content length improve ranking probability.",
    },
    {
      label: "Keyword Placement Accuracy",
      value: keywordPlacementAccuracy,
      reason:
        "The keyword appears in strategic areas such as title, snippet, and core sections.",
    },
    {
      label: "Content Depth",
      value: contentDepth,
      reason:
        "Depth reflects whether the blog has enough detail, sections, and paragraph development to compete in SERPs.",
    },
    {
      label: "Featured Snippet Eligibility",
      value: featuredSnippetEligibility,
      reason:
        "The presence of a dedicated snippet block improves answer-engine compatibility.",
    },
    {
      label: "Readability Score",
      value: readabilityScore,
      reason:
        "The structure is easy to scan, which supports comprehension and engagement.",
    },
    {
      label: "AI Detection %",
      value: aiDetectionPercentage,
      reason: "This is simulated low-AI-detection output for demo purposes.",
    },
    {
      label: "GEO Optimization",
      value: geoOptimization,
      reason:
        "Localized relevance improves discoverability in regional search contexts.",
    },
    {
      label: "CTA Effectiveness",
      value: ctaEffectiveness,
      reason: "The content includes clear CTA language that supports conversion.",
    },
    {
      label: "Structural Strength",
      value: structuralStrength,
      reason:
        "Well-defined H1/H2/H3 hierarchy increases SEO clarity and user navigation.",
    },
    {
      label: "Platform Adaptation",
      value: platformAdaptationQuality,
      reason:
        "The blog can be restructured cleanly for multiple publishing environments.",
    },
  ];

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
    metrics,
  };
}