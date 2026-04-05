"use client";

import { useState } from "react";
import { AppShell } from "@/components/ui/layout/app-shell";
import { Topbar } from "@/components/ui/layout/topbar";
import { SeoInputForm } from "@/components/ui/forms/seo-input-form";
import { PipelineLoader } from "@/components/ui/pipeline/pipeline-loader";
import { ResultsDashboard } from "@/components/results/results-dashboard";
import { Part3Dashboard } from "@/components/results/part3-dashboard";
import { SeoAnalysisResult, SeoInput } from "@/types/seo";
import { Part3Assets } from "@/types/blog";
import { generateSeoAnalysis } from "@/lib/seo-engine";
import { generatePart3Assets } from "@/lib/part3-engine";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SeoAnalysisResult | null>(null);
  const [part3Assets, setPart3Assets] = useState<Part3Assets | null>(null);

  // ✅ ADDED
  const [lastInput, setLastInput] = useState<SeoInput | null>(null);

 const handleGenerate = async (input: SeoInput) => {
  setIsLoading(true);
  setResult(null);
  setPart3Assets(null);

  // ✅ ADDED
  setLastInput(input);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const generated = generateSeoAnalysis(input);
  const generatedPart3 = generatePart3Assets(input, generated);

  setResult(generated);
  setPart3Assets(generatedPart3);
  setIsLoading(false);
};

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <Topbar />

        <div id="strategy-engine" className="scroll-mt-24">
          <SeoInputForm onGenerate={handleGenerate} isLoading={isLoading} />
        </div>

        {isLoading && <PipelineLoader />}

        {/* ✅ UPDATED */}
        {result && lastInput && (
          <ResultsDashboard result={result} input={lastInput} />
        )}

        {part3Assets && <Part3Dashboard assets={part3Assets} />}
      </div>
    </AppShell>
  );
}