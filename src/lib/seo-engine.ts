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

/* -------------------- helpers -------------------- */

function normalize(value?: string): string {
  return (value ?? "").trim();
}

function lower(value?: string): string {
  return normalize(value).toLowerCase();
}

function titleCase(value: string): string {
  return value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      if (word === "ai") return "AI";
      if (word === "saas") return "SaaS";
      if (word === "seo") return "SEO";
      if (word === "ats") return "ATS";
      if (word === "api") return "API";
      if (word === "ui") return "UI";
      if (word === "ux") return "UX";
      if (word === "linkedin") return "LinkedIn";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function includesAny(text: string, terms: string[]): boolean {
  return terms.some((term) => text.includes(term));
}

function clampScore(score: number, min = 1, max = 10): number {
  return Math.max(min, Math.min(max, Math.round(score)));
}

function clampPercent(value: number): number {
  return Math.max(1, Math.min(99, Math.round(value)));
}

function dedupe(values: string[]): string[] {
  return [...new Set(values.map((v) => v.trim()).filter(Boolean))];
}

function isWeakKeyword(keyword: string): boolean {
  const clean = normalize(keyword).toLowerCase();
  const wordCount = clean.split(/\s+/).filter(Boolean).length;

  return (
    wordCount <= 1 ||
    clean.length < 4 ||
    !/[aeiou]/i.test(clean) ||
    /^(test|abc|xyz|demo|sample|3g|hjgg|fdbged|jkn|vhjhjg|lhtks)$/i.test(clean)
  );
}

function isInstructionalKeyword(keyword: string): boolean {
  return /^(how to|how|what is|what are|why|guide|tips|learn)\b/i.test(
    normalize(keyword)
  );
}

function stripInstructionalPrefix(keyword: string): string {
  return normalize(keyword)
    .replace(/^(how to|how|what is|what are|why)\s+/i, "")
    .trim();
}

function detectIntent(keyword: string): SearchIntent {
  const k = lower(keyword);

  const informationalPatterns = [
    "how to",
    "how ",
    "what is",
    "what are",
    "why ",
    "guide",
    "tips",
    "learn",
    "tutorial",
    "examples",
    "checklist",
  ];

  const transactionalPatterns = [
    "buy",
    "price",
    "pricing",
    "coupon",
    "discount",
    "shop",
    "order",
    "subscribe",
    "trial",
    "demo",
    "book",
    "online",
    "hire",
    "download",
    "get started",
  ];

  const commercialPatterns = [
    "best",
    "top",
    "review",
    "reviews",
    "vs",
    "compare",
    "comparison",
    "alternatives",
    "tools",
    "software",
    "platform",
    "builder",
    "generator",
  ];

  const navigationalPatterns = [
    "login",
    "official",
    "website",
    "homepage",
    "company",
    "app",
  ];

  if (informationalPatterns.some((term) => k.includes(term))) {
    return "Informational";
  }

  if (transactionalPatterns.some((term) => k.includes(term))) {
    return "Transactional";
  }

  if (commercialPatterns.some((term) => k.includes(term))) {
    return "Commercial";
  }

  if (navigationalPatterns.some((term) => k.includes(term))) {
    return "Navigational";
  }

  // noun-style product queries like "ai resume builder"
  if (k.split(/\s+/).length >= 2) {
    return "Commercial";
  }

  return "Informational";
}

function detectFunnelStage(intent: SearchIntent): FunnelStage {
  switch (intent) {
    case "Informational":
      return "TOFU";
    case "Navigational":
      return "MOFU";
    case "Commercial":
      return "MOFU";
    case "Transactional":
      return "BOFU";
    default:
      return "TOFU";
  }
}

function stripLeadingIntentModifiers(keyword: string): string {
  return normalize(keyword)
    .replace(/^(best|top|compare)\s+/i, "")
    .trim();
}

function getKeywordBase(keyword: string): string {
  const normalizedKeyword = normalize(keyword);

  if (isInstructionalKeyword(normalizedKeyword)) {
    const stripped = stripInstructionalPrefix(normalizedKeyword)
      .replace(/\s+/g, " ")
      .trim();
    return stripped || normalizedKeyword;
  }

  const cleaned = stripLeadingIntentModifiers(normalizedKeyword)
    .replace(/\s+/g, " ")
    .trim();

  const transactionLeadingPhrases = [
    /^buy\s+/i,
    /^shop\s+/i,
    /^order\s+/i,
    /^get\s+/i,
    /^download\s+/i,
  ];

  let nounishBase = cleaned;
  for (const pattern of transactionLeadingPhrases) {
    nounishBase = nounishBase.replace(pattern, "").trim();
  }

  return nounishBase || cleaned;
}

function startsWithCommercialModifier(keyword: string): boolean {
  return /^(best|top|compare)\s+/i.test(lower(keyword));
}

function startsWithTransactionalModifier(keyword: string): boolean {
  return /^(buy|shop|order|get|download)\s+/i.test(lower(keyword));
}

function sanitizeTone(tone: string, goal: string): string {
  const cleanTone = normalize(tone);
  const cleanGoal = lower(goal);

  if (!cleanTone) return "";

  const badToneSignals = [
    "increase",
    "sales",
    "signups",
    "revenue",
    "conversions",
    "traffic",
    "leads",
    "growth",
  ];

  const toneLooksLikeGoal = badToneSignals.some((signal) =>
    lower(cleanTone).includes(signal)
  );

  if (toneLooksLikeGoal || lower(cleanTone) === cleanGoal) {
    return "";
  }

  return cleanTone;
}

function buildPainPoint(
  businessType: BusinessType,
  audience: string,
  keyword: string,
  notes: string
): string {
  const audiencePart = audience ? `${audience} ` : "users ";
  const keywordLower = lower(keyword);
  const noteHint = notes ? ` Key consideration: ${notes}.` : "";

  if (businessType === "SaaS") {
    if (includesAny(keywordLower, ["resume", "ats"])) {
      return `${audiencePart}need faster, higher-quality outputs and want tools that improve results without adding friction. They also need confidence that the solution performs well in real workflows.${noteHint}`;
    }

    return `${audiencePart}need faster outcomes, lower manual effort, and confidence that the software will improve workflow efficiency and justify adoption.${noteHint}`;
  }

  if (businessType === "Ecommerce") {
    if (includesAny(keywordLower, ["skincare", "organic", "serum", "cream"])) {
      return `${audiencePart}want safe, trustworthy products with clear ingredients, visible benefits, and enough proof to buy without hesitation.${noteHint}`;
    }

    return `${audiencePart}need reassurance on product quality, value, fit, and trust before making a purchase.${noteHint}`;
  }

  if (
    isInstructionalKeyword(keywordLower) &&
    includesAny(keywordLower, ["linkedin", "personal brand", "brand"])
  ) {
    return `${audiencePart}want to build credibility and visibility without sounding fake, inconsistent, or generic online.${noteHint}`;
  }

  return `${audiencePart}want clarity, credibility, and a practical path to visible results instead of vague advice.${noteHint}`;
}

function getBusinessContext(input: SeoInput) {
  const goal = normalize(input.goal);
  const audience = normalize(input.audience);
  const keyword = normalize(input.keyword);
  const notes = normalize(input.notes);

  switch (input.businessType) {
    case "SaaS":
      return {
        articleTypeMap: {
          Informational: "Educational guide with product-led framing",
          Navigational: "Feature or solution landing page",
          Commercial: "Comparison article or tool roundup",
          Transactional: "Demo or free-trial conversion page",
        } as const,
        painPoint: buildPainPoint("SaaS", audience, keyword, notes),
        contentAngle:
          "Show workflow improvement, feature differentiation, measurable outcomes, and proof of fit.",
        buyerSignal:
          "The searcher is evaluating tools and needs proof that this solution is worth adopting.",
        cta: goal
          ? `Encourage users to ${goal.toLowerCase()} using strong CTAs like “Start free trial”, “Book a demo”, or “Try it now”.`
          : "Encourage action with CTAs like “Start free trial”, “Book a demo”, or “Try it now”.",
        trustBuilders: [
          "Feature comparison table",
          "Use-case specific examples",
          "Workflow screenshots or product visuals",
          "Case study or ROI proof",
          "Free trial or demo CTA",
        ],
        outlineBlocks: {
          Informational: [
            "What the keyword means in a real workflow",
            "Why teams search for this solution",
            "Key features to look for",
            "Common mistakes when choosing a platform",
            "Best-fit recommendations by use case",
          ],
          Commercial: [
            "Top tools and who each is best for",
            "Feature comparison",
            "Pricing and scalability considerations",
            "Integration and onboarding factors",
            "Final recommendation",
          ],
          Transactional: [
            "Why this solution fits the use case",
            "Core features",
            "Pricing and trial details",
            "Implementation steps",
            "CTA to start",
          ],
          Navigational: [
            "Platform overview",
            "Who it is for",
            "Feature highlights",
            "How to get started",
            "CTA to try or book a demo",
          ],
        } as const,
      };

    case "Ecommerce":
      return {
        articleTypeMap: {
          Informational: "Buying guide or educational commerce article",
          Navigational: "Category or branded collection page",
          Commercial: "Best products listicle or comparison page",
          Transactional: "Product or category landing page optimized for purchase",
        } as const,
        painPoint: buildPainPoint("Ecommerce", audience, keyword, notes),
        contentAngle:
          "Reduce buying friction with comparison points, proof, benefits, and buyer-confidence signals.",
        buyerSignal:
          "The searcher is close to purchase but still needs reassurance on quality, trust, and fit.",
        cta: goal
          ? `Encourage users to ${goal.toLowerCase()} using direct CTAs like “Shop now”, “Add to cart”, or “Explore the collection”.`
          : "Encourage action with CTAs like “Shop now”, “Add to cart”, or “Explore the collection”.",
        trustBuilders: [
          "Ingredient or material transparency",
          "Ratings and reviews",
          "Before/after or product imagery",
          "Shipping and returns clarity",
          "Offer or bundle positioning",
        ],
        outlineBlocks: {
          Informational: [
            "What to look for before buying",
            "How to compare options",
            "Key ingredients or product features",
            "Who this is best for",
            "Best picks by need",
          ],
          Commercial: [
            "Best products for the query",
            "Comparison by use case or need",
            "Price-to-value analysis",
            "How to choose the right option",
            "Where to buy",
          ],
          Transactional: [
            "Product benefits",
            "Why shoppers choose it",
            "Ingredients, specs, or details",
            "Shipping, returns, and guarantees",
            "CTA to purchase",
          ],
          Navigational: [
            "Category overview",
            "Featured products",
            "How to shop the collection",
            "Offers and bundles",
            "CTA to browse or buy",
          ],
        } as const,
      };

    case "Personal Brand":
      return {
        articleTypeMap: {
          Informational: "Thought leadership article or personal growth guide",
          Navigational: "Personal brand hub or authority page",
          Commercial: "Framework article with service or offer positioning",
          Transactional: "Personal offer or coaching landing page",
        } as const,
        painPoint: buildPainPoint("Personal Brand", audience, keyword, notes),
        contentAngle:
          "Teach a clear framework, build authority, and connect strategy to identity and transformation.",
        buyerSignal:
          "The searcher wants a roadmap and may later convert into a follower, subscriber, or client.",
        cta: goal
          ? `Encourage users to ${goal.toLowerCase()} using authority CTAs like “Subscribe”, “Join the newsletter”, or “Book a strategy call”.`
          : "Encourage action with CTAs like “Subscribe”, “Join the newsletter”, or “Book a strategy call”.",
        trustBuilders: [
          "Personal framework or method",
          "Story-driven examples",
          "Audience transformation promise",
          "Proof of expertise or experience",
          "Newsletter or community CTA",
        ],
        outlineBlocks: {
          Informational: [
            "Why the topic matters now",
            "Core framework or mindset shift",
            "Common mistakes people make",
            "Step-by-step execution plan",
            "How to stay consistent",
          ],
          Commercial: [
            "Best approaches or systems",
            "Framework comparison",
            "What actually works in practice",
            "How to choose the right path",
            "Next-step recommendation",
          ],
          Transactional: [
            "What the offer helps achieve",
            "Who it is for",
            "Process or methodology",
            "Expected outcomes",
            "CTA to inquire or book",
          ],
          Navigational: [
            "Brand mission and positioning",
            "Core topics and expertise",
            "Featured resources",
            "Ways to work together",
            "CTA to connect",
          ],
        } as const,
      };

    default:
      return {
        articleTypeMap: {
          Informational: "Educational article",
          Navigational: "Landing page",
          Commercial: "Comparison page",
          Transactional: "Conversion page",
        } as const,
        painPoint: "The audience needs clarity and confidence before taking action.",
        contentAngle:
          "Create clear, intent-matched content that reduces friction and improves conversions.",
        buyerSignal:
          "The query shows interest, but the user still needs guidance and proof.",
        cta: "Use a CTA aligned with the page goal.",
        trustBuilders: ["Examples", "Proof", "Clear CTA"],
        outlineBlocks: {
          Informational: [
            "Overview",
            "How it works",
            "Examples",
            "Mistakes",
            "Next steps",
          ],
          Commercial: [
            "Options",
            "Comparison",
            "Pros and cons",
            "Fit",
            "Recommendation",
          ],
          Transactional: ["Offer", "Benefits", "Details", "Proof", "CTA"],
          Navigational: ["Overview", "Who it is for", "Details", "Resources", "CTA"],
        } as const,
      };
  }
}

function buildKeywordClusters(
  keyword: string,
  businessType: BusinessType,
  intent: SearchIntent
): KeywordClusterGroup[] {
  if (isWeakKeyword(keyword)) {
    return [
      {
        label: "Keyword Validation Needed",
        keywords: [normalize(keyword)],
        priority: "High Impact",
        usageTip:
          "This keyword appears too weak or low-signal. Refine it before expanding clusters.",
      },
    ];
  }

  const cleanKeyword = lower(keyword);
  const base = lower(getKeywordBase(keyword));
  const root = titleCase(cleanKeyword);
  const fullKeyword = cleanKeyword;
  const instructional = isInstructionalKeyword(keyword);

  if (instructional) {
    const instructionalVariants =
      businessType === "Personal Brand"
        ? dedupe([
            fullKeyword,
            `${base} guide`,
            `${base} framework`,
            `${base} checklist`,
            `${base} mistakes`,
            `${base} tips`,
            `${base} examples`,
          ])
        : dedupe([
            fullKeyword,
            `${base} guide`,
            `${base} examples`,
            `${base} checklist`,
            `${base} mistakes`,
            `${base} tips`,
          ]);

    return [
      {
        label: `${root} Core Cluster`,
        keywords: instructionalVariants.slice(0, 4),
        priority: "High Impact",
        usageTip:
          "Use these in the H1, intro, educational sections, and featured snippet blocks.",
      },
      {
        label: "Instructional Support",
        keywords: instructionalVariants.slice(4),
        priority: "Supporting",
        usageTip:
          "Use these in H2 sections, FAQs, examples, and checklist-style supporting blocks.",
      },
      {
        label: "Audience-Fit Variants",
        keywords:
          businessType === "Personal Brand"
            ? dedupe([
                `${base} on LinkedIn`,
                `${base} for beginners`,
                `${base} step by step`,
                `${base} without sounding fake`,
              ])
            : dedupe([
                `${base} for beginners`,
                `${base} step by step`,
                `${base} examples`,
                `${base} framework`,
              ]),
        priority: "Long-tail",
        usageTip:
          "Use these for supporting sections and long-tail subtopics around real user pain points.",
      },
    ];
  }

  const comparisonVariations =
    businessType === "SaaS"
      ? [`top ${base}`, `compare ${base}`, `${base} alternatives`]
      : businessType === "Ecommerce"
      ? intent === "Transactional"
        ? [`best ${base}`, `${base} reviews`, `${base} deals`]
        : [`top ${base}`, `compare ${base}`, `affordable ${base}`]
      : [`top ${base}`, `compare ${base}`, `${base} examples`];

  const supportVariations =
    businessType === "SaaS"
      ? [`${base} pricing`, `${base} features`, `${base} reviews`, `${base} use cases`]
      : businessType === "Ecommerce"
      ? [`${base} ingredients`, `${base} benefits`, `${base} reviews`, `${base} online store`]
      : [`${base} tips`, `${base} mistakes`, `${base} checklist`, `${base} guide`];

  const longTailVariations =
    businessType === "SaaS"
      ? [`${base} for startups`, `${base} for agencies`, `${base} for small teams`, `${base} for enterprise`]
      : businessType === "Ecommerce"
      ? [`${base} for sensitive skin`, `${base} for beginners`, `${base} for daily use`, `${base} under budget`]
      : [`${base} for beginners`, `${base} on linkedin`, `${base} on instagram`, `${base} without ads`];

  const coreKeywords =
    intent === "Transactional"
      ? dedupe([fullKeyword, `${base} online`, `${base} reviews`, `${base} benefits`])
      : dedupe([fullKeyword, `${base} guide`, `${base} strategy`, `${base} examples`]);

  return [
    {
      label: `${root} Core Cluster`,
      keywords: coreKeywords,
      priority: "High Impact",
      usageTip:
        "Use these in the main page, H1, introduction, and major H2 sections.",
    },
    {
      label: "Commercial Expansion",
      keywords: dedupe(comparisonVariations),
      priority: "Supporting",
      usageTip:
        "Use these in comparison sections, title variations, and internal links.",
    },
    {
      label: "Support Keywords",
      keywords: dedupe(supportVariations),
      priority: "Supporting",
      usageTip: "Use these in FAQ blocks, supporting sections, and detail-rich copy.",
    },
    {
      label: "Long-tail Intent Variants",
      keywords: dedupe(longTailVariations),
      priority: "Long-tail",
      usageTip:
        "Use these in FAQs, supporting sections, and secondary pages for niche intent.",
    },
  ];
}

function getStrategicWhyThisMatters(intent: SearchIntent): string {
  switch (intent) {
    case "Transactional":
      return "Because the intent is transactional, users are ready to take action. This strategy prioritizes trust signals, product clarity, and strong CTAs to reduce hesitation and drive immediate conversions.";
    case "Commercial":
      return "Because the intent is commercial, users are evaluating options. This strategy prioritizes comparison sections, feature breakdowns, and differentiation to help them choose confidently.";
    case "Informational":
      return "Because the intent is informational, users need clarity before they act. This strategy prioritizes educational structure, clear explanations, and useful depth that can attract traffic and build trust.";
    case "Navigational":
      return "Because the intent is navigational, users already know what they want. This strategy prioritizes direct access, brand clarity, and minimal friction.";
    default:
      return "This strategy is aligned to the keyword's likely user intent.";
  }
}

function getDominantContentType(
  intent: SearchIntent,
  businessType: BusinessType
): string {
  if (intent === "Commercial") {
    return businessType === "SaaS"
      ? "Comparison roundups and tool review pages"
      : businessType === "Ecommerce"
      ? "Product comparison listicles and category pages"
      : "Framework articles and expert comparison posts";
  }

  if (intent === "Transactional") {
    return businessType === "SaaS"
      ? "Product-led landing pages and trial pages"
      : businessType === "Ecommerce"
      ? "Product and category purchase pages"
      : "Offer pages and conversion-led landing pages";
  }

  if (intent === "Informational") {
    if (businessType === "Personal Brand") {
      return "Guides, creator playbooks, framework articles, and educational explainers";
    }
    return "Guides, blog posts, and educational explainers";
  }

  return "Brand pages, official pages, and navigational hubs";
}

function getCompetitionLevel(
  intent: SearchIntent,
  keyword: string,
  businessType: BusinessType
): CompetitionLevel {
  const k = lower(keyword);
  let score = 0;

  if (intent === "Commercial" || intent === "Transactional") score += 2;
  if (intent === "Informational" && isInstructionalKeyword(keyword)) score += 1;
  if (includesAny(k, ["best", "top", "buy", "software", "online"])) score += 1;
  if (businessType === "SaaS") score += 1;
  if (
    businessType === "Personal Brand" &&
    includesAny(k, ["linkedin", "personal brand"])
  ) {
    score += 1;
  }
  if (keyword.split(" ").length >= 4) score += 1;

  if (score >= 4) return "High";
  if (score >= 2) return "Medium";
  return "Low";
}

function estimateTopPageAverageScore(
  intent: SearchIntent,
  competitionLevel: CompetitionLevel
): number {
  let base =
    intent === "Commercial"
      ? 7.8
      : intent === "Transactional"
      ? 7.4
      : intent === "Informational"
      ? 7.2
      : 6.9;

  if (competitionLevel === "High") base += 0.7;
  if (competitionLevel === "Low") base -= 0.5;

  return Number(Math.min(9.4, Math.max(6.2, base)).toFixed(1));
}

function buildSerpSimulation(
  input: SeoInput,
  intent: SearchIntent,
  articleType: string
): SerpSimulationResult {
  const keyword = normalize(input.keyword);
  const keywordBase = getKeywordBase(keyword);
  const competitionLevel = getCompetitionLevel(intent, keyword, input.businessType);
  const dominantContentType = getDominantContentType(intent, input.businessType);
  const estimatedTopPageAverageScore = estimateTopPageAverageScore(
    intent,
    competitionLevel
  );

  const topRankingPatterns =
    input.businessType === "SaaS"
      ? [
          "Pages compare multiple tools directly",
          "High-ranking pages explain features and outcomes together",
          "Best pages use product visuals, comparison tables, and clear CTAs",
        ]
      : input.businessType === "Ecommerce"
      ? [
          "Pages lead with buyer trust and product clarity",
          "High-ranking pages reduce hesitation with reviews and shipping details",
          "Best pages combine comparison with strong shopping intent signals",
        ]
      : intent === "Informational"
      ? [
          "Pages teach a clear step-by-step framework",
          "High-ranking pages feel practical, creator-led, and example-rich",
          "Best pages combine education, credibility, and action planning",
        ]
      : [
          "Pages build authority through frameworks and examples",
          "High-ranking pages feel experience-backed, not generic",
          "Best pages connect education to a clear personal-brand CTA",
        ];

  const rankingBarriers =
    intent === "Transactional"
      ? [
          "Purchase-intent SERPs are highly conversion-focused",
          "Many top pages are optimized to convert, not just inform",
          "Competing pages may already have stronger trust signals",
        ]
      : intent === "Commercial"
      ? [
          "Comparison SERPs are crowded with listicles and roundups",
          "Many pages target the same modifiers like best, top, and compare",
          "Generic content gets buried unless it is more specific and more useful",
        ]
      : intent === "Informational"
      ? [
          "Educational SERPs reward depth, clarity, and structure",
          "Thin content loses visibility fast",
          "Snippet-friendly formatting matters more here",
        ]
      : [
          "Navigational SERPs favor strong brand relevance",
          "Users expect direct answers quickly",
          "Weak page clarity lowers usefulness fast",
        ];

  const fastWinOpportunities =
    input.businessType === "SaaS"
      ? [
          `Segment ${keywordBase} by use case instead of staying generic`,
          "Use a strong comparison table with clearer decision criteria",
          "Highlight proof like ATS fit, speed, ROI, or onboarding ease",
        ]
      : input.businessType === "Ecommerce"
      ? [
          `Add stronger trust elements around ${keywordBase}`,
          "Use comparison plus quality proof together",
          "Reduce purchase hesitation with reviews, return policy, and fit guidance",
        ]
      : intent === "Informational"
      ? [
          `Teach ${keywordBase} through a clearer framework`,
          "Use examples, mistakes, and a step-by-step action plan",
          "Turn educational value into authority without making the page feel salesy",
        ]
      : [
          `Teach ${keywordBase} through a clearer framework`,
          "Use authority-building examples instead of vague inspiration",
          "Move readers from learning to action with a visible next step",
        ];

  return {
    dominantContentType,
    competitionLevel,
    estimatedTopPageAverageScore,
    topRankingPatterns,
    rankingBarriers,
    fastWinOpportunities,
    simulationSummary: `For "${keyword}", the SERP is most likely dominated by ${dominantContentType.toLowerCase()}. Your best entry point is a ${articleType.toLowerCase()} that is more specific, more actionable, and more conversion-aware than generic competitors.`,
  };
}

function buildCompetitorScoring(
  input: SeoInput,
  intent: SearchIntent,
  serpSimulation: SerpSimulationResult
): CompetitorScoreCard[] {
  const keywordBase = getKeywordBase(input.keyword);

  const competitorA: CompetitorScoreCard = {
    competitorLabel: "Generic Listicle Competitor",
    estimatedScore: serpSimulation.competitionLevel === "High" ? 78 : 72,
    strongestAdvantage: "Broad keyword coverage and familiar round-up structure",
    likelyWeakness:
      "Often generic, repetitive, and weak on audience-specific positioning",
    outrankOpportunity: `Create a more targeted page around ${keywordBase} with better decision support and more specific proof.`,
  };

  const competitorB: CompetitorScoreCard = {
    competitorLabel: "Feature-Heavy Competitor",
    estimatedScore:
      intent === "Commercial" || intent === "Transactional" ? 81 : 73,
    strongestAdvantage: "Strong detail depth and product-focused sections",
    likelyWeakness:
      "Can feel dense, overwhelming, or too focused on features instead of outcomes",
    outrankOpportunity:
      "Translate features into benefits, buyer fit, and clearer conversion flow.",
  };

  const competitorC: CompetitorScoreCard = {
    competitorLabel: "SEO-Optimized but Shallow Competitor",
    estimatedScore: intent === "Informational" ? 74 : 76,
    strongestAdvantage: "Good title targeting and strong surface-level SEO formatting",
    likelyWeakness:
      "Weak originality, low differentiation, and low persuasive depth",
    outrankOpportunity:
      "Use stronger insights, clearer structure, and better trust-building layers.",
  };

  return [competitorA, competitorB, competitorC];
}

function calculateDynamicPercentile(
  overallScore: number,
  competitorScoring: CompetitorScoreCard[],
  serpSimulation: SerpSimulationResult,
  notes: string,
  platform: string
): number {
  const avgCompetitor =
    competitorScoring.reduce((sum, item) => sum + item.estimatedScore, 0) /
    competitorScoring.length;

  let percentile = 50 + (overallScore - avgCompetitor) * 2.2;

  if (serpSimulation.competitionLevel === "High") percentile -= 4;
  if (serpSimulation.competitionLevel === "Low") percentile += 4;
  if (notes) percentile += 5;
  if (platform) percentile += 2;

  return clampPercent(percentile);
}

function buildNaturalTitlePrefix(
  intent: SearchIntent,
  keyword: string,
  keywordBase: string
): string {
  if (isInstructionalKeyword(keyword)) {
    return titleCase(keyword);
  }

  if (startsWithCommercialModifier(keyword)) {
    return titleCase(keyword);
  }

  if (startsWithTransactionalModifier(keyword)) {
    return titleCase(keyword);
  }

  if (intent === "Commercial") {
    return `Best ${titleCase(keywordBase)}`;
  }

  return titleCase(keywordBase);
}

function buildCtaStrategy(
  businessType: BusinessType,
  goal: string,
  keywordBase: string
): string {
  if (isWeakKeyword(keywordBase)) {
    return "Refine the keyword first before creating conversion-focused CTAs.";
  }

  if (businessType === "SaaS") {
    return goal
      ? `Guide readers toward ${goal.toLowerCase()} with clear product CTAs like “Start free trial”, “Book a demo”, or “Try ${titleCase(keywordBase)} now”.`
      : `Guide readers toward action with product CTAs like “Start free trial”, “Book a demo”, or “Try ${titleCase(keywordBase)} now”.`;
  }

  if (businessType === "Ecommerce") {
    return goal
      ? `Use purchase-focused CTAs to support ${goal.toLowerCase()}, such as “Shop now”, “Add to cart”, and “Explore ${titleCase(keywordBase)}”.`
      : `Use purchase-focused CTAs like “Shop now”, “Add to cart”, and “Explore ${titleCase(keywordBase)}”.`;
  }

  return goal
    ? `Use authority-building CTAs to support ${goal.toLowerCase()}, such as “Subscribe”, “Get the guide”, or “Book a strategy call”.`
    : `Use authority-building CTAs like “Subscribe”, “Get the guide”, or “Book a strategy call”.`;
}

function buildPlatformAdaptation(input: SeoInput): PlatformAdaptationResult {
  const platform = lower(input.platform);

  if (platform.includes("linkedin")) {
    return {
      platform: input.platform || "LinkedIn",
      formattingStyle:
        "Short paragraphs, hook-led opening, authority-building close.",
      ctaStyle: "Follow / connect / comment CTA",
      contentAdjustments: [
        "Use shorter blocks of text",
        "Front-load hook and insight",
        "End with engagement-driven CTA",
      ],
    };
  }

  if (platform.includes("medium")) {
    return {
      platform: input.platform || "Medium",
      formattingStyle: "Narrative, readable, insight-driven article flow.",
      ctaStyle: "Soft authority CTA",
      contentAdjustments: [
        "Use smoother narrative transitions",
        "Reduce overtly salesy sections",
        "Keep a thought-leadership tone",
      ],
    };
  }

  return {
    platform: input.platform || "Blog / Website",
    formattingStyle:
      "Structured SEO article with clear headings and conversion sections.",
    ctaStyle: "Goal-aligned conversion CTA",
    contentAdjustments: [
      "Use keyword-rich H2 structure",
      "Keep snippet-friendly answers",
      "Place CTA at high-intent sections",
    ],
  };
}
function buildPerformance(
  input: SeoInput,
  intent: SearchIntent
): PerformanceResult {
  const looksWeakKeyword = isWeakKeyword(input.keyword);

  let rankingPotential: "Low" | "Medium" | "High";
  let trafficPotential: "Low" | "Medium" | "High";
  let conversionPotential: "Low" | "Medium" | "High";
  let snippetProbability: "Low" | "Medium" | "High";

  if (looksWeakKeyword) {
    rankingPotential = "Low";
    trafficPotential = "Low";
    conversionPotential = "Low";
    snippetProbability = "Low";
  } else {
    rankingPotential =
      intent === "Commercial" || intent === "Transactional"
        ? "High"
        : "Medium";

    trafficPotential =
  intent === "Informational" || intent === "Commercial"
    ? "High"
    : "Medium";

    conversionPotential =
      intent === "Transactional"
        ? "High"
        : intent === "Commercial"
        ? "High"
        : "Medium";

    snippetProbability = intent === "Informational" ? "High" : "Low";
  }

  return {
    rankingPotential,
    trafficPotential,
    conversionPotential,
    snippetProbability,
    whyThisMatters: looksWeakKeyword
      ? "The input keyword appears too vague or low-signal, so projected ranking, traffic, snippet, and conversion outcomes are conservative."
      : "Projected performance reflects keyword quality, intent type, and business context so the forecast feels more realistic and actionable.",
  };
}
function buildDynamicArticleType(
  input: SeoInput,
  searchIntent: SearchIntent,
  baseArticleType: string
): string {
  if (
    input.businessType === "Personal Brand" &&
    searchIntent === "Informational"
  ) {
    return "Educational guide or framework article";
  }

  return baseArticleType;
}

function buildDynamicOutline(
  input: SeoInput,
  searchIntent: SearchIntent,
  fallbackOutline: readonly string[]
): string[] {
  const keywordLower = lower(input.keyword);

  if (
    input.businessType === "Personal Brand" &&
    searchIntent === "Informational"
  ) {
    if (includesAny(keywordLower, ["linkedin", "personal brand"])) {
      return [
        "Define your positioning on LinkedIn",
        "Optimize your profile for credibility",
        "Choose your content pillars",
        "Build consistency through storytelling",
        "Grow visibility through engagement",
        "Mistakes to avoid",
        "30-day action plan",
      ];
    }

    return [
      "Define your positioning",
      "Clarify your message and audience",
      "Build content pillars",
      "Create consistency",
      "Grow visibility through engagement",
      "Mistakes to avoid",
      "Action plan",
    ];
  }

  return [...fallbackOutline];
}

function buildDynamicTitles(
  input: SeoInput,
  searchIntent: SearchIntent,
  keyword: string,
  keywordBase: string,
  naturalTitleBase: string
): string[] {
  if (isWeakKeyword(keyword)) {
    return [
      "Refine the keyword before generating SEO titles",
      "Use a clearer, higher-signal keyword",
      "Improve keyword specificity for better strategy output",
    ];
  }

  if (
    input.businessType === "Personal Brand" &&
    searchIntent === "Informational"
  ) {
    if (includesAny(lower(keyword), ["linkedin", "personal brand"])) {
      return [
        "How to Build a Personal Brand on LinkedIn: A Step-by-Step Guide",
        "Personal Branding on LinkedIn: A Practical Framework for Growth",
        "How to Grow Your Personal Brand on LinkedIn Without Feeling Fake",
      ];
    }

    return [
      `How to ${titleCase(keywordBase)}: A Step-by-Step Guide`,
      `${titleCase(keywordBase)}: A Practical Framework`,
      `${titleCase(keywordBase)}: Mistakes, Examples, and Next Steps`,
    ];
  }

  if (input.businessType === "SaaS") {
    return [
      `${naturalTitleBase}: Top Solutions Compared`,
      `${titleCase(keywordBase)}: How to Choose the Right Tool`,
      `${titleCase(keywordBase)} for Teams: Features, Pricing, and Fit`,
    ];
  }

  if (input.businessType === "Ecommerce") {
    return searchIntent === "Transactional"
      ? [
          `${titleCase(keyword)}: A Smart Buyer’s Guide`,
          `${titleCase(keywordBase)}: What to Buy and Why`,
          `${titleCase(keywordBase)} Online: Benefits, Reviews, and Buying Tips`,
        ]
      : [
          `${naturalTitleBase}: What to Buy and Why`,
          `${titleCase(keywordBase)} Buying Guide`,
          `${titleCase(keywordBase)}: Top Picks, Benefits, and How to Choose`,
        ];
  }

  return [
    `${titleCase(keywordBase)}: A Practical Personal Brand Framework`,
    `How to Master ${titleCase(keywordBase)}`,
    `${titleCase(keywordBase)}: Strategy, Mistakes, and Next Steps`,
  ];
}

function buildBlogDraft(
  input: SeoInput,
  blueprint: BlueprintResult,
  intent: IntentResult
): BlogDraftResult {
  const audienceText = normalize(input.audience) || "the target audience";
  const goalText = normalize(input.goal) || "the next logical action";
  const platformText = normalize(input.platform) || "the target platform";
  const keywordText = normalize(input.keyword);

  const intro = `If you want to win for "${keywordText}", you need content that matches ${intent.searchIntent.toLowerCase()} intent, speaks to ${audienceText}, and guides them toward ${goalText}.`;

  const sectionTemplates = [
    (heading: string) =>
      `${heading} should help the reader understand the topic more clearly, connect it to real use cases, and move toward the next logical action for ${input.businessType}.`,
    (heading: string) =>
      `A strong section on ${heading.toLowerCase()} should reduce confusion, clarify what matters most, and show how this topic applies in a practical ${input.businessType} context.`,
    (heading: string) =>
      `${heading} should make the article feel more useful by connecting strategy, real-world application, and decision-making in a way that supports ${input.businessType} goals.`,
    (heading: string) =>
      `This section should turn ${heading.toLowerCase()} into something concrete, relevant, and easier to act on for readers evaluating ${keywordText}.`,
  ];

  const sections = blueprint.outline.h2.map((heading, index) => ({
    heading,
    content: sectionTemplates[index % sectionTemplates.length](heading),
  }));

  const faq = [
    `What is the best approach for ${keywordText}?`,
    `How does ${input.businessType} change the strategy for ${keywordText}?`,
    `What should I optimize first for ${platformText}?`,
  ];

  const ctaBlock =
    input.businessType === "SaaS"
      ? "Start your free trial and see how this workflow improves results faster."
      : input.businessType === "Ecommerce"
      ? "Explore the collection and choose the best-fit product for your needs."
      : "Follow for more insights, subscribe to the newsletter, or book a strategy session.";

  return {
    intro,
    sections,
    faq,
    ctaBlock,
  };
}

/* -------------------- main function -------------------- */

export function generateSeoAnalysis(input: SeoInput): SeoAnalysisResult {
  const keyword = normalize(input.keyword);
  const keywordLower = lower(input.keyword);
  const goal = normalize(input.goal);
  const notes = normalize(input.notes);
  const platform = normalize(input.platform);
  const product = normalize(input.product);
  const rawTone = normalize(input.tone);
  const tone = sanitizeTone(rawTone, goal);
  const audience = normalize(input.audience);
  const keywordBase = getKeywordBase(keyword);
  const instructionalKeyword = isInstructionalKeyword(keyword);
  const weakKeyword = isWeakKeyword(keyword);

  const searchIntent = detectIntent(keyword);
  const performance = buildPerformance(input, searchIntent);
  const funnelStage = detectFunnelStage(searchIntent);
  const businessContext = getBusinessContext(input);
  const platformAdaptation = buildPlatformAdaptation(input);
  const articleType = buildDynamicArticleType(
    input,
    searchIntent,
    businessContext.articleTypeMap[searchIntent]
  );

  const hasComparisonIntent = includesAny(keywordLower, [
    "best",
    "top",
    "vs",
    "compare",
    "alternatives",
    "tools",
    "software",
  ]);

  const hasPurchaseIntent = includesAny(keywordLower, [
    "buy",
    "price",
    "pricing",
    "shop",
    "order",
    "coupon",
    "discount",
    "online",
    "trial",
    "demo",
  ]);

  const hasLearningIntent =
    instructionalKeyword ||
    includesAny(keywordLower, [
      "how",
      "what",
      "why",
      "guide",
      "tips",
      "learn",
      "build",
    ]);

  const intentConfidenceScore = weakKeyword
    ? 25
    : searchIntent === "Transactional"
    ? 95
    : searchIntent === "Commercial"
    ? 90
    : searchIntent === "Informational"
    ? instructionalKeyword
      ? 92
      : 85
    : 70;

  const intent: IntentResult = {
    searchIntent,
    funnelStage,
    painPoint: businessContext.painPoint,
    contentAngle: `${businessContext.contentAngle} Target keyword: "${keyword}". ${
      notes ? `Account for notes: ${notes}.` : ""
    }`.trim(),
    buyerSignal: businessContext.buyerSignal,
    intentConfidenceScore,
    whyThisMatters: getStrategicWhyThisMatters(searchIntent),
  };

  const keywordClusters = buildKeywordClusters(
    keyword,
    input.businessType,
    searchIntent
  );

  const serpGap: SerpGapResult = {
    commonPatterns:
      input.businessType === "SaaS"
        ? [
            "SERPs are often dominated by comparison posts and vendor roundups.",
            "Many pages explain features but under-explain workflow outcomes.",
            "A lot of content stays broad instead of segmenting by use case.",
          ]
        : input.businessType === "Ecommerce"
        ? [
            "SERPs often prioritize product pages, listicles, and category pages.",
            "Many pages lean on generic benefit claims without enough proof.",
            "A lot of content underuses trust signals and buyer reassurance.",
          ]
        : [
            "SERPs often include educational guides and opinion-led articles.",
            "Many pages sound generic and repeat common advice.",
            "A lot of content lacks strong frameworks or memorable differentiation.",
          ],
    contentGaps:
      input.businessType === "SaaS"
        ? [
            "Missing workflow-specific use cases",
            "Weak proof of ROI or operational benefit",
            "Not enough segmentation by buyer type",
          ]
        : input.businessType === "Ecommerce"
        ? [
            "Weak trust-building detail",
            "Not enough fit guidance for different buyer needs",
            "Thin proof around ingredients, quality, or outcomes",
          ]
        : [
            "Weak creator-specific examples",
            "Too little step-by-step execution depth",
            "Not enough authority-building perspective",
          ],
    missedAngles: [
      audience
        ? `Content tailored specifically for ${audience}`
        : "Sharper audience-specific positioning",
      product
        ? `Stronger connection to ${product}`
        : "Stronger product or offer connection",
      notes
        ? `Notes-driven differentiation: ${notes}`
        : "Deeper differentiation based on brand-specific context",
    ],
    outrankStrategy: [
      "Match the dominant SERP format but add clearer decision support.",
      "Make the page more specific, more actionable, and less generic than competing content.",
      "Use stronger structure, trust builders, and conversion logic based on intent.",
    ],
    competitorWeaknessSimulation:
      input.businessType === "SaaS"
        ? [
            "Competitors often explain features but not workflow outcomes.",
            "Many listicles stay broad and fail to segment by use case.",
          ]
        : input.businessType === "Ecommerce"
        ? [
            "Competitors often over-focus on benefits and under-deliver on proof.",
            "Many pages do not reduce hesitation clearly enough.",
          ]
        : [
            "Competitors often repeat familiar advice without distinctive insight.",
            "Many pages lack a memorable framework or practical depth.",
          ],
    whyThisMatters:
      "SERP gap analysis prevents generic SEO output. It identifies where common pages are weak so this strategy can become more specific, more useful, and easier to rank.",
  };

  const strategy: StrategyResult = {
    articleType,
    positioning:
      input.businessType === "SaaS"
        ? `Position this as a solution-aware page that helps users evaluate ${keywordBase} through outcomes, proof, and fit.`
        : input.businessType === "Ecommerce"
        ? `Position this as a buyer-confidence page that helps users choose the right ${keywordBase} with less hesitation.`
        : `Position this as an authority-building page that teaches ${keywordBase} with clarity, practicality, and a stronger point of view.`,
    toneStrategy: tone
      ? `Use a ${tone} tone while staying clear, persuasive, and intent-aligned.`
      : "Use a clear, persuasive, and intent-aligned tone that feels specific rather than generic.",
    ctaStrategy: buildCtaStrategy(input.businessType, goal, keywordBase),
    trustBuilders: businessContext.trustBuilders,
    outrankPlan: [
      "Use tighter intent match than generic competitors.",
      "Add more audience-fit specificity and stronger decision support.",
      "Create clearer structure for both ranking and conversion flow.",
    ],
    whyThisMatters:
      "Strategy should not be static. It must change based on search intent, business model, and the kind of conversion path this keyword supports.",
  };

  const titlePrefix = buildNaturalTitlePrefix(
    searchIntent,
    keyword,
    keywordBase
  );

  const blueprint: BlueprintResult = {
    titles: dedupe(
      buildDynamicTitles(
        input,
        searchIntent,
        keyword,
        keywordBase,
        titlePrefix
      )
    ),
    metaTitle:
      searchIntent === "Transactional"
        ? `${titlePrefix} | Buy, Compare, and Choose Better`
        : searchIntent === "Commercial"
        ? `${titlePrefix} | Best Options, Comparisons, and Insights`
        : `${titlePrefix} | Guide, Tips, and Strategy`,
    metaDescription:
      input.businessType === "SaaS"
        ? `Discover a smarter approach to ${keywordBase} with clearer comparisons, stronger proof, and a better-fit decision process.`
        : input.businessType === "Ecommerce"
        ? `Explore ${keywordBase} with clearer buying guidance, trust signals, and better-fit recommendations.`
        : `Learn ${keywordBase} through a clearer framework, stronger examples, and more actionable insights.`,
    featuredSnippet:
      searchIntent === "Informational"
        ? `${titleCase(keyword)} is best approached through a clear framework, practical execution steps, and audience-aware strategy.`
        : `${titleCase(keyword)} works best when the page combines clarity, proof, and a strong next-step CTA.`,
    outline: {
      h1: titlePrefix,
      h2: businessContext.outlineBlocks[searchIntent].map((item) => item),
      h3: [
        audience
          ? `What matters most for ${audience}`
          : "What matters most for the target audience",
        product
          ? `How ${product} fits into the decision`
          : "How the product or offer fits into the decision",
        platform
          ? `How to adapt the content for ${platform}`
          : "How to adapt the content to the platform",
        goal
          ? `How this page supports the goal: ${goal}`
          : "How this page supports business goals",
        notes
          ? `Notes-driven differentiation: ${notes}`
          : "Differentiation opportunities competitors miss",
      ],
    },
    ctaPlacementMarkers:
      input.businessType === "SaaS"
        ? [
            "After the comparison section",
            "After the pricing or fit explanation",
            "Bottom-of-page demo or trial block",
          ]
        : input.businessType === "Ecommerce"
        ? [
            "After the benefits and fit section",
            "Near reviews and trust proof",
            "Bottom-of-page purchase CTA",
          ]
        : searchIntent === "Informational"
        ? [
            "After the framework section",
            "After the examples or mistakes section",
            "Bottom-of-page subscribe or resource CTA",
          ]
        : [
            "After the framework section",
            "After the personal proof or story section",
            "Bottom-of-page subscribe or consultation CTA",
          ],
    whyThisMatters: `The blueprint changes because "${keyword}" should not generate the same structure for SaaS, Ecommerce, and Personal Brand. The architecture must reflect intent and business model.`,
  };

  const intentMatchScore = clampScore(
    7 +
      (intentConfidenceScore >= 90 ? 2 : 1) +
      (goal ? 1 : 0) +
      (platform ? 1 : 0),
    1,
    10
  );

  const differentiationScore = clampScore(
    5 +
      (notes ? 2 : 0) +
      (audience ? 1 : 0) +
      (product ? 1 : 0) +
      (platform ? 1 : 0),
    1,
    10
  );

  const conversionReadinessScore = clampScore(
    4 +
      (searchIntent === "Transactional" ? 3 : 0) +
      (searchIntent === "Commercial" ? 2 : 0) +
      (input.businessType === "SaaS" ? 1 : 0) +
      (goal ? 1 : 0),
    1,
    10
  );

  const serpFitScore = clampScore(
    5 +
      (hasComparisonIntent ? 2 : 0) +
      (hasPurchaseIntent ? 2 : 0) +
      (hasLearningIntent ? 1 : 0) +
      (notes ? 1 : 0),
    1,
    10
  );

  const scoring: ScoringResult = {
    scores: [
      {
        label: "Intent Match",
        score: intentMatchScore,
        reason: `The strategy is aligned to "${keyword}" and shaped by ${searchIntent} intent.`,
      },
      {
        label: "Differentiation Strength",
        score: differentiationScore,
        reason: notes
          ? "The notes, audience context, and positioning create stronger uniqueness than a generic SEO template."
          : "Differentiation exists, but richer notes and sharper positioning would strengthen it further.",
      },
      {
        label: "Conversion Readiness",
        score: conversionReadinessScore,
        reason: `The CTA logic is adapted for ${input.businessType} instead of using the same conversion pattern for every query.`,
      },
      {
        label: "SERP Fit",
        score: serpFitScore,
        reason:
          "The article type, structure, and keyword treatment match how this keyword is likely searched and evaluated.",
      },
    ],
    overallScore: 0,
    percentileStrength: 0,
    scoreSummary: "",
  };

  const serpSimulation = buildSerpSimulation(input, searchIntent, articleType);
  const competitorScoring = buildCompetitorScoring(
    input,
    searchIntent,
    serpSimulation
  );

const rawOverallScore =
  (intentMatchScore +
    differentiationScore +
    conversionReadinessScore +
    serpFitScore) /
  4;

let overallScore = Number(rawOverallScore.toFixed(1));

// small quality boosts
if (searchIntent === "Commercial") overallScore += 0.4;
if (platform) overallScore += 0.2;
if (notes) overallScore += 0.3;
if (input.businessType === "SaaS") overallScore += 0.2;

overallScore = Number(Math.min(9.6, overallScore).toFixed(1));

let percentileStrength = Math.round(overallScore * 10 + 8);

if (searchIntent === "Commercial") percentileStrength += 5;
if (searchIntent === "Transactional") percentileStrength += 3;
if (serpSimulation.competitionLevel === "High") percentileStrength -= 4;
if (serpSimulation.competitionLevel === "Low") percentileStrength += 2;

percentileStrength = Math.max(15, Math.min(96, percentileStrength));

scoring.overallScore = overallScore;
scoring.percentileStrength = percentileStrength;
scoring.scoreSummary = `This strategy scores ${overallScore}/10 overall and is stronger than approximately ${percentileStrength}% of typical SEO pages targeting this keyword.`;

  const decisionTrace: DecisionTraceItem[] = [
    {
      title: "Keyword Input",
      detail: `Primary keyword received: "${keyword}".`,
    },
    {
      title: "Intent Classification",
      detail: `Detected ${searchIntent} intent with ${funnelStage} funnel placement based on query modifiers and phrasing.`,
    },
    {
      title: "Business Type Mapping",
      detail: `${input.businessType} changed the article type, CTA pattern, trust builders, and content structure.`,
    },
    {
      title: "Goal Alignment",
      detail: goal
        ? `The strategy is shaped to support the stated goal: ${goal}.`
        : "No explicit goal was provided, so the strategy uses a general conversion path.",
    },
    {
      title: "Platform Adaptation",
      detail: platform
        ? `The content structure was adjusted for ${platform}.`
        : "The content defaults to a standard blog / website structure.",
    },
  ];

  const blogDraft = buildBlogDraft(input, blueprint, intent);

  return {
    intent,
    keywordClusters,
    serpGap,
    strategy,
    blueprint,
    scoring,
    performance,
    serpSimulation,
    competitorScoring,
    decisionTrace,
    blogDraft,
    platformAdaptation,
  };
}