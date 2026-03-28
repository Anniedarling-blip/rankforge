"use client";

import { GeneratedBlog } from "@/types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BlogOutputPanel({ blog }: { blog: GeneratedBlog }) {
  return (
    <Card className="border-slate-800 bg-slate-900/70 text-white">
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
        <p className="text-sm text-slate-400">{blog.primaryKeyword}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Meta Title</p>
          <p className="mt-1 text-slate-200">{blog.metaTitle}</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Meta Description</p>
          <p className="mt-1 text-slate-200">{blog.metaDescription}</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Blog Markdown Output</p>
          <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
            {blog.markdown}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}