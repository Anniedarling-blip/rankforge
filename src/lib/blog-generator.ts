import { SeoAnalysisResult, SeoInput } from "@/types/seo";

interface BlogTemplateInput {
  title: string;
  primaryKeyword: string;
  audience: string;
  tone: string;
  platform: string;
  businessType: SeoInput["businessType"];
  strategy: SeoAnalysisResult["strategy"];
  blueprint: SeoAnalysisResult["blueprint"];
  countryNote?: string;
}

interface BlogSection {
  heading: string;
  content: string;
}

function getSafePlatformLabel(platform?: string): string {
  const clean = (platform ?? "").trim();
  return clean.length > 0 ? clean : "Blog / Website";
}

export function buildBlogMarkdown(input: BlogTemplateInput): {
  markdown: string;
  metaTitle: string;
  metaDescription: string;
} {
  const h2s = input.blueprint?.outline?.h2 ?? [];
  const safePlatform = getSafePlatformLabel(input.platform);

  const metaTitle = `${input.title} | SEO-Optimized Guide`;
  const metaDescription = `Discover ${input.primaryKeyword} with a ranking-focused blog structure, featured snippet sections, FAQs, CTA blocks, and platform-ready formatting.`;

  // ✅ IMPROVED (depth + variation + no repetition)
  const sectionTemplates: Array<(heading: string) => string> = [
  (heading: string) =>
    `${heading} improves ranking potential by aligning the page with search intent, stronger structure, and clearer conversion flow around ${input.primaryKeyword}. This ensures the content is not only discoverable but also useful for readers evaluating solutions.

In practice, this means structuring the section with clear comparisons, real use cases, and decision-support insights so users can move forward confidently.`,

  (heading: string) =>
    `Exploring ${heading.toLowerCase()} through real use cases and clearer positioning makes the content more actionable and helps readers evaluate options effectively.

A well-developed section here should reduce confusion, highlight priorities, and guide the reader toward making a confident decision.`,

  (heading: string) =>
    `${heading} strengthens the article by turning broad ideas into structured, practical guidance that improves SEO readiness and engagement.

This also increases dwell time and readability, which are key signals for both search engines and AI-driven answer systems.`,

  (heading: string) =>
    `A high-performing section on ${heading.toLowerCase()} must connect strategy to outcomes, ensuring the content feels credible and complete.

Adding clarity, examples, and structured explanation here helps differentiate this page from generic competitor content.`,

  (heading: string) =>
    `${heading} adds depth by translating general concepts into practical insights and stronger differentiation.

This makes the content more valuable, more memorable, and more likely to convert compared to surface-level articles.`,
];
  const sections: BlogSection[] = h2s.map((heading: string, index: number) => ({
    heading,
    content: sectionTemplates[index % sectionTemplates.length](heading),
  }));

  const renderedSections =
    sections.length > 0
      ? sections
          .map((section, index) => {
            const supportingH3 =
              index === 0
                ? `How "${input.primaryKeyword}" aligns with user intent`
                : index === 1
                ? "What the reader actually needs to evaluate"
                : index === 2
                ? `How to adapt this for ${safePlatform}`
                : index === 3
                ? "How this supports business outcomes"
                : "Opportunities competitors are missing";

            const subsectionTemplates = [
              () =>
                `This subsection explains why "${input.primaryKeyword}" benefits from a structured, intent-driven approach and how that improves clarity, ranking potential, and decision-making.`,

              () =>
                `Here, "${input.primaryKeyword}" is connected to real user intent, showing how better positioning improves both discoverability and conversion performance.`,

              () =>
                `This part highlights how "${input.primaryKeyword}" should be structured to maximize visibility, usability, and strategic impact across the funnel.`,

              () =>
                `This subsection focuses on making "${input.primaryKeyword}" actionable by aligning it with user needs, business goals, and practical execution.`,

              () =>
                `This section reinforces how strong positioning and structure around "${input.primaryKeyword}" can outperform generic competitor content.`,
            ];

            const subsection =
              subsectionTemplates[index % subsectionTemplates.length]();

            return `## ${section.heading}

${section.content}

### ${supportingH3}

${subsection}`;
          })
          .join("\n\n")
      : `## Core Strategy Overview

${input.primaryKeyword} requires a content structure that aligns search intent, SEO opportunity, and conversion flow. A strong blog should guide the reader clearly while improving discoverability and engagement.

### How "${input.primaryKeyword}" aligns with user intent

This subsection explains why "${input.primaryKeyword}" needs a structured, strategy-first approach to improve clarity, ranking strength, and conversion outcomes.`;

  const markdown = `# ${input.title}

**Meta Title:** ${metaTitle}  
**Meta Description:** ${metaDescription}

## Featured Snippet

${input.primaryKeyword} performs best when the content combines clear intent alignment, strong structure, comparison logic, and conversion-focused CTA placement.

## Introduction

If you want to rank for **${input.primaryKeyword}**, you need more than fast writing. You need structure, relevance, differentiation, and a content flow that moves the reader from awareness to action. This blog is designed for **${input.audience}** and written in a **${input.tone}** tone.

## Why This Topic Matters

Most AI blog tools generate content quickly, but ranking and conversion require strategic alignment. This includes intent mapping, SERP gap identification, structured validation, and platform-ready formatting.

${renderedSections}

## Why Blogy Stands Out

Blogy is a strategy-first blog automation solution. Instead of generating content blindly, it builds structured, validated, and conversion-ready blog assets.

### Key Benefits
- faster content production
- stronger SEO structure
- better CTA alignment
- platform adaptation support
- conversion-ready publishing workflow

## Comparison: Blogy vs Generic AI Writing Tools

| Feature | Blogy | Generic AI Tool |
|---|---|---|
| Intent Mapping | Yes | Usually weak |
| SERP Gap Logic | Yes | Rare |
| SEO Validation | Yes | Often missing |
| Platform Adaptation | Yes | Limited |
| Conversion Focus | Strong | Inconsistent |

## Internal Linking Suggestions

- Link to related comparison posts
- Link to product or landing pages
- Link to pricing or demo pages
- Link to educational SEO resources

## FAQ

### What makes ${input.primaryKeyword} important?
It combines ranking opportunity with strong strategic value for organic growth.

### How is Blogy different from standard AI tools?
Blogy operates as a strategy-first engine, not just a content generator.

### Can this improve SEO performance?
Yes. It improves structure, snippet-readiness, keyword coverage, and conversion flow.

### Is this optimized for AI answer engines?
Yes. Structured answers and snippet blocks improve AI compatibility.

### How should this be adapted for different platforms?
Formatting, CTA style, and tone should adjust based on platform expectations.

## Conclusion

To win with **${input.primaryKeyword}**, the goal is not just speed. The goal is structured, optimized, and conversion-ready content.

## CTA

Try **Blogy** to transform raw keywords into strategy-driven, validated, and publish-ready blog assets.
`;

  return {
    markdown,
    metaTitle,
    metaDescription,
  };
}

