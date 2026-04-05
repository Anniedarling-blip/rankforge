"use client";

import { SeoAnalysisResult } from "@/types/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function VisualAnalyticsPanel({
  scoring,
  performance,
  competitors,
}: {
  scoring: SeoAnalysisResult["scoring"];
  performance: SeoAnalysisResult["performance"];
  competitors: SeoAnalysisResult["competitorScoring"];
}) {
  const scoreData = scoring.scores.map((item) => ({
    label: item.label,
    value: item.score * 10,
  }));

  const performanceData = [
    {
      label: "Ranking",
      value:
        performance.rankingPotential === "High"
          ? 90
          : performance.rankingPotential === "Medium"
          ? 60
          : 30,
    },
    {
      label: "Traffic",
      value:
        performance.trafficPotential === "High"
          ? 90
          : performance.trafficPotential === "Medium"
          ? 60
          : 30,
    },
    {
      label: "Conversion",
      value:
        performance.conversionPotential === "High"
          ? 90
          : performance.conversionPotential === "Medium"
          ? 60
          : 30,
    },
    {
      label: "Snippet",
      value:
        performance.snippetProbability === "High"
          ? 90
          : performance.snippetProbability === "Medium"
          ? 60
          : 30,
    },
  ];

  const competitorData = competitors.map((item) => ({
    label: item.competitorLabel,
    value: item.estimatedScore,
  }));

  return (
    <Card
      id="visual-analytics"
      className="scroll-mt-24 border-slate-800 bg-slate-900/70 text-white"
    >
      <CardHeader>
        <CardTitle>Visual Analytics</CardTitle>
        <p className="text-sm text-slate-400">
          Compare strategy strength, projected performance, and competitor
          benchmark
        </p>
      </CardHeader>

      <CardContent className="space-y-8">
        <div>
          <p className="mb-3 text-sm font-medium text-white">Strategy Scores</p>
          <div className="h-72 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scoreData}>
                <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value) => [`${Number(value)}/100`, "Score"]}
                />
                <Bar
                  dataKey="value"
                  radius={[10, 10, 0, 0]}
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-white">
            Projected Performance
          </p>
          <div className="h-72 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value) => [`${Number(value)}/100`, "Potential"]}
                />
                <Bar
                  dataKey="value"
                  radius={[10, 10, 0, 0]}
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-white">
            Competitor Benchmark
          </p>
          <div className="h-72 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitorData}>
                <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value) => [
                    `${Number(value)}/100`,
                    "Competitor Score",
                  ]}
                />
                <Bar
                  dataKey="value"
                  radius={[10, 10, 0, 0]}
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}