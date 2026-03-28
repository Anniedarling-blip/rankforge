import { SeoAnalysisResult } from "@/types/seo";

export const mockSeoResult: SeoAnalysisResult = {
  intent: {
    searchIntent: "Commercial",
    funnelStage: "MOFU",
    painPoint: "Users want to compare options before choosing a solution.",
    contentAngle: "Comparison-first content with strong business context and actionable decision support.",
    buyerSignal: "Moderate-to-high intent to evaluate and shortlist tools.",
    intentConfidenceScore: 89,
    whyThisMatters:
      "Commercial intent means the content should help users compare, evaluate, and move closer to a decision. Strong CTA placement and trust signals matter early."
  },
  keywordClusters: [
    {
      label: "Primary",
      keywords: ["best ai seo tools", "ai seo tools", "seo tools for ranking"],
      priority: "High Impact",
      usageTip: "Use in H1, intro, and the main comparison H2 section."
    },
    {
      label: "Secondary",
      keywords: ["content optimization tools", "seo automation software", "keyword strategy tools"],
      priority: "Supporting",
      usageTip: "Use in body sections and product-specific comparisons."
    },
    {
      label: "Semantic",
      keywords: ["search intent", "SERP analysis", "content brief", "ranking opportunity"],
      priority: "Supporting",
      usageTip: "Use naturally throughout supporting explanations."
    },
    {
      label: "FAQs",
      keywords: ["Which AI SEO tool is best?", "Can AI improve rankings?", "Are AI SEO tools worth it?"],
      priority: "Long-tail",
      usageTip: "Use in FAQ sections and snippet-targeted blocks."
    }
  ],
  serpGap: {
    commonPatterns: [
      "Most results are listicles",
      "Many pages are generic and beginner-focused",
      "Comparison pages rarely explain decision logic"
    ],
    contentGaps: [
      "Weak real-world examples",
      "Poor business-type segmentation",
      "Little guidance on CTA and conversion strategy"
    ],
    missedAngles: [
      "India-specific examples",
      "Business-size pricing interpretation",
      "Decision-based tool recommendations"
    ],
    outrankStrategy: [
      "Add comparison logic, not just feature lists",
      "Segment content by SaaS, Ecommerce, and Personal Brand",
      "Add CTA markers at high-intent sections"
    ],
    competitorWeaknessSimulation: [
      "Competitors lack conversion-focused structure",
      "Most pages do not explain why one tool beats another",
      "SERP leaders underuse strategic trust builders"
    ],
    whyThisMatters:
      "This section identifies where top-ranking content is shallow. That gives you a concrete path to outperform rather than just imitate."
  },
  strategy: {
    articleType: "Comparison-led strategy article",
    positioning: "A decision-support content asset for businesses choosing the right SEO growth path",
    toneStrategy: "Confident, credible, consultative, and highly scannable",
    ctaStrategy: "Use CTA after comparison block, after pricing logic, and after best-fit recommendation",
    trustBuilders: [
      "Use-case segmentation",
      "Decision framework",
      "Comparison rationale",
      "Clear recommendations"
    ],
    outrankPlan: [
      "Open with intent-aligned framing",
      "Use structured comparison tables",
      "Answer high-buying questions earlier",
      "End with action-oriented recommendation"
    ],
    whyThisMatters:
      "This is the business layer. It aligns ranking strategy with conversion behavior, which is what makes the tool feel useful and premium."
  },
  blueprint: {
    titles: [
      "Best AI SEO Tools for Growth Teams in 2026",
      "Top AI SEO Tools Compared: Features, Pricing, and Fit",
      "How to Choose the Best AI SEO Tool for Your Business"
    ],
    metaTitle: "Best AI SEO Tools in 2026: Compare Features, Pricing & Results",
    metaDescription:
      "Compare the best AI SEO tools by features, pricing, business fit, and ranking potential. Find the right option for your growth strategy.",
    featuredSnippet:
      "The best AI SEO tools help with keyword research, content optimization, search intent mapping, and SERP analysis. The right choice depends on your business model, SEO maturity, and conversion goals.",
    outline: {
      h1: "Best AI SEO Tools for Smarter Growth",
      h2: [
        "What Makes an AI SEO Tool Valuable?",
        "Best AI SEO Tools Compared",
        "Best Choice by Business Type",
        "Pricing Breakdown",
        "How to Choose Based on Your Goal",
        "FAQ"
      ],
      h3: [
        "Best for SaaS",
        "Best for Ecommerce",
        "Best for Personal Brand",
        "CTA Opportunity: Choose Your Best Fit"
      ]
    },
    ctaPlacementMarkers: [
      "After comparison table",
      "After pricing section",
      "After best-fit recommendation"
    ],
    whyThisMatters:
      "This makes the strategy executable. It converts a strategic idea into an actual publishable content blueprint."
  },
  scoring: {
    scores: [
      {
        label: "SEO Score",
        score: 88,
        reason: "Strong structure, keyword alignment, and SERP differentiation."
      },
      {
        label: "Snippet Readiness",
        score: 80,
        reason: "Good snippet framing with clear concise answer blocks."
      },
      {
        label: "Semantic Coverage",
        score: 85,
        reason: "The keyword spread is broad and thematically relevant."
      },
      {
        label: "Readability",
        score: 82,
        reason: "The hierarchy is clear and easy to scan."
      },
      {
        label: "CTA Strength",
        score: 87,
        reason: "CTA placement is strategically tied to high-intent moments."
      },
      {
        label: "GEO Readiness",
        score: 76,
        reason: "Localized opportunity exists but can be expanded further."
      },
      {
        label: "Internal Linking",
        score: 78,
        reason: "Good linking potential if related pages are mapped."
      }
    ]
  },
  performance: {
    rankingPotential: "High",
    trafficPotential: "Medium",
    conversionPotential: "High",
    snippetProbability: "Medium",
    whyThisMatters:
      "This helps the user estimate likely outcome and prioritize which strategy to publish or improve first."
  }
};