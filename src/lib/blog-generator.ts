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

  const sectionTemplates: Array<(heading: string) => string> = [
    (heading: string) =>
      `${heading} helps readers understand the practical choices behind ${input.primaryKeyword} and why those choices affect ranking, trust, and action.`,

    (heading: string) =>
      `This section explores ${heading.toLowerCase()} through real use cases, clearer positioning, and the kinds of details readers actually need before moving forward.`,

    (heading: string) =>
      `${heading} is where the article becomes useful, because it turns broad explanation into structured guidance that supports better decision-making.`,

    (heading: string) =>
      `A strong article cannot treat ${heading.toLowerCase()} as filler. It must connect the topic to outcomes, credibility, and publishing readiness.`,

    (heading: string) =>
      `This section gives depth to ${input.primaryKeyword} by translating general ideas into practical guidance, stronger examples, and clearer strategic relevance.`,
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
                ? `How "${input.primaryKeyword}" fits the reader's search intent`
                : index === 1
                ? "What the reader actually needs from this page"
                : index === 2
                ? `How to adapt the content to ${safePlatform}`
                : index === 3
                ? "How this page supports business goals"
                : "Differentiation opportunities competitors miss";

           const subsectionTemplates = [
  () =>
    `This subsection explains why "${input.primaryKeyword}" benefits from a structured, strategy-first approach and how that improves clarity and discoverability.`,

  () =>
    `Here, we connect "${input.primaryKeyword}" to real user intent, showing why structure and positioning directly impact ranking and conversion.`,

  () =>
    `This part highlights how "${input.primaryKeyword}" should be treated to maximize visibility, usability, and decision-making clarity.`,

  () =>
    `This subsection focuses on making "${input.primaryKeyword}" more actionable by aligning it with intent, structure, and real-world use.`,

  () =>
    `This section reinforces why "${input.primaryKeyword}" needs clear positioning and structured execution to perform well in search.`,
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

${input.primaryKeyword} requires a content structure that aligns reader intent, SEO opportunity, and conversion flow. A strong blog should guide the reader clearly while also improving discoverability and publishing readiness.

### How "${input.primaryKeyword}" fits the reader's search intent

This subsection explains why "${input.primaryKeyword}" deserves a structured, strategy-first treatment and how that improves discoverability, clarity, and conversion potential.`;

  const markdown = `# ${input.title}

**Meta Title:** ${metaTitle}  
**Meta Description:** ${metaDescription}

## Featured Snippet

${input.primaryKeyword} is most effective when the content combines clear search intent alignment, strong structure, comparison logic, and conversion-ready CTA placement.

## Introduction

If you want to rank for **${input.primaryKeyword}**, you need more than fast writing. You need structure, relevance, differentiation, and a content flow that helps the reader move from interest to action. This blog is designed for **${input.audience}** and written in a **${input.tone}** tone.

## Why This Topic Matters

Most AI blog tools focus on generating words quickly. But ranking and conversion come from better strategic alignment: intent mapping, SERP opportunity, structured validation, and publishing adaptation. That is why this article is designed not just to explain the topic, but to help the reader understand how to act on it effectively.

${renderedSections}

## Why Blogy Stands Out

Blogy is positioned as a strategy-first blog automation solution. Instead of only generating text, it helps teams move from keyword to blueprint, validation, and publishing-ready outputs.

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
It combines ranking opportunity with high strategic value for organic growth.

### How is Blogy different from standard AI content writers?
Blogy is built as a strategy-first organic growth engine, not just a text generator.

### Can this blog structure improve SEO performance?
Yes. It improves structure, snippet-readiness, CTA flow, and keyword coverage.

### Is this suitable for AI answer engines too?
Yes. Featured snippets, direct answers, and strong structure improve compatibility.

### How should this be adapted for different platforms?
The core content stays strong, but formatting, CTA style, and pacing should change by platform.

## Conclusion

To win with **${input.primaryKeyword}**, the goal is not only to publish faster. The goal is to publish content that is structured for ranking, designed for clarity, and optimized to convert.

## CTA

Try **Blogy** to turn raw keywords into strategy, validated blog assets, and platform-ready publishing outputs.
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
