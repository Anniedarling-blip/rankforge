"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import { HoverCard } from "@/components/animation/hover-card";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";

type ScoreItem = {
  label: string;
  score: number;
  reason: string;
};

type ScoringPanelData = {
  scores: ScoreItem[];
  scoreSummary?: string;
};

export function ScoringPanel({ data }: { data: ScoringPanelData }) {
  return (
    <div>
      <div id="seo-scoring" className="scroll-mt-24"></div>
      <SectionHeader
        title="Scoring"
        description="Measure how strong the strategy is across SEO, differentiation, and conversion."
      />

      <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.scores?.map((score) => (
          <StaggerItem key={score.label}>
            <HoverCard>
              <Card className="border-slate-800 bg-slate-900/70 text-white">
                <CardContent className="space-y-3 p-5">
                  <p className="text-sm text-slate-400">{score.label}</p>
                  <p className="text-3xl font-bold">{score.score}/10</p>
                  <p className="text-sm text-slate-300">{score.reason}</p>
                </CardContent>
              </Card>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {data.scoreSummary && (
        <div className="mt-4">
          <HoverCard>
            <Card className="border-slate-800 bg-slate-900/70 text-white">
              <CardContent className="p-5">
                <p className="text-sm text-slate-400">Overall Score Summary</p>
                <p className="mt-2 text-slate-200">{data.scoreSummary}</p>
              </CardContent>
            </Card>
          </HoverCard>
        </div>
      )}
    </div>
  );
}