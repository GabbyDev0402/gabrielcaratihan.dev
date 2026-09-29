"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  School,
  Building2,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Layers,
  Calendar,
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
  fullDescription: React.ReactNode;
  techStack: string[];
  inActiveProduction?: boolean;
  githubLink: string;
  liveLink: string;
  imageUrl?: string;
  imagePlaceholder?: {
    color: string;
    label: string;
  };
  icon?: typeof School;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    id: "wsi-portal",
    title: "Washington School International Online Portal",
    shortDescription:
      "A custom-built school operations platform that replaced manual spreadsheets, centralized attendance tracking, automated grading workflows, and provided administrators with real-time academic visibility.",
    businessImpact: {
      metric: "⚡ 80%+ Reduction in Operational Friction & 100% Automated Grade Sync",
      summary:
        "In active daily production at Washington School International. Replaced manual spreadsheets with a 24-column Academic Performance Grid, in-house assessment tools, and real-time attendance analytics.",
    },
    category: "EdTech & Operations",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Firebase Firestore",
      "Firebase Auth",
      "Spreadsheet Engine",
    ],
    inActiveProduction: true,
    githubLink: "https://github.com/GabbyDev0402/wcs-attendancetracker",
    liveLink: "https://wcsattendancetracker.netlify.app/",
    imageUrl: "/images/wsi-online-portal-screenshots/admin-dashboard-screenshot.png",
    imagePlaceholder: {
      color: "from-blue-600 to-indigo-800",
      label: "Washington School International Online Portal",
    },
    fullDescription: (
      <div className="space-y-8 text-slate-700">
        {/* Production Verification Badge */}
        <div className="p-4 rounded-xl bg-emerald-50/90 border border-emerald-200 space-y-1 text-emerald-950">
          <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
            <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>🏫 Deployed &amp; In Active Daily Production at Washington School International</span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed font-normal">
            Orchestrating daily class roll calls, exam workflows, student diaries, and institutional grading reports across distance-learning classrooms.
          </p>
        </div>

        {/* 1. CLIENT PROBLEM */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Client Problem: Disconnected Spreadsheets &amp; Administrative Overhead
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Administrators and teachers relied on disconnected spreadsheets, manual grade calculations, attendance paper logs, and multiple separate communication channels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Duplicate Data Entry
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Faculty had to re-type attendance marks and test scores across daily logs, subject sheets, and administrative binders.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Reporting Delays
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Compiling multi-subject quarterly report cards required days of manual administrative consolidation and formula verification.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Human Error &amp; Formula Drift
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Accidental cell overwrites, broken formulas, and untracked edits in shared spreadsheets jeopardized academic records.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Administrative Burden
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Staff spent hours each week chasing missing exam submissions instead of focusing on instruction and student care.
              </p>
            </div>
          </div>
        </div>

        {/* 2. BUSINESS SOLUTION */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Business Solution: Unified School Operations Platform
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Designed and deployed a centralized platform that allows administrators, teachers, and students to operate inside one integrated system.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
            <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider">
              The platform centralizes:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Daily Attendance</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Automated Grading</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>In-House Exams</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Student Submissions</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Academic Reports</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Faculty Workflows</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BUSINESS RESULTS */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Business Results &amp; Operational ROI
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                80%+ Reduction in Operational Friction
              </span>
              <p className="text-slate-600 leading-relaxed">
                Eliminated manual attendance tallies, paper logbooks, and fragmented chat communications.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                100% Automated Grade Synchronization
              </span>
              <p className="text-slate-600 leading-relaxed">
                Scores entered in classroom assessments calculate directly into the institutional performance master grid.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                Active Production Deployment
              </span>
              <p className="text-slate-600 leading-relaxed">
                Officially used every school day by administrators, faculty, and international distance learners.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                Real-Time Academic Visibility
              </span>
              <p className="text-slate-600 leading-relaxed">
                Leadership can audit missing grades in 1 click and generate copy-paste notices for responsible teachers.
              </p>
            </div>
          </div>
        </div>

        {/* 4. KEY FEATURES */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
              4
            </div>
            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Key Features by Operational Role
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Admin Console */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
              <span className="font-bold text-slate-900 block text-sm border-b pb-1">
                🏛️ Administrative Dashboard
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Operational Reporting:</strong> Live roll call rates, active enrollment, and session metrics.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Performance Tracking:</strong> Master grid reconciling Core and Added subjects with .xls exports.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Staff Management:</strong> Teacher compliance center auditing pending assignment reviews.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Student Onboarding:</strong> 1-click password reset triggers and global student credential directory.</span>
                </li>
              </ul>
            </div>

            {/* Teacher Studio */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
              <span className="font-bold text-slate-900 block text-sm border-b pb-1">
                👨‍🏫 Faculty Workspace
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Attendance Tracking:</strong> Filterable class sessions with late-minute counters.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Assessment Creation:</strong> In-house studio for multiple choice, identification, and essays.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Assignment Grading:</strong> Rapid scoring desks and status-filtered student diary reviews.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Classroom Workflows:</strong> Print-ready weekly curriculum lesson matrices.</span>
                </li>
              </ul>
            </div>

            {/* Student Portal */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
              <span className="font-bold text-slate-900 block text-sm border-b pb-1">
                🎓 Student Portal
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Attendance Analytics:</strong> Personal attendance rate (%), total sessions, and late minutes.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Assignment Submission:</strong> Interactive daily diary and vocabulary sentence creator.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Academic Standing:</strong> Clear visibility into enrolled subjects and submission status.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Exam Tracking:</strong> Assessment scopes delivered with 1-click student read receipts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. TECHNICAL HIGHLIGHTS (Collapsible Section) */}
        <div className="space-y-3">
          <details className="group border border-slate-200 rounded-xl p-4 bg-slate-50/70 hover:bg-slate-50 transition-colors cursor-pointer">
            <summary className="font-bold text-slate-800 text-sm flex items-center justify-between select-none">
              <span className="flex items-center gap-2">
                <span>⚙️ Technical Highlights &amp; Architecture</span>
                <span className="text-[11px] font-normal text-slate-500">(Click to expand engineering details)</span>
              </span>
              <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pt-4 border-t border-slate-200/80 mt-3 space-y-2.5 text-xs text-slate-600">
              <p>
                <strong>Database Query Safeguards:</strong> Redesigned student log listeners to avoid full-collection reads, replacing heavy historical queries with cached client-side aggregation to prevent read quota spikes.
              </p>
              <p>
                <strong>Subject Resolution Engine:</strong> Implemented an intelligent subject-matching algorithm with alias fallbacks (mapping course titles like DIASS to Values, EmpTech to TLE, and PPG to Literature) ensuring teacher exam titles reliably slot into the correct institutional report columns.
              </p>
              <p>
                <strong>Assessment Schema:</strong> Engineered a uniform schema capable of rendering, saving, and auto-grading Multiple Choice, Exact Identification, Vocabulary Matching Pairs, and Rubrics under one uniform document model.
              </p>
              <p>
                <strong>Web Spreadsheet Rendering:</strong> Built a 28-column master report that mirrors Google Sheets formatting in CSS/HTML with sticky student columns, pastel color banding, responsive printing styles, and native client-side <code>.xls</code> binary generation.
              </p>
              <p>
                <strong>Architecture:</strong> React 19, Vite v8, Tailwind CSS v4, Firebase Firestore &amp; Authentication.
              </p>
            </div>
          </details>
        </div>

        {/* 6. PROJECT GALLERY */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b pb-2">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              📸 Project Gallery: Production System in Action
            </h4>
            <span className="text-[11px] text-slate-400">Click any image to inspect full 1920×1200 HD</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {/* 1. Admin Dashboard */}
            <a
              href="/images/wsi-online-portal-screenshots/admin-dashboard-screenshot.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-online-portal-screenshots/admin-dashboard-screenshot.png"
                alt="Executive Admin Dashboard"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">Executive Admin Dashboard</span>
                  <span className="text-[11px] text-slate-500">Live school operations, active enrollment metrics, and roll call monitoring</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            {/* 2. Admin 24-Column Grid Console */}
            <a
              href="/images/wsi-online-portal-screenshots/admin-console_screensh.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-online-portal-screenshots/admin-console_screensh.png"
                alt="24-Column Academic Performance Grid"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">24-Column Academic Master Grid</span>
                  <span className="text-[11px] text-slate-500">Spreadsheet-accurate grading matrix with dynamic SHS track resolution &amp; .xls export</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            {/* 3. Teacher Dashboard */}
            <a
              href="/images/wsi-online-portal-screenshots/teacher_dashboard_screenshot.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-online-portal-screenshots/teacher_dashboard_screenshot.png"
                alt="Teacher Schedule & Operations Hub"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">Teacher Operations &amp; Daily Schedule</span>
                  <span className="text-[11px] text-slate-500">Filterable daily class sessions, pending assignment queues, and roll call controls</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            {/* 4. Teacher Classroom Portal */}
            <a
              href="/images/wsi-online-portal-screenshots/teacher-classroom-portal-screenshot.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-online-portal-screenshots/teacher-classroom-portal-screenshot.png"
                alt="Teacher Classroom Studio"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">Teacher Classroom Studio</span>
                  <span className="text-[11px] text-slate-500">Live attendance logging with late-minute counters, scoring desks, and lesson matrix</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            {/* 5. In-App Quiz & Exam Builder */}
            <a
              href="/images/wsi-online-portal-screenshots/in-app_quiz_builder.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-online-portal-screenshots/in-app_quiz_builder.png"
                alt="Polymorphic In-App Quiz & Exam Builder"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">In-App Quiz &amp; Exam Builder</span>
                  <span className="text-[11px] text-slate-500">In-house assessment studio supporting MC, Identification, Matching Pairs, and Essay rubrics</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            {/* 6. Student Digital Portal */}
            <a
              href="/images/wsi-online-portal-screenshots/student-portal-screenshot.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-online-portal-screenshots/student-portal-screenshot.png"
                alt="Student Digital Portal"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">Student Digital Portal</span>
                  <span className="text-[11px] text-slate-500">Personalized dashboard with attendance analytics (%), late-minute tracking, &amp; exam scopes</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            {/* 7. Student Classroom Portal */}
            <a
              href="/images/wsi-online-portal-screenshots/student-classroom-portals-screenshot.png"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-online-portal-screenshots/student-classroom-portals-screenshot.png"
                alt="Student Classroom View & Daily Assignments"
                className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">Student Classroom View &amp; Daily Assignments</span>
                  <span className="text-[11px] text-slate-500">Daily interactive diary submission desk, vocabulary sentence builder, and 1-click exam scope confirmations</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>
          </div>
        </div>

        {/* 7. CTA BANNER INSIDE MODAL */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-slate-50 border border-indigo-200/90 text-center space-y-3">
          <h4 className="text-base font-bold text-slate-900">
            Need a Similar Custom Operations Portal for Your School or Team?
          </h4>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Let&apos;s eliminate manual spreadsheets and centralize your operations into an integrated system built around how your team works.
          </p>
          <div className="pt-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-indigo-500/20 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Workflow Review</span>
            </a>
          </div>
        </div>
      </div>
    ),
    isFeatured: true,
    icon: School,
  },
  {
    id: "wsi-library",
    title: "Washington School Learning Resource Center",
    shortDescription:
      "A modern library management platform that replaced paper circulation logs, manual cataloging, and fragmented inventory tracking.",
    businessImpact: {
      metric: "⚡ 93% Faster Cataloging & <10s Circulation Transactions",
      summary:
        "In active production at Washington School Philippines. Features automatic ISBN book data retrieval, barcode-driven checkout desks, 24/7 public catalog search, and automated clearance audits.",
    },
    category: "EdTech & Operations",
    techStack: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (PostgreSQL & RLS)",
      "React-Barcode",
    ],
    inActiveProduction: true,
    githubLink: "https://github.com/supportwashingtonschool/wsi-library-management-system",
    liveLink: "https://wsi-library.netlify.app/",
    imageUrl: "/images/wsi-library-opac.png",
    imagePlaceholder: {
      color: "from-blue-700 via-indigo-700 to-sky-800",
      label: "Washington School Learning Resource Center",
    },
    fullDescription: (
      <div className="space-y-8 text-slate-700">
        {/* Production Verification Badge */}
        <div className="p-4 rounded-xl bg-emerald-50/90 border border-emerald-200 space-y-1 text-emerald-950">
          <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
            <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>🏫 Deployed &amp; In Active Production at Washington School Philippines</span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed font-normal">
            A centralized library management system and 24/7 public OPAC catalog replacing manual paper logs and book registries.
          </p>
        </div>

        {/* 1. CLIENT PROBLEM */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Client Problem: Manual Paper Records &amp; Ingestion Bottlenecks
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Library staff spent significant operational time dealing with friction across manual cataloging, paper checkouts, and student clearance:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Entering Book Data Manually
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Staff spent 8 to 12 minutes per book hand-typing titles, authors, publishers, and classification numbers into spreadsheets.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Paper-Based Rentals
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Handwritten borrower cards, paper logbooks, and physical due-date stamping caused long queues and lost slips.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Managing Overdue Books &amp; Losses
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Unaccounted missing books were discovered only during annual manual inventory counts without automated borrower alerts.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Student Clearance Bottlenecks
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Staff spent days manually cross-checking physical binders during graduation and term clearance periods.
              </p>
            </div>
          </div>
        </div>

        {/* 2. BUSINESS SOLUTION */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Business Solution: Centralized Library Management &amp; Self-Service Catalog
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Built a centralized library management and self-service catalog platform designed for speed, accuracy, and student self-sufficiency:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
            <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider">
              System Capabilities:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>ISBN Lookup Automation:</strong> 1-click book metadata auto-fetch populating title, author, and cover art in seconds.</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Barcode Workflows:</strong> In-browser generation of printable label sheets for book spines and student IDs.</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Online Catalog Search:</strong> 24/7 web access for students and parents to check real-time shelf availability.</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Student Self-Service:</strong> Zero-password Student ID lookup showing active loans, due dates, and hold status.</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Circulation Management:</strong> High-speed barcode scan checkout and return modal (&lt;10s per student).</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Administrative Oversight:</strong> Automated overdue tracking, inventory loss auditing, and KPI analytics.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BUSINESS RESULTS */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Business Results &amp; Operational ROI
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                93% Faster Cataloging
              </span>
              <p className="text-slate-600 leading-relaxed">
                Book ingestion dropped from 8–12 minutes down to under 40 seconds per title with zero data entry errors.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                Under 10-Second Circulation Transactions
              </span>
              <p className="text-slate-600 leading-relaxed">
                Scan-based checkout process replaced handwritten borrower cards and physical due date stamping.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                24/7 Public Catalog Availability
              </span>
              <p className="text-slate-600 leading-relaxed">
                Instant anytime book discovery with real-time copy availability for students and parents from any device.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                Reduced Inventory Loss &amp; Automated Auditing
              </span>
              <p className="text-slate-600 leading-relaxed">
                40–60% reduction in unreturned inventory shrinkage, plus instant self-service clearance auditing with zero staff bottleneck.
              </p>
            </div>
          </div>
        </div>

        {/* 4. KEY FEATURES */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
              4
            </div>
            <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              Key Features &amp; Functional Modules
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5">
              <span className="font-bold text-slate-900 block text-xs border-b pb-1">
                📚 Cataloging
              </span>
              <p className="text-slate-600 leading-relaxed">
                Automatic book data retrieval via multi-tier ISBN auto-fetch, batch barcode sticker sheet generation, and cover image ingestion.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5">
              <span className="font-bold text-slate-900 block text-xs border-b pb-1">
                ⚡ Circulation
              </span>
              <p className="text-slate-600 leading-relaxed">
                Scan-based checkout and return desk with real-time shelf status updates, automatic due dates, and overdue day counters.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5">
              <span className="font-bold text-slate-900 block text-xs border-b pb-1">
                🎓 Student Access
              </span>
              <p className="text-slate-600 leading-relaxed">
                24/7 responsive public search portal (OPAC), category filters, and zero-password student clearance and active loan lookups.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5">
              <span className="font-bold text-slate-900 block text-xs border-b pb-1">
                📊 Administration
              </span>
              <p className="text-slate-600 leading-relaxed">
                Real-time KPI dashboards, inventory status reporting (Available, Borrowed, Lost), and automated overdue borrower logging.
              </p>
            </div>
          </div>
        </div>

        {/* 5. TECHNICAL HIGHLIGHTS (Collapsible Section) */}
        <div className="space-y-3">
          <details className="group border border-slate-200 rounded-xl p-4 bg-slate-50/70 hover:bg-slate-50 transition-colors cursor-pointer">
            <summary className="font-bold text-slate-800 text-sm flex items-center justify-between select-none">
              <span className="flex items-center gap-2">
                <span>⚙️ Technical Highlights &amp; Architecture</span>
                <span className="text-[11px] font-normal text-slate-500">(Click to expand engineering details)</span>
              </span>
              <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pt-4 border-t border-slate-200/80 mt-3 space-y-2.5 text-xs text-slate-600">
              <p>
                <strong>Multi-Tier ISBN Ingestion Pipeline:</strong> Queries Google Books API with automatic fallback to Open Library API before prompting for manual override, ensuring resilient metadata retrieval for diverse K-12 books.
              </p>
              <p>
                <strong>In-Browser Barcode Engine:</strong> Code128 barcode rendering directly in-browser paired with a custom print stylesheet (<code>@media print</code>) to batch-print standardized barcode label sheets directly onto standard sticker paper without proprietary software.
              </p>
              <p>
                <strong>App Router &amp; Server Components:</strong> Built with Next.js 14 App Router, React Server Components (RSC), and Server Actions for fast catalog search indexing, low bandwidth overhead, and atomic circulation transactions.
              </p>
              <p>
                <strong>Row-Level Security (RLS):</strong> Supabase PostgreSQL database architecture with granular RLS policies isolating administrative circulation write capabilities from public OPAC read queries.
              </p>
              <p>
                <strong>Hosting:</strong> Netlify with automated git-triggered deployments and standard USB/Bluetooth barcode scanner compatibility.
              </p>
            </div>
          </details>
        </div>

        {/* 6. PROJECT GALLERY */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b pb-2">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              📸 Project Gallery: Production System in Action
            </h4>
            <span className="text-[11px] text-slate-400">Click any image to inspect full HD</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <a
              href="/images/wsi-library-opac.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-library-opac.png"
                alt="WSI Library OPAC Catalog"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">24/7 Public OPAC &amp; Student Catalog</span>
                  <span className="text-[11px] text-slate-500">Live search with real-time copy availability and genre browsing</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            <a
              href="/images/wsi-library-admin.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-library-admin.png"
                alt="Executive Librarian Dashboard"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">Executive Librarian Dashboard</span>
                  <span className="text-[11px] text-slate-500">Real-time KPIs, overdue auditing, and loan velocity metrics</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            <a
              href="/images/wsi-library-circulation.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-library-circulation.png"
                alt="Rapid Circulation Desk"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">Rapid Circulation Desk Modal</span>
                  <span className="text-[11px] text-slate-500">Barcode-driven student loan checkout and check-in (&lt;10s)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>

            <a
              href="/images/wsi-library-barcodes.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 group block hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wsi-library-barcodes.png"
                alt="Printable Barcode Sheet Generator"
                className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-xs text-slate-800 block">Batch Barcode Label Generator</span>
                  <span className="text-[11px] text-slate-500">Code128 in-browser rendering with printable sticker sheet CSS</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
              </div>
            </a>
          </div>
        </div>

        {/* 7. CTA BANNER INSIDE MODAL */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-slate-50 border border-indigo-200/90 text-center space-y-3">
          <h4 className="text-base font-bold text-slate-900">
            Need an Inventory or Resource Management Portal for Your Team?
          </h4>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Let&apos;s eliminate manual checkouts, lost paperwork, and untracked assets with a scan-based cloud portal.
          </p>
          <div className="pt-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-indigo-500/20 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Workflow Review</span>
            </a>
          </div>
        </div>
      </div>
    ),
    isFeatured: true,
    icon: BookOpen,
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
    (typeof activeProject.imagePlaceholder === "object"
      ? null
      : activeProject.imagePlaceholder);

  return (
    <section id="projects" className="py-20 bg-slate-100/70 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Proven Case Studies &amp; Operational ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Custom Business Portals Running in Production
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Real-world systems engineered to replace spreadsheets, automate administrative friction, and eliminate operational bottlenecks for schools and organizations.
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
                      ← Previous Case Study
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
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50">
                              ⭐ PROVEN PRODUCTION SYSTEM
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                          {activeProject.inActiveProduction ? (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                              In Active Daily Production @ Washington School
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white px-2.5 py-1 rounded-md shadow-xs">
                              Live Production Portal
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
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50">
                              ⭐ PROVEN PRODUCTION SYSTEM
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

                    {/* Operational Scope & Modal Trigger */}
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
                        Explore Case Study &amp; Business ROI
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
                      Next Case Study →
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
                  <span>Next Case Study</span>
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
                {selectedProject.imageUrl ? (
                  <div className="w-full h-full relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 z-10 space-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-md">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          In Active Production @ Washington School
                        </div>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-blue-700 p-8 flex flex-col justify-end text-white">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedProject.title}
                    </h2>
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

                {/* 7-Part Case Study Content */}
                <div className="space-y-6">
                  {selectedProject.fullDescription}
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-900" />
                      View Source Code
                    </a>

                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                      Launch Live Portal
                    </a>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-500/20 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Free Workflow Review
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
