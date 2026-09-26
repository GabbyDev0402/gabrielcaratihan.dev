"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Sparkles,
  Key,
  School,
  Building2,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  TrendingUp,
  Bot,
} from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  businessImpact?: {
    metric: string;
    summary: string;
  };
  category: string;
  fullDescription: string | React.ReactNode;
  agenticWorkflow: string;
  techStack: string[];
  demoCredentials?: {
    role: string;
    email: string;
    password?: string;
  };
  inActiveProduction?: boolean;
  githubLink: string;
  liveLink: string;
  imageUrl?: string;
  imagePlaceholder?: string | {
    color: string;
    label: string;
  };
  icon?: typeof School;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    id: "wsi-portal",
    title: "Washington School International (Online) — Online Portal",
    shortDescription:
      "Full-Stack School Management & Learning Platform serving Administrators, Faculty, and Students with automated 24-column grade sync.",
    businessImpact: {
      metric: "⚡ 80%+ Reduction in Operational Friction & 100% Automated Grade Syncing",
      summary:
        "Officially deployed in active daily production at Washington School International. Replaced manual spreadsheets with a 24-column Academic Performance Grid, polymorphic exam builder, and real-time attendance analytics.",
    },
    category: "EdTech & Analytics",
    techStack: [
      "React 19",
      "Vite v8",
      "Tailwind CSS v4",
      "Firebase Firestore",
      "Firebase Auth",
      "Lucide React",
    ],
    inActiveProduction: true,
    githubLink: "https://github.com/GabbyDev0402/wcs-attendancetracker",
    liveLink: "https://wcsattendancetracker.netlify.app/",
    imageUrl: "/images/attendance-pro-tracker.png",
    imagePlaceholder: {
      color: "from-blue-600 to-indigo-800",
      label: "Washington School International Portal",
    },
    agenticWorkflow:
      "Architected and engineered using advanced agentic workflows via Antigravity IDE. Directed AI models to design a 24-column performance grid matching institutional Google Sheets, establish polymorphic assessment schemas, optimize Firestore query listeners to avoid read quota spikes, and generate client-side styled .xls spreadsheets.",
    fullDescription: (
      <div className="space-y-5 text-sm text-slate-600">
        <div className="p-4 rounded-xl bg-emerald-50/90 border border-emerald-200 space-y-1 text-emerald-950">
          <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
            <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>🏫 Officially Deployed &amp; In Active Production at Washington School International</span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed font-normal">
            This platform orchestrates daily class operations, live student attendance tracking, rich interactive diary/vocabulary workflows, in-house polymorphic exams, and institutional academic performance reporting for real students and faculty.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 border-b pb-1">📌 Project Overview</h4>
          <p className="mt-2 leading-relaxed">
            Originally conceived as a daily attendance logger, the system grew into a unified <strong>School Management &amp; Learning Platform</strong> serving Administrators, Faculty, and Students of an international distance-learning school.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 border-b pb-1">🏛️ Admin Console (Operations &amp; Analytics)</h4>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li>
              <strong>24-Column Academic Performance Master Grid:</strong> Replicates institutional spreadsheets across standard and ESL curricula. Separates Core subjects (English, Social Science, Science, Math) and Added subjects (MAPEH, Values, TLE, Literature), with dynamic Senior High School (SHS) course track resolution (e.g., <em>PPG</em>, <em>EmpTech</em>, <em>DIASS</em>, <em>MIL</em>).
            </li>
            <li>
              <strong>Sub-Score Breakdown:</strong> Automatically calculates Multiple Choice, Essay/Vocabularies, and total earned points per student with instant general average and passing status.
            </li>
            <li>
              <strong>Deficiency Audit &amp; 1-Click Clipboard Engine:</strong> Automatically audits missing test scores across grades and generates clipboard-ready deficiency notices with responsible teacher names.
            </li>
            <li>
              <strong>Teacher Compliance Center:</strong> Real-time reactive queues tracking pending vocabulary and diary submissions awaiting teacher review.
            </li>
            <li>
              <strong>Staff &amp; Student Provisioning:</strong> Account provisioning with 1-click magic password reset triggers and global student credential directory management.
            </li>
            <li>
              <strong>Custom Exports:</strong> Generates styled binary <code>.xls</code> spreadsheets and streaming <code>.csv</code> files for administrative archiving.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 border-b pb-1">👨‍🏫 Teacher Dashboard &amp; Classroom Studio</h4>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li>
              <strong>Master Schedule &amp; Daily Roll Call:</strong> Filterable daily class sessions with late-minute counters, excused, absent, and present statuses.
            </li>
            <li>
              <strong>Polymorphic Exam Builder &amp; Scope Studio:</strong> In-house assessment studio supporting Multiple Choice (with dynamic answer keys), Exact Identification, Vocabulary Matching Pairs, and Rubric-based Essay prompts.
            </li>
            <li>
              <strong>Interactive Read Receipts:</strong> Teachers publish exam scopes and instantly view live student read receipts, tracking who acknowledged the scope.
            </li>
            <li>
              <strong>Rapid Score Entry Desk:</strong> Fast modal for grading objective and subjective sections, immediately pushing updates to institutional reports.
            </li>
            <li>
              <strong>Diary &amp; Essay Review Portal:</strong> Teacher grading workflow with status filters (pending vs. graded), inline feedback, and timestamp tracking.
            </li>
            <li>
              <strong>Printable Weekly Lesson Matrix:</strong> Print-ready spreadsheet layout displaying curriculum coverage, lesson summaries, and periods.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 border-b pb-1">🎓 Student Digital Portal</h4>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li>
              <strong>Attendance Rate Analytics:</strong> Displays real-time student attendance rate (%), total logged sessions, late counts (with total late minutes), excused sessions, and absences without heavy database overhead.
            </li>
            <li>
              <strong>Exam Scopes &amp; Live Acknowledgment:</strong> Students receive assessment scopes for all enrolled subjects and can confirm receipt with a 1-click acknowledgment button.
            </li>
            <li>
              <strong>Interactive Daily Notebook:</strong> Rich-text daily diary submission desk and vocabulary sentence creator.
            </li>
            <li>
              <strong>Dual Authentication:</strong> Passwordless or master-code student login system paired with faculty credentials.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 border-b pb-1">⚡ Engineering Challenges Solved</h4>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li>
              <strong>Firestore Query Optimization &amp; Read Quota Safeguards:</strong> Redesigned student log listeners to avoid full-collection reads (<code>O(N)</code> queries), replacing heavy historical queries with cached client-side aggregation.
            </li>
            <li>
              <strong>Polymorphic Assessment Data Engine:</strong> Engineered a flexible schema capable of rendering, saving, and auto-grading multiple disparate question models under a single uniform document structure.
            </li>
            <li>
              <strong>Dynamic Senior High School Course Resolution:</strong> Implemented an intelligent subject-matching algorithm with alias fallbacks (mapping DIASS to Values, EmpTech to TLE, PPG to Literature) ensuring generic teacher exam titles reliably slot into the correct institutional report columns.
            </li>
            <li>
              <strong>Excel-Accurate Web Spreadsheet Rendering:</strong> Built a 28-column master report that mirrors Google Sheets formatting in CSS/HTML with sticky student columns, pastel color banding, responsive printing styles, and native <code>.xls</code> binary generation.
            </li>
          </ul>
        </div>
      </div>
    ),
    isFeatured: true,
    icon: School,
  },
  {
    id: "apply-copilot",
    title: "Apply Copilot — Intelligent AI Job Application Agent",
    shortDescription:
      "Chrome Extension agent with a live Supabase vector brain that auto-fills job application forms, detects hidden instructions, and generates tailored cover letters.",
    businessImpact: {
      metric: "⚡ 90% Faster Application Workflows & Zero Missed Secret Instructions",
      summary:
        "Engineered with Google Gemini AI API and Supabase. Detects hidden secret words, scans dynamic DOM inputs, calculates job match scores (0-100%), and writes custom cover letters.",
    },
    category: "AI & Automation",
    techStack: [
      "Chrome Extension (MV3)",
      "React 19",
      "Supabase",
      "Gemini AI API",
      "Vite",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/GabbyDev0402/apply-copilot",
    liveLink: "https://github.com/GabbyDev0402/apply-copilot",
    imagePlaceholder: {
      color: "from-purple-600 via-indigo-600 to-blue-600",
      label: "Apply Copilot AI Assistant",
    },
    agenticWorkflow:
      "Architected using advanced agentic workflows via Antigravity IDE. Engineered an expandable Copilot Panel with multi-page job context overrides, live Supabase master profile syncing, secret instruction detectors, and Gemini 3.5 Flash prompt orchestration for DOM form filling.",
    fullDescription: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          <strong>Overview:</strong> Apply Copilot is an intelligent Chrome Extension engineered to eliminate the repetitive friction of job applications while preserving personalization. Powered by a live Supabase master brain and the Google Gemini API, it analyzes form fields, scans for hidden employer requirements, and automatically populates high-converting answers.
        </p>
        <h4 className="font-bold text-slate-800 border-b pb-1 mt-4">
          Key Features &amp; AI Capabilities
        </h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Expandable Glassmorphism Copilot Panel:</strong> A floating browser widget with intuitive multi-tab navigation (Actions, Manual Job Context override, Results).
          </li>
          <li>
            <strong>Live Supabase Brain Integration:</strong> Connects directly to a cloud PostgreSQL <code>master_profile</code> table, retrieving up-to-date work history, projects, and behavioral context on demand.
          </li>
          <li>
            <strong>Secret Word &amp; Instruction Scanner:</strong> Specifically analyzes job descriptions for hidden employer instructions (e.g. <em>&quot;Use the word Star in your subject&quot;</em>) and flags required attachments (video intro, PDF portfolio) in an interactive checklist.
          </li>
          <li>
            <strong>Job Compatibility Match Scorer:</strong> Evaluates candidate background against job postings, generating a 0–100% role compatibility score with 3 key justifications.
          </li>
          <li>
            <strong>Tailored 3-Paragraph Cover Letter Generator:</strong> Crafts concise, role-specific cover letters grounded in real achievements with 1-click clipboard copying.
          </li>
        </ul>
      </div>
    ),
    isFeatured: true,
    icon: Bot,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 240 : -240,
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 280, damping: 28 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 240 : -240,
    opacity: 0,
    scale: 0.94,
    transition: {
      x: { type: "spring" as const, stiffness: 280, damping: 28 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = projects.length;
  const activeProject = projects[currentIndex];
  const nextIndex = (currentIndex + 1) % total;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextProject = projects[nextIndex];
  const prevProject = projects[prevIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const IconComponent = activeProject.icon || Building2;
  const displayImage =
    activeProject.imageUrl ||
    (typeof activeProject.imagePlaceholder === "string"
      ? activeProject.imagePlaceholder
      : null);

  return (
    <section id="projects" className="py-20 bg-slate-100/70 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Featured Work &amp; ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Custom Web Portals &amp; Business Automation Systems
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Real-world software built to replace spreadsheets, automate administrative friction, and maximize operational ROI.
            </p>
          </div>

          {/* Interactive Peeking Stage Slider */}
          <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto min-h-[580px] py-4">
            {/* Left Peeking Card Preview (Desktop Only) */}
            {total > 1 && (
              <div
                onClick={handlePrev}
                role="button"
                tabIndex={0}
                aria-label="Previous project preview"
                className="hidden lg:block absolute -left-20 xl:-left-12 w-80 h-[520px] rounded-2xl overflow-hidden opacity-35 hover:opacity-75 transition-all duration-300 scale-[0.92] cursor-pointer z-0 border border-slate-300 bg-white shadow-md select-none group"
              >
                <div className="h-44 bg-slate-900 relative">
                  {prevProject.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={prevProject.imageUrl}
                      alt={prevProject.title}
                      className="w-full h-full object-cover object-top opacity-60"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-700 to-purple-800 opacity-60" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded-md border border-white/20">
                      ← Previous
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                    {prevProject.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {prevProject.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3">
                    {prevProject.shortDescription}
                  </p>
                </div>
              </div>
            )}

            {/* Active Center Card with Directional Sliding */}
            <div className="w-full max-w-2xl z-10 mx-auto px-2 sm:px-4">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeProject.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-400 ring-4 ring-indigo-500/10 flex flex-col justify-between"
                >
                  {/* Top Image / Visual Banner */}
                  <div className="h-60 sm:h-64 relative overflow-hidden bg-slate-900">
                    {displayImage ? (
                      <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={displayImage}
                          alt={activeProject.title}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20" />
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                          <div className="p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-md">
                            <IconComponent className="w-5 h-5" />
                          </div>
                        </div>
                        {activeProject.isFeatured && (
                          <div className="absolute top-3 right-3 z-20">
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50 animate-pulse">
                              🌟 FEATURED SHOWCASE
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                          {activeProject.inActiveProduction ? (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                              In Active Production @ Washington School
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white px-2.5 py-1 rounded-md shadow-xs">
                              Live Ready Tool
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${
                          typeof activeProject.imagePlaceholder === "object"
                            ? activeProject.imagePlaceholder.color
                            : "from-indigo-600 to-blue-700"
                        } p-6 flex flex-col justify-between relative overflow-hidden text-white`}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
                        <div className="flex items-center justify-between z-10">
                          <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/20">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          {activeProject.isFeatured && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50 animate-pulse">
                              🌟 FEATURED SHOWCASE
                            </span>
                          )}
                        </div>
                        <div className="z-10">
                          <p className="text-xs font-medium text-white/80 uppercase tracking-wider">
                            {activeProject.category}
                          </p>
                          <h4 className="text-base font-semibold text-white truncate mt-0.5">
                            {typeof activeProject.imagePlaceholder === "object"
                              ? activeProject.imagePlaceholder.label
                              : activeProject.title}
                          </h4>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          {activeProject.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {activeProject.shortDescription}
                      </p>

                      {/* Business Impact ROI Callout */}
                      {activeProject.businessImpact && (
                        <div className="p-3.5 rounded-xl bg-emerald-50/90 border border-emerald-200/90 text-xs text-emerald-950 space-y-1">
                          <div className="font-bold flex items-center gap-1.5 text-emerald-800 text-xs sm:text-sm">
                            <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{activeProject.businessImpact.metric}</span>
                          </div>
                          <p className="text-[11px] text-emerald-800 leading-snug">
                            {activeProject.businessImpact.summary}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Pills & Modal Trigger */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techStack.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProject(activeProject)}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-xl border border-indigo-200/80 hover:border-indigo-600 shadow-2xs transition-all duration-200 group/btn cursor-pointer"
                      >
                        Explore Complete Architecture &amp; Case Study
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Peeking Card Preview (Desktop Only) */}
            {total > 1 && (
              <div
                onClick={handleNext}
                role="button"
                tabIndex={0}
                aria-label="Next project preview"
                className="hidden lg:block absolute -right-20 xl:-right-12 w-80 h-[520px] rounded-2xl overflow-hidden opacity-35 hover:opacity-75 transition-all duration-300 scale-[0.92] cursor-pointer z-0 border border-slate-300 bg-white shadow-md select-none group"
              >
                <div className="h-44 bg-slate-900 relative">
                  {nextProject.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={nextProject.imageUrl}
                      alt={nextProject.title}
                      className="w-full h-full object-cover object-top opacity-60"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 opacity-60" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded-md border border-white/20">
                      Next Up →
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                    {nextProject.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3">
                    {nextProject.shortDescription}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Sliding Navigation Controls */}
          {total > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <div className="inline-flex items-center gap-3 bg-white p-2 rounded-2xl shadow-md border border-slate-200">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 transition-all cursor-pointer group"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2 px-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === i
                          ? "w-8 bg-indigo-600 shadow-xs"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-2 font-mono">
                    0{currentIndex + 1} / 0{total}
                  </span>
                </div>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-indigo-500/20 group"
                  aria-label="Next project"
                >
                  <span>Next Project</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto z-10 border border-slate-200 flex flex-col"
            >
              {/* Close (X) Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-md transition-colors focus:outline-hidden cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Banner / Image Header */}
              <div className="h-64 sm:h-72 relative overflow-hidden bg-slate-950 rounded-t-2xl shrink-0">
                {selectedProject.imageUrl || typeof selectedProject.imagePlaceholder === "string" ? (
                  <div className="w-full h-full relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        selectedProject.imageUrl ||
                        (typeof selectedProject.imagePlaceholder === "string"
                          ? selectedProject.imagePlaceholder
                          : "")
                      }
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 z-10 space-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-md">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {selectedProject.inActiveProduction
                            ? "In Active Production @ Washington School"
                            : "Verified Deployment"}
                        </div>
                        {selectedProject.isFeatured && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50">
                            🌟 FEATURED SHOWCASE
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${
                      typeof selectedProject.imagePlaceholder === "object"
                        ? selectedProject.imagePlaceholder.color
                        : "from-indigo-600 to-blue-700"
                    } p-8 flex flex-col justify-end relative overflow-hidden text-white`}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-full pointer-events-none" />
                    <div className="z-10 space-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/20 text-white">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Verified Architecture
                        </div>
                        {selectedProject.isFeatured && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50">
                            🌟 FEATURED SHOWCASE
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProject.title}
                      </h2>
                      <p className="text-sm text-white/80 font-medium">
                        Screenshot:{" "}
                        {typeof selectedProject.imagePlaceholder === "object"
                          ? selectedProject.imagePlaceholder.label
                          : selectedProject.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Inner Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-1">
                {/* Business Impact ROI Callout */}
                {selectedProject.businessImpact && (
                  <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 via-emerald-50/40 to-slate-50 border border-emerald-200/80 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <div className="p-2 rounded-lg bg-emerald-600 text-white shadow-xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <span>Business Impact &amp; Return on Investment (ROI)</span>
                    </div>
                    <p className="text-sm font-semibold text-emerald-950">
                      {selectedProject.businessImpact.metric}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {selectedProject.businessImpact.summary}
                    </p>
                  </div>
                )}

                {/* Case Study Details */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Overview &amp; Technical Case Study
                  </h3>
                  <div className="text-slate-700 text-base leading-relaxed font-normal">
                    {selectedProject.fullDescription}
                  </div>
                </div>

                {/* Agentic Engineering Workflow Callout Box */}
                <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-indigo-50/90 via-indigo-50/40 to-slate-50 border border-indigo-200/80 space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm tracking-tight">
                    <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-xs">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                    <span>Agentic Engineering Workflow</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-normal">
                    {selectedProject.agenticWorkflow}
                  </p>
                </div>

                {/* Demo Credentials or Production Notice Box */}
                {selectedProject.demoCredentials ? (
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                      <Key className="w-4 h-4 text-indigo-600" />
                      <span>Demo Access Credentials</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-400 block font-medium text-[10px] uppercase">
                          Role
                        </span>
                        <span className="font-semibold text-slate-800">
                          {selectedProject.demoCredentials.role}
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-400 block font-medium text-[10px] uppercase">
                          Email
                        </span>
                        <span className="font-semibold text-slate-800 truncate block">
                          {selectedProject.demoCredentials.email}
                        </span>
                      </div>
                      {selectedProject.demoCredentials.password && (
                        <div className="p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-slate-400 block font-medium text-[10px] uppercase">
                            Password
                          </span>
                          <span className="font-semibold text-slate-800 font-mono">
                            {selectedProject.demoCredentials.password}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>🏫 Live Production System — Active Institutional Use</span>
                    </div>
                    <p className="text-xs text-emerald-900 leading-relaxed font-normal">
                      Public demo access credentials are disabled to safeguard private student profiles, daily diaries, and school administrative data at Washington School International.
                    </p>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Technologies &amp; Architecture
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-900" />
                    View Source Code (GitHub)
                  </a>

                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-500/20 transition-all"
                  >
                    Launch Live App
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
