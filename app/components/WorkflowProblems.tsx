"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  UserCheck,
  Users,
  Boxes,
  BarChart3,
  Wrench,
  CheckSquare,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

interface ProblemItem {
  title: string;
  legacyFriction: string;
  automatedSolution: string;
  icon: typeof FileSpreadsheet;
}

const problems: ProblemItem[] = [
  {
    title: "Spreadsheet Replacement",
    legacyFriction: "Fragile Excel/Google sheets prone to accidental overwrites, broken formulas, and version chaos.",
    automatedSolution: "Centralized database portals with role-based permissions, automated validation, and instant search.",
    icon: FileSpreadsheet,
  },
  {
    title: "Attendance Systems",
    legacyFriction: "Handwritten paper roll calls, manual minute tallying, and lost absence records.",
    automatedSolution: "Live 1-click roll call tracking, automatic late-minute counters, and real-time attendance rate analytics.",
    icon: UserCheck,
  },
  {
    title: "HR & Staff Portals",
    legacyFriction: "Staff credentials scattered in documents and manual onboarding/clearance steps.",
    automatedSolution: "Role-scoped administrative consoles for team provisioning, task queues, and compliance audits.",
    icon: Users,
  },
  {
    title: "Inventory Management",
    legacyFriction: "Asset loss and missing equipment discovered only during annual manual inventory counts.",
    automatedSolution: "Barcode-scanned item checkouts, automated overdue flags, and live copy status tracking.",
    icon: Boxes,
  },
  {
    title: "Reporting Dashboards",
    legacyFriction: "Spending days manually consolidating multi-column reports for leadership review.",
    automatedSolution: "Real-time KPI dashboards, automated summary metrics, and 1-click styled .xls and .csv exports.",
    icon: BarChart3,
  },
  {
    title: "Internal Business Tools",
    legacyFriction: "Relying on generic off-the-shelf software that forces teams to bend their natural workflows.",
    automatedSolution: "Custom-tailored web tools engineered precisely around your team's existing operational processes.",
    icon: Wrench,
  },
  {
    title: "Approval & Review Workflows",
    legacyFriction: "Review requests lost in emails, chat threads, and unorganized physical inboxes.",
    automatedSolution: "Dedicated review portals with pending queues, inline teacher/manager feedback, and audit logs.",
    icon: CheckSquare,
  },
  {
    title: "Library & Resource Systems",
    legacyFriction: "Physical index cards, handwritten borrower cards, and hours spent typing book metadata.",
    automatedSolution: "24/7 web OPAC public catalogs, auto-fetching ISBN enrichment, and barcode scan desks.",
    icon: BookOpen,
  },
  {
    title: "Student Management Systems",
    legacyFriction: "Disjointed portals for schedules, exam scopes, daily diaries, and parent reporting.",
    automatedSolution: "Unified student desks with zero-password lookups, exam scope acknowledgments, and assignment notebooks.",
    icon: GraduationCap,
  },
];

export default function WorkflowProblems() {
  return (
    <section id="problems" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Operational Pain Points Eliminated
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Common Workflow Problems I Solve
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            If your team relies on brittle spreadsheets, manual paperwork, and fragmented tools, here is where custom web portals drive immediate operational ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-rose-50/70 border border-rose-100 text-rose-900">
                      <span className="font-bold block text-rose-800 uppercase tracking-wide text-[10px] mb-0.5">
                        ❌ The Manual Pain
                      </span>
                      <p className="leading-relaxed">{item.legacyFriction}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-950">
                      <span className="font-bold block text-emerald-800 uppercase tracking-wide text-[10px] mb-0.5">
                        ✅ The Automated System
                      </span>
                      <p className="leading-relaxed">{item.automatedSolution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-slate-900">
              Have a unique workflow or specialized reporting process?
            </h4>
            <p className="text-xs text-slate-500">
              I don&apos;t force your team into rigid templates. I architect software directly around how your organization operates.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-indigo-500/20 transition-all"
          >
            Discuss Your Workflow
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
