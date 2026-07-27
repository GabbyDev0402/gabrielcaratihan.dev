"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck, Cpu, Download, TrendingUp } from "lucide-react";
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
          {/* Business Automation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Software Engineer & Business Automation Specialist
          </div>

          {/* Main Business Translation Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Replacing Messy Spreadsheets & Manual Workflows with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900">
              Custom, Automated Web Portals.
            </span>
          </h1>

          {/* Subheadline targeting ROI & Business Outcomes */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Hi, I’m Gabriel Caratihan. I engineer full-stack SaaS web applications and internal tools that eliminate administrative bottlenecks, cut operational overhead by up to 80%, and convert manual paper processes into scalable digital systems.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200"
            >
              View My Work & ROI
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Gabriel_Caratihan_Resume.pdf"
              download="Gabriel_Caratihan_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl shadow-xs transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>

            <a
              href="https://github.com/GabbyDev0402"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl shadow-xs transition-all duration-200"
            >
              <GithubIcon className="w-5 h-5 text-slate-900" />
              GitHub
            </a>
          </div>

          {/* Enterprise SaaS Trust Indicators & ROI Highlights */}
          <div className="pt-10 border-t border-slate-200/80 w-full max-w-3xl">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6">
              Proven Business & Operational Impact
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="glass-card p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-100/70 text-indigo-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">80% Time Saved</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Automated Workflow Engines</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-100/70 text-indigo-600">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Zero Data Loss</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Replacing Paper & Excel</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-100/70 text-indigo-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Enterprise Standards</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Bank-Grade RLS & Security</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
