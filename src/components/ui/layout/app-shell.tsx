import { ReactNode } from "react";
import { Sidebar } from "@/components/ui/layout/sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />
        <section className="flex-1 p-6 md:p-8">{children}</section>
      </div>
    </main>
  );
}