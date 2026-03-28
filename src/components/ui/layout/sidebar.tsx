"use client";

import { useEffect, useState } from "react";
import {
  Sparkles,
  BrainCircuit,
  SearchCheck,
  Layers3,
  ScanSearch,
  Target,
  FileText,
  PencilLine,
  MonitorSmartphone,
  BarChart3,
  TrendingUp,
  FileOutput,
  ShieldCheck,
  PanelsTopLeft,
} from "lucide-react";

const navItems = [
  { label: "Strategy Engine", icon: Sparkles, href: "#strategy-engine", id: "strategy-engine" },
  { label: "Decision Trace", icon: BrainCircuit, href: "#decision-trace", id: "decision-trace" },
  { label: "Intent Analysis", icon: SearchCheck, href: "#intent-engine", id: "intent-engine" },
  { label: "Keyword Clusters", icon: Layers3, href: "#keyword-clusters", id: "keyword-clusters" },
  { label: "SERP Gap", icon: ScanSearch, href: "#serp-gap", id: "serp-gap" },
  { label: "Strategy Planner", icon: Target, href: "#strategy-planner", id: "strategy-planner" },
  { label: "Blueprints", icon: FileText, href: "#blog-blueprint", id: "blog-blueprint" },
  { label: "Blog Generator", icon: PencilLine, href: "#blog-generator", id: "blog-generator" },
  { label: "Platform Adaptation", icon: MonitorSmartphone, href: "#platform-adaptation", id: "platform-adaptation" },
  { label: "Scoring", icon: BarChart3, href: "#seo-scoring", id: "seo-scoring" },
  { label: "Performance", icon: TrendingUp, href: "#projected-performance", id: "projected-performance" },
  { label: "Part 3 Blogs", icon: FileOutput, href: "#part3-dashboard", id: "part3-dashboard" },
  { label: "Validation", icon: ShieldCheck, href: "#validation-dashboard", id: "validation-dashboard" },
  { label: "Platform Tabs", icon: PanelsTopLeft, href: "#platform-tabs", id: "platform-tabs" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("strategy-engine");

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;

          const rect = el.getBoundingClientRect();

          return {
            id: item.id,
            top: rect.top,
          };
        })
        .filter(
          (section): section is { id: string; top: number } => section !== null
        );

      const current =
        [...sectionOffsets].reverse().find((section) => section.top <= 140) ?? null;

      if (current) {
        setActiveSection(current.id);
      } else {
        setActiveSection("strategy-engine");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className="hidden lg:flex w-72 min-h-screen border-r border-slate-800 bg-slate-950/80 backdrop-blur-xl p-6 flex-col">
      <div>
        <div className="text-2xl font-bold tracking-tight text-white">RankForge</div>
        <p className="mt-2 text-sm text-slate-400">
          SEO growth strategy workspace
        </p>
      </div>

      <div className="mt-8 space-y-2 overflow-y-auto pr-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.label}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all duration-200",
                isActive
                  ? "border-white/20 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                  : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-800/80 hover:text-white",
              ].join(" ")}
            >
              <Icon
                className={[
                  "h-4 w-4 transition-all duration-200",
                  isActive ? "text-white" : "text-slate-400",
                ].join(" ")}
              />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-sm font-medium text-white">Innovation Layer</p>
        <p className="mt-2 text-sm text-slate-400">
          This system adapts to business type, explains decision logic, validates blog quality, and simulates platform-ready publishing.
        </p>
      </div>
    </aside>
  );
}