import { PlatformAdaptationEntry, PublishingPlatform } from "@/types/blog";

export function adaptBlog(blog: string, platform: PublishingPlatform): PlatformAdaptationEntry {
  switch (platform) {
    case "LinkedIn":
      return {
        platform,
        content: blog
          .replace(/^##\s/gm, "👉 ")
          .replace(/^###\s/gm, "• ")
          .replace(/\*\*/g, "")
          .slice(0, 3000),
        adaptationNote:
          "LinkedIn version uses shorter formatting, stronger hooks, and engagement-friendly structure.",
      };

    case "Medium":
      return {
        platform,
        content: blog,
        adaptationNote:
          "Medium keeps a readable long-form narrative with a softer, thought-leadership tone.",
      };

    case "Dev.to":
      return {
        platform,
        content: `${blog}\n\n#seo #ai #blogging #contentmarketing`,
        adaptationNote:
          "Dev.to version keeps markdown style and adds community-friendly tags.",
      };

    case "WordPress":
      return {
        platform,
        content: blog,
        adaptationNote:
          "WordPress version keeps SEO structure and conversion sections for publishing-ready use.",
      };

    case "Hashnode":
      return {
        platform,
        content: `${blog}\n\n#seo #automation #growth`,
        adaptationNote:
          "Hashnode version keeps markdown and technical-publishing friendliness.",
      };

    default:
      return {
        platform,
        content: blog,
        adaptationNote: "Default platform adaptation applied.",
      };
  }
}