"use client";

import { GeneratedBlog } from "@/types/blog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

export function BlogOutputPanel({ blog }: { blog: GeneratedBlog }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(blog.markdown);
      alert("Blog copied to clipboard.");
    } catch {
      alert("Copy failed. Please try again.");
    }
  };

  const handleDownloadMarkdown = () => {
    const safeTitle = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    downloadFile(`${safeTitle}.md`, blog.markdown, "text/markdown");
  };

  const handleDownloadText = () => {
    const safeTitle = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    downloadFile(`${safeTitle}.txt`, blog.markdown, "text/plain");
  };

  return (
    <Card
      id="blog-output"
      className="scroll-mt-24 border-slate-800 bg-slate-900/70 text-white"
    >
      <CardHeader>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <CardTitle>{blog.title}</CardTitle>
            <p className="mt-1 text-sm text-slate-400">{blog.primaryKeyword}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleCopy}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              Copy Blog
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              Download .md
            </button>

            <button
              onClick={handleDownloadText}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              Download .txt
            </button>
          </div>
        </div>
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