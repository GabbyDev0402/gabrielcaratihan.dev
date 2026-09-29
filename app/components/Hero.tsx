"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Download, Calendar, ShieldCheck, TrendingUp, School, Workflow } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
        >
          {/* Position Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Custom Web Portal &amp; Workflow Automation Specialist
          </div>

          {/* New B2B Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Replacing Spreadsheets, Paperwork, and Manual Workflows with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900">
              Custom Business Systems
            </span>
          </h1>

          {/* New B2B Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            I build custom web portals that automate administrative processes, centralize data, and eliminate operational bottlenecks for schools and organizations.
          </p>

          {/* Primary & Secondary Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-slate-900 bg-white hover:bg-slate-50 border-2 border-indigo-600/30 hover:border-indigo-600 rounded-xl shadow-xs transition-all duration-200 group"
            >
              <Calendar className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
              Book a Free Workflow Review
            </a>
          </div>

          {/* Secondary Utility Links */}
          <div className="flex items-center gap-5 text-xs text-slate-500 font-medium">
            <a
              href="/Gabriel_Caratihan_Resume.pdf"
              download="Gabriel_Caratihan_Resume.pdf"
              className="inline-flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              Download Resume (PDF)
            </a>
            <span>•</span>
            <a
              href="https://github.com/GabbyDev0402"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
              GitHub Profile
            </a>
          </div>

          {/* ROI Banner & Trust Indicators */}
          <div className="pt-8 border-t border-slate-200/80 w-full max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">
                  80%+ Reduction in Admin Work
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">
                  Real Systems in Active Production
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">
                  Trusted by Educational Institutions
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">
                  Built Around Existing Workflows
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
