"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Compass, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950/60 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
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
            <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              Bridging Real-World Friction with Engineered Scalability
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl mx-auto">
              From classrooms to enterprise software systems.
            </p>
          </div>

          {/* Main About Card */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-bl-full pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Highlight Badge Column */}
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 font-semibold text-sm">
                    <div className="p-2 rounded-lg bg-indigo-600 text-white">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span>ESL Teacher</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Washington School
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 font-semibold text-sm">
                    <div className="p-2 rounded-lg bg-indigo-600 text-white">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span>Computer Programming</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Imus Computer College
                  </p>
                </div>
              </div>

              {/* Exact Bio Text Column */}
              <div className="w-full md:w-2/3 space-y-6">
                <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Engineering Philosophy</span>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  My journey into software engineering is rooted in my experience as an educator. While working as an ESL teacher at Washington School and simultaneously studying Computer Programming at Imus Computer College, I witnessed firsthand the administrative friction that slows down institutions. This dual perspective drives my engineering philosophy: I don't just write code; I architect systems that solve genuine operational challenges.
                </p>

                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>Operational Bottleneck Elimination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>User-Centric Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>Full-Stack SaaS Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>Scalable Database & API Design</span>
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
