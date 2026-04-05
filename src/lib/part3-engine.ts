import { Part3Assets, PublishingPlatform } from "@/types/blog";
import { SeoAnalysisResult, SeoInput } from "@/types/seo";
import { buildMandatoryBlogs } from "./blog-generator";
import { validateGeneratedBlog } from "./validate-blog";
import { adaptBlog } from "./adapt-blog";

export function generatePart3Assets(
  seoInput: SeoInput,
  analysis: SeoAnalysisResult
): Part3Assets {
  const baseBlogs = buildMandatoryBlogs(seoInput, analysis);

  const platforms: PublishingPlatform[] = [
    "Medium",
    "LinkedIn",
    "Dev.to",
    "WordPress",
    "Hashnode",
  ];

  const blogs = baseBlogs.map((blog) => {
    const platformVersions = platforms.map((platform) =>
      adaptBlog(blog.markdown, platform)
    );

    const blogWithPlatforms = {
      ...blog,
      platformVersions,
    };

    return {
      ...blogWithPlatforms,
      validation: validateGeneratedBlog(blogWithPlatforms),
    };
  });

  return { blogs };
}