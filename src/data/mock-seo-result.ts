import { SeoAnalysisResult } from "@/types/seo";

export const mockSeoResult: SeoAnalysisResult = {
  intent: {
    searchIntent: "Commercial",
    funnelStage: "MOFU",
    painPoint: "Users want to compare options before choosing a solution.",
    contentAngle:
      "Comparison-first content with strong business context and actionable decision support.",
    buyerSignal: "Moderate-to-high intent to evaluate and shortlist tools.",
    intentConfidenceScore: 89,
    whyThisMatters:
      "Commercial intent means the content should help users compare, evaluate, and move closer to a decision.",
  },

  keywordClusters: [
    {
      label: "Primary",
      keywords: ["best ai seo tools", "ai seo tools", "seo tools for ranking"],
      priority: "High Impact",
      usageTip: "Use in H1, intro, and the main comparison H2 section.",
    },
    {
      label: "Secondary",
      keywords: [
        "content optimization tools",
        "seo automation software",
        "keyword strategy tools",
      ],
      priority: "Supporting",
      usageTip: "Use in body sections and product-specific comparisons.",
    },
    {
      label: "Long-tail",
      keywords: [
        "best ai seo tools for startups",
        "best ai seo tools for agencies",
        "affordable ai seo tools",
      ],
      priority: "Long-tail",
      usageTip: "Use in FAQ sections and supporting subheadings.",
    },
  ],

  serpGap: {
    commonPatterns: [
      "Top pages rely heavily on generic comparison posts.",
      "Most ranking content highlights features but lacks decision support.",
      "Many articles are broad and weak on use-case segmentation.",
    ],
    contentGaps: [
      "Weak CTA logic tailored to intent stage.",
      "Limited explanation of ROI and business outcomes.",
      "Not enough product-fit examples by audience type.",
    ],
    missedAngles: [
      "Tie the topic directly to buyer psychology.",
      "Use stronger business framing and decision criteria.",
      "Include platform-specific formatting recommendations.",
    ],
    outrankStrategy: [
      "Use stronger comparison structure and decision-focused sections.",
      "Add clear CTA placement after evaluation-heavy sections.",
      "Create more specific examples for different business sizes.",
    ],
    competitorWeaknessSimulation: [
      "Competitor pages are likely broad, repetitive, and weak on conversion clarity.",
      "Most optimize for impressions more than decision quality.",
      "A sharper structure with stronger proof can outperform them.",
    ],
    whyThisMatters:
      "SERP gap analysis helps identify what current ranking pages are missing so the content can be more useful and more competitive.",
  },

  strategy: {
    articleType: "Comparison article with product-led framing",
    positioning:
      "Position the product as the practical choice for teams comparing AI SEO tools.",
    toneStrategy:
      "Use a confident, practical tone that supports evaluation and decision-making.",
    ctaStrategy:
      "Use CTA blocks after comparison and fit-analysis sections to drive demos or trials.",
    trustBuilders: [
      "Feature comparison tables",
      "Use-case based examples",
      "Screenshots or workflow visuals",
      "Proof points and ROI framing",
    ],
    outrankPlan: [
      "Use deeper decision-support content than generic comparison content.",
      "Map sections directly to user evaluation needs.",
      "Support the content with clearer structure and stronger CTA logic.",
    ],
    whyThisMatters:
      "The strategy layer converts keyword opportunity into a structure that can rank and convert.",
  },

  blueprint: {
    titles: [
      "Best AI SEO Tools: Top Picks for Smarter Organic Growth",
      "How to Choose the Right AI SEO Tool for Your Team",
      "AI SEO Tools Compared: Features, Use Cases, and Fit",
    ],
    metaTitle: "Best AI SEO Tools | Strategy-First SEO Comparison",
    metaDescription:
      "Compare the best AI SEO tools with a strategy-first structure built for ranking, evaluation, and conversion.",
    featuredSnippet:
      "The best AI SEO tools help teams improve rankings by combining keyword strategy, content optimization, and smarter workflow decisions.",
    outline: {
      h1: "The Smart Guide to AI SEO Tools",
      h2: [
        "What AI SEO tools actually help with",
        "How to compare tools by use case",
        "Key features that matter most",
        "Mistakes to avoid when choosing a platform",
        "Best-fit recommendations by team type",
      ],
      h3: [
        "How this keyword maps to commercial intent",
        "What buyers actually need from this page",
        "How to adapt the content to the platform",
        "How the structure supports conversion",
        "Where competitors usually fall short",
      ],
    },
    ctaPlacementMarkers: [
      "After the main comparison section",
      "After pricing or fit explanation",
      "Bottom-of-page demo CTA",
    ],
    whyThisMatters:
      "The blueprint ensures the final asset has the structure and CTA flow needed for ranking and conversion.",
  },

  scoring: {
    scores: [
      {
        label: "Intent Match",
        score: 9,
        reason: "The strategy closely matches commercial search behavior.",
      },
      {
        label: "Differentiation Strength",
        score: 8,
        reason: "The structure is stronger than generic comparison content.",
      },
      {
        label: "Conversion Readiness",
        score: 8,
        reason: "CTA logic supports decision-making effectively.",
      },
      {
        label: "SERP Fit",
        score: 9,
        reason: "The structure aligns with real SERP expectations.",
      },
    ],
    overallScore: 8.5,
    percentileStrength: 72,
    scoreSummary:
      "This strategy outperforms most generic SEO content due to strong intent alignment and conversion logic.",
  },

  performance: {
    rankingPotential: "High",
    trafficPotential: "Medium",
    conversionPotential: "High",
    snippetProbability: "Medium",
    whyThisMatters:
      "Performance projection shows this is a high-conversion opportunity keyword.",
  },

  serpSimulation: {
    dominantContentType: "Comparison guides and blog posts",
    competitionLevel: "Medium",
    estimatedTopPageAverageScore: 7.4,
    topRankingPatterns: [
      "List-style comparisons",
      "Decision-support sections",
      "Feature breakdowns",
    ],
    rankingBarriers: [
      "Crowded SERP",
      "Weak differentiation",
      "High content similarity",
    ],
    fastWinOpportunities: [
      "Better CTA flow",
      "Clear use-case segmentation",
      "Stronger decision framing",
    ],
    simulationSummary:
      "A sharper, decision-focused page can outperform generic competitors.",
  },

  competitorScoring: [
    {
      competitorLabel: "Generic Comparison Blog",
      estimatedScore: 6.8,
      strongestAdvantage: "Broad keyword coverage",
      likelyWeakness: "Weak conversion logic",
      outrankOpportunity: "Improve CTA and decision clarity",
    },
    {
      competitorLabel: "SEO Software Vendor Page",
      estimatedScore: 7.1,
      strongestAdvantage: "Detailed product info",
      likelyWeakness: "Limited educational depth",
      outrankOpportunity: "Blend education + product fit",
    },
  ],

  decisionTrace: [
    {
      title: "Keyword Input",
      detail: 'Primary keyword: "best ai seo tools".',
    },
    {
      title: "Intent Classification",
      detail: "Detected commercial intent based on comparison phrasing.",
    },
    {
      title: "Strategy Mapping",
      detail: "Selected comparison-first structure.",
    },
    {
      title: "Scoring Logic",
      detail: "Scores based on intent, structure, and conversion alignment.",
    },
  ],

  blogDraft: {
    intro:
      'To rank for "best ai seo tools", your content must guide users through comparison and decision-making.',
    sections: [
      {
        heading: "What AI SEO tools actually help with",
        content:
          "They improve workflow speed, content quality, and ranking efficiency.",
      },
      {
        heading: "How to compare tools",
        content:
          "Evaluate based on business type, scale, and SEO workflow needs.",
      },
      {
        heading: "Key features",
        content:
          "Focus on automation, optimization, and strategic insights.",
      },
    ],
    faq: [
      "What are the best AI SEO tools?",
      "How do they improve rankings?",
      "Which features matter most?",
    ],
    ctaBlock:
      "Start your free trial and improve your SEO workflow today.",
  },

  platformAdaptation: {
    platform: "Blog",
    formattingStyle: "Structured SEO article with strong headings",
    ctaStyle: "Conversion-focused CTA",
    contentAdjustments: [
      "Use keyword-rich H2s",
      "Add snippet-ready answers",
      "Place CTAs after decision sections",
    ],
  },
};