"use client";

import { motion } from "framer-motion";
import { School, TrendingUp, CheckCircle2, UserCheck, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              The Background Behind The Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              An Educator’s Perspective on Business Automation
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Bridging the gap between non-technical decision makers and the software systems that help them scale.
            </p>
          </div>

          {/* Main About Card */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 border border-slate-200/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Highlight Badge Column */}
              <div className="w-full md:w-1/3 flex flex-col gap-3.5">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                    <div className="p-2 rounded-lg bg-indigo-600 text-white">
                      <School className="w-4 h-4" />
                    </div>
                    <span>Educator Roots</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Former ESL educator at Washington School with firsthand operational experience on the frontlines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span>Business-First Focus</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Learning how organizations operate and measuring success by hours saved and friction removed.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                    <div className="p-2 rounded-lg bg-indigo-600 text-white">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <span>Non-Technical Bridge</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Fluent in communicating directly with administrators, principals, and business owners.
                  </p>
                </div>
              </div>

              {/* Bio & Philosophy Column */}
              <div className="w-full md:w-2/3 space-y-5">
                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    Before becoming a software engineer, I worked as an educator.
                  </p>
                  <p>
                    While working inside schools, I saw firsthand how much time was lost to spreadsheets, paper processes, duplicate data entry, and fragmented reporting systems.
                  </p>
                  <p>
                    Rather than simply learning to code, I focused on learning how organizations actually operate.
                  </p>
                  <p>
                    Today, I build custom web applications that replace manual workflows, automate repetitive tasks, and provide administrators with real-time visibility into their operations.
                  </p>
                  <p className="font-semibold text-slate-900">
                    I bridge the gap between non-technical decision makers and the software systems that help them scale.
                  </p>
                </div>

                {/* Core Pillars */}
                <div className="pt-5 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Educator &amp; Institutional Background</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real Operational Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Business-First Mindset</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Measurable ROI-Focused Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