export function buildMandatoryBlogs(
  seoInput: SeoInput,
  analysis: SeoAnalysisResult
) {
  const blogConfigs = [
    {
      id: "blogy-india-tool",
      title: "Blogy – Best AI Blog Automation Tool in India",
      primaryKeyword: "Best AI Blog Automation Tool in India",
    },
    {
      id: "blogy-martech",
      title:
        "How Blogy is Disrupting Martech – Organic Traffic on Autopilot, Cheapest SEO",
      primaryKeyword:
        "How Blogy is Disrupting Martech – Organic Traffic on Autopilot, Cheapest SEO",
    },
  ];

  return blogConfigs.map((blog) => {
    const built = buildBlogMarkdown({
      title: blog.title,
      primaryKeyword: blog.primaryKeyword,
      audience: seoInput.audience || "marketers and growth teams",
      tone: seoInput.tone || "professional",
      platform: seoInput.platform || "Blog / Website",
      businessType: seoInput.businessType,
      strategy: analysis.strategy,
      blueprint: analysis.blueprint,
      countryNote: "India",
    });

    return {
      id: blog.id,
      title: blog.title,
      primaryKeyword: blog.primaryKeyword,
      markdown: built.markdown,
      metaTitle: built.metaTitle,
      metaDescription: built.metaDescription,
    };
  });
}