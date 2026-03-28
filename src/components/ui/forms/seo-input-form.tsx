"use client";

import { useState } from "react";
import { BusinessType, SeoInput } from "@/types/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const initialState: SeoInput = {
  keyword: "",
  audience: "",
  product: "",
  goal: "",
  tone: "",
  platform: "",
  businessType: "SaaS",
  notes: "",
};

interface SeoInputFormProps {
  onGenerate: (input: SeoInput) => void;
  isLoading: boolean;
}

export function SeoInputForm({ onGenerate, isLoading }: SeoInputFormProps) {
  const [form, setForm] = useState<SeoInput>(initialState);

  const updateField = (key: keyof SeoInput, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="border-slate-800 bg-slate-900/70 text-white shadow-2xl shadow-slate-950/40">
      <CardHeader>
        <CardTitle className="text-xl">Input Strategy Brief</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Keyword"
          value={form.keyword}
          onChange={(e) => updateField("keyword", e.target.value)}
          className="border-slate-700 bg-slate-950"
        />

        <Input
          placeholder="Audience"
          value={form.audience}
          onChange={(e) => updateField("audience", e.target.value)}
          className="border-slate-700 bg-slate-950"
        />

        <Input
          placeholder="Product"
          value={form.product}
          onChange={(e) => updateField("product", e.target.value)}
          className="border-slate-700 bg-slate-950"
        />

        <Input
          placeholder="Goal"
          value={form.goal}
          onChange={(e) => updateField("goal", e.target.value)}
          className="border-slate-700 bg-slate-950"
        />

        <Input
          placeholder="Tone"
          value={form.tone}
          onChange={(e) => updateField("tone", e.target.value)}
          className="border-slate-700 bg-slate-950"
        />

        <Input
          placeholder="Platform"
          value={form.platform}
          onChange={(e) => updateField("platform", e.target.value)}
          className="border-slate-700 bg-slate-950"
        />

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-300">Business Type</label>
          <select
            value={form.businessType}
            onChange={(e) => updateField("businessType", e.target.value as BusinessType)}
            className="h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-white"
          >
            <option value="SaaS">SaaS</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Personal Brand">Personal Brand</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <Textarea
            placeholder="Optional notes or business context"
            value={form.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            rows={4}
            className="border-slate-700 bg-slate-950"
          />
        </div>

        <div className="md:col-span-2">
          <Button
            onClick={() => onGenerate(form)}
            disabled={isLoading || !form.keyword.trim()}
            className="w-full"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {isLoading ? "Generating Strategy..." : "Generate Strategy"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}