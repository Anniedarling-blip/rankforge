"use client";

import { useState } from "react";
import { GeneratedBlog, PublishingPlatform } from "@/types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const platforms: PublishingPlatform[] = [
  "Medium",
  "LinkedIn",
  "Dev.to",
  "WordPress",
  "Hashnode",
];

export function PlatformAdaptationTabs({ blog }: { blog: GeneratedBlog }) {
  const [activePlatform, setActivePlatform] =
    useState<PublishingPlatform>("Medium");

  const activeVersion =
    blog.platformVersions.find((p) => p.platform === activePlatform) ??
    blog.platformVersions[0];

  return (
    
    <Card className="border-slate-800 bg-slate-900/70 text-white">
      <CardHeader>
        <CardTitle>Platform Adaptation Engine</CardTitle>
        <p className="text-sm text-slate-400">
          Simulate how the blog is formatted for 5 publishing platforms
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div id="platform-tabs" className="scroll-mt-24"></div>
        <div className="flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`rounded-lg border px-3 py-2 text-sm transition ${
                activePlatform === platform
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Adaptation Note</p>
          <p className="mt-1 text-slate-200">{activeVersion.adaptationNote}</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Adapted Output</p>
          <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
            {activeVersion.content}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}