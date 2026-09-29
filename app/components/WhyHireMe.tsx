"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Workflow,
  TrendingUp,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface PillarItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
  icon: typeof Compass;
}

const pillars: PillarItem[] = [
  {
    number: "01",
    title: "I understand operations before writing code.",
    description:
      "Rooted in my educator background, I know how organizations actually function day-to-day. I first diagnose where staff hours are lost, where duplicate data entry occurs, and how data moves between stakeholders before touching a line of code.",
    highlight: "Operational diagnosis first • Zero technical jargon disconnect",
    icon: Compass,
  },
  {
    number: "02",
    title: "I build software around existing workflows, not the other way around.",
    description:
      "Generic SaaS platforms force your team to change how they work to fit rigid software constraints. I design custom portals tailored precisely to your team's existing terminology, report columns, and habits—making staff adoption effortless.",
    highlight: "Zero friction adoption • Tailored to your exact business rules",
    icon: Workflow,
  },
  {
    number: "03",
    title: "I focus on measurable ROI.",
    description:
      "I don't measure success by lines of code written. I measure success by hours saved each week, reductions in manual errors, instant report generation, and eliminating administrative overhead.",
    highlight: "80%+ time saved • <10s task throughput • Instant reporting",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "I deploy production-ready systems.",
    description:
      "I build dependable, battle-tested systems designed for active institutional use. With role-based security, automated error handling, and cloud infrastructure, your portal is reliable from day one.",
    highlight: "Active production track record • Enterprise data security",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "I provide long-term support.",
    description:
      "Building software is a partnership, not a one-and-done handoff. I remain available to optimize workflows, onboard staff, adjust to changing regulatory requirements, and continuously improve your system.",
    highlight: "Dedicated post-launch partner • Continuous workflow iteration",
    icon: Headphones,
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-me" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            The Business Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Clients Hire Me
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Most developers jump straight into code syntax. I focus on understanding your team&apos;s operational realities to build software that actually gets adopted and delivers return on investment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isWide = idx === 3 || idx === 4;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-slate-50/70 p-7 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-extrabold text-indigo-600 px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white text-indigo-600 shadow-2xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px]">{pillar.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/20 transition-all"
          >
            <span>Book a Free Workflow Review</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
