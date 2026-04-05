import { BusinessType, SearchIntent } from "@/types/seo";

export const ctaByBusinessType: Record<BusinessType, string[]> = {
  SaaS: ["Start free trial", "Book a demo", "See product in action"],
  Ecommerce: ["Shop now", "Add to cart", "Explore the collection"],
  "Personal Brand": [
    "Follow for more insights",
    "Join the newsletter",
    "Book a strategy call",
  ],
};

export const trustBuildersByBusinessType: Record<BusinessType, string[]> = {
  SaaS: [
    "Feature comparison table",
    "Workflow screenshots",
    "Case study or ROI proof",
    "Use-case specific examples",
  ],
  Ecommerce: [
    "Ratings and reviews",
    "Ingredient or material transparency",
    "Shipping and returns clarity",
    "Before/after product imagery",
  ],
  "Personal Brand": [
    "Story-driven examples",
    "Proof of expertise",
    "Audience transformation promise",
    "Framework or method breakdown",
  ],
};

export const platformRules: Record<
  string,
  {
    formattingStyle: string;
    ctaStyle: string;
    contentAdjustments: string[];
  }
> = {
  linkedin: {
    formattingStyle:
      "Short paragraphs, hook-first flow, authority-building close.",
    ctaStyle: "Engagement CTA",
    contentAdjustments: [
      "Lead with a hook",
      "Use short paragraphs",
      "End with follow or comment CTA",
    ],
  },
  medium: {
    formattingStyle:
      "Long-form readable article with smoother narrative transitions.",
    ctaStyle: "Soft thought-leadership CTA",
    contentAdjustments: [
      "Use readable narrative flow",
      "Reduce overly salesy phrasing",
      "Keep insight-first structure",
    ],
  },
  blog: {
    formattingStyle:
      "Structured SEO article with strong H2 sections and snippet-friendly answers.",
    ctaStyle: "Goal-aligned conversion CTA",
    contentAdjustments: [
      "Use keyword-rich headings",
      "Keep snippet blocks visible",
      "Place CTA after high-intent sections",
    ],
  },
  website: {
    formattingStyle:
      "Conversion-oriented page structure with clear trust and CTA blocks.",
    ctaStyle: "Direct conversion CTA",
    contentAdjustments: [
      "Keep sections concise and persuasive",
      "Add trust signals near CTA",
      "Highlight value quickly",
    ],
  },
};

export const whyThisMattersByIntent: Record<SearchIntent, string> = {
  Informational:
    "Users are learning and exploring. The strategy should prioritize clarity, useful structure, and trust-building depth.",
  Navigational:
    "Users want to reach a specific destination or brand outcome quickly, so the content must reduce friction and improve direct relevance.",
  Commercial:
    "Users are evaluating options. The strategy should prioritize comparison, differentiation, and decision support.",
  Transactional:
    "Users are close to taking action. The strategy should emphasize proof, trust signals, and strong CTA placement.",
};

export const snippetPatterns = [
  "Use a direct answer block near the top of the page.",
  "Add concise FAQ responses for snippet eligibility.",
  "Keep at least one definition-style section in the content.",
  "Use H2 + short paragraph formatting for answer engines.",
];
