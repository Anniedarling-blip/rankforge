"use client";

import { Part3Assets } from "@/types/blog";
import { BlogOutputPanel } from "./blog-output-panel";
import { BlogValidationPanel } from "./blog-validation-panel";
import { PlatformAdaptationTabs } from "./platform-adaptation-tabs";

export function Part3Dashboard({ assets }: { assets: Part3Assets }) {
  return (
    <div className="mt-12 space-y-10">
      <div>
        <div id="part3-dashboard" className="mt-12 space-y-10"></div>
        <h2 className="text-2xl font-semibold text-white">Part 3 — Blog Engine + Validation + Platform Layer</h2>
        <p className="mt-2 text-slate-400">
          Generate the 2 required blogs, validate them across 10 metrics, and simulate platform-specific publishing.
        </p>
      </div>

      {assets.blogs.map((blog) => (
        <div key={blog.id} className="space-y-6">
          <BlogOutputPanel blog={blog} />
          <BlogValidationPanel blog={blog} />
          <PlatformAdaptationTabs blog={blog} />
        </div>
      ))}
    </div>
  );
}