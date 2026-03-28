import { DecisionTraceItem } from "@/types/seo";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";

export function DecisionTracePanel({
  items,
}: {
  items: DecisionTraceItem[];
}) {
  return (
    <div className="scroll-mt-24" id="decision-trace">
      <SectionHeader
        title="Decision Trace"
        description="Show the reasoning path behind the generated strategy. This is one of the strongest innovation layers in the product."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title} className="border-slate-800 bg-slate-900/70 text-white">
            <CardContent className="p-5">
              <p className="text-sm font-medium text-white">{item.title}</p>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}