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
  UserCheck,
  ChevronRight,
  ChevronDown,
  ChevronUp,
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
    id: "attendance-pro",
    title: "AttendancePro Tracker v2.0",
    shortDescription:
      "Proactive session-based attendance & student classroom portal actively deployed and utilized in daily operations at Washington School.",
    businessImpact: {
      metric: "⚡ 80% Reduction in Attendance Logging Time & Zero Ghost Logins",
      summary:
        "Officially deployed at Washington School. Features real-time metric synchronization, dynamic student classroom portals, automated homework lockouts, and date range filters.",
    },
    category: "EdTech & Analytics",
    techStack: ["React", "Next.js", "NoSQL", "Tailwind CSS", "Framer Motion"],
    inActiveProduction: true,
    githubLink: "https://github.com/GabbyDev0402/wcs-attendancetracker",
    liveLink: "https://wcsattendancetracker.netlify.app/",
    imageUrl: "/images/attendance-pro-tracker.png",
    imagePlaceholder: {
      color: "from-blue-600 to-indigo-800",
      label: "AttendancePro v2.0 Production System",
    },
    agenticWorkflow:
      "Architected using advanced agentic workflows via Antigravity IDE. Rapidly engineered isolated student classroom routing (/student/class/:classId), real-time attendance metric synchronization across 3 user roles, automated homework deadline lockdown timers, and AuthContext profile revocation hooks.",
    fullDescription: (
      <div className="space-y-4 text-sm text-slate-600">
        <div className="p-4 rounded-xl bg-emerald-50/90 border border-emerald-200 space-y-1 text-emerald-950">
          <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
            <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>🏫 Officially Deployed &amp; In Active Production at Washington School</span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed font-normal">
            This platform is actively utilized in daily institutional operations by Washington School. Demo logins are disabled to safeguard private student and administrative data.
          </p>
        </div>

        <p>
          <strong>Overview:</strong> AttendancePro Tracker v2.0 is an enterprise educational management system engineered to eliminate student truancy, streamline daily attendance logging, and manage student classroom assignments.
        </p>

        <h4 className="font-bold text-slate-800 border-b pb-1 mt-4">
          ✨ Highlights of What&apos;s Included in Version 2.0
        </h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Isolated Student Classroom Portals (<code>/student/class/:classId</code>):</strong> Dynamic portal routing for students to access dedicated classroom environments with instructor details, lesson topics, and targeted vocabulary homework.
          </li>
          <li>
            <strong>Attendance Metric Engine Sync:</strong> Real-time calculation of student presence, lateness, absences, and excused counts synchronized instantly across Admin, Teacher, and Student views.
          </li>
          <li>
            <strong>Homework Deadlines &amp; Lockdown:</strong> Automated lockouts for past-due vocabulary assignments to prevent overdue submissions.
          </li>
          <li>
            <strong>Vocabulary &amp; History Date Filters:</strong> Rolling 7-day windows and calendar date pickers added to both Student and Teacher portals to prevent homework accumulation.
          </li>
          <li>
            <strong>Unsubmit &amp; Edit Capability:</strong> Students can unsubmit pending daily diaries or vocabulary entries to edit and resubmit, instantly syncing with teacher review queues.
          </li>
          <li>
            <strong>Strict Multi-Class Enrollment Mapping:</strong> Teacher Roster Manager updated to accurately parse and display all enrolled classes per student.
          </li>
          <li>
            <strong>Deleted Profile Access Revocation:</strong> Automatic detection and sign-out in <code>AuthContext</code> to block ghost logins for deleted student profiles.
          </li>
        </ul>
      </div>
    ),
    isFeatured: true,
    icon: UserCheck,
  },
  {
    id: "enterprise-intranet",
    title: "Enterprise Communications Intranet",
    shortDescription:
      "Secure B2B announcement portal built for institutional compliance and administrative oversight.",
    businessImpact: {
      metric: "⚡ 100% Policy Compliance Verification & Zero Lost Announcements",
      summary:
        "Replaced unorganized email blasts and physical bulletin boards with digital read-receipt tracking and instant CSV compliance reporting.",
    },
    category: "Enterprise HR & Portals",
    fullDescription:
      "Designed for high-compliance enterprise environments, this intranet platform enforces strict Role-Based Access Control (RBAC) via Cloud Firestore Security Rules, tracks institutional compliance using a digital read-receipt engine, and provides automated client-side CSV audit log exports powered by browser Blob APIs.",
    agenticWorkflow:
      "Architected and engineered using advanced agentic workflows via the Antigravity IDE. Directed AI models (Gemini 3.5 Flash / 3.1 Pro) to rapidly prototype UI/UX, establish NoSQL data schemas, enforce Cloud Firestore security rules, and generate automated Playwright E2E testing suites, significantly reducing the development lifecycle.",
    techStack: ["React", "Firestore", "RBAC", "Tailwind CSS", "TypeScript"],
    demoCredentials: {
      role: "Compliance Officer",
      email: "audit@enterprise-intranet.demo",
      password: "compliancePass2026!",
    },
    githubLink: "https://github.com/GabbyDev0402/washington-school-portal",
    liveLink: "https://washington-school-portal.netlify.app/admin",
    imageUrl: "/images/washington-school-portal.png",
    imagePlaceholder: {
      color: "from-slate-800 to-indigo-900",
      label: "Washington School Intranet Console",
    },
    icon: Building2,
  },
  {
    id: "washington-portal",
    title: "Washington Assessment Portal",
    shortDescription:
      "A Multi-Tenant Learning Management System (LMS) with automated grading and institutional analytics.",
    businessImpact: {
      metric: "⚡ Saved Teachers 15+ Hours/Week in Manual Grading",
      summary:
        "Replaced paper exam sheets and manual grade calculations with a dynamic assessment builder and instant master gradebook analytics.",
    },
    category: "EdTech & Analytics",
    fullDescription:
      "Engineered to resolve administrative friction in educational institutions, this multi-tenant LMS features dynamic exam creation powered by a polymorphic React form engine, real-time master gradebooks with aggregated pivot-table calculations, and strict multi-tenant data isolation with time-gated client routing for secure assessment environments.",
    agenticWorkflow:
      "Architected and engineered using advanced agentic workflows via the Antigravity IDE. Directed AI models (Gemini 3.5 Flash / 3.1 Pro) to rapidly prototype UI/UX, establish NoSQL data schemas, enforce Cloud Firestore security rules, and generate automated Playwright E2E testing suites, significantly reducing the development lifecycle.",
    techStack: ["React", "Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    demoCredentials: {
      role: "Institutional Administrator",
      email: "admin@washington-lms.demo",
      password: "demoPass2026!",
    },
    githubLink: "https://github.com/GabbyDev0402/washington-school-portal",
    liveLink: "https://wcs-exam-portal.netlify.app/",
    imageUrl: "/images/washington-exam-portal.png",
    imagePlaceholder: {
      color: "from-indigo-600 to-blue-700",
      label: "Washington LMS Admin Dashboard",
    },
    icon: School,
  },
];

const categories = [
  "All Projects",
  "AI & Automation",
  "Enterprise HR & Portals",
  "EdTech & Analytics",
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All Projects") return true;
    return p.category === activeCategory;
  });

  const displayedProjects =
    activeCategory === "All Projects" && !isExpanded
      ? filteredProjects.slice(0, 3)
      : filteredProjects;

  return (
    <section id="projects" className="py-20 bg-slate-100/70 border-y border-slate-200/80">
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

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setIsExpanded(false);
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {displayedProjects.map((project, idx) => {
                const IconComponent = project.icon || Building2;
                const displayImage =
                  project.imageUrl ||
                  (typeof project.imagePlaceholder === "string"
                    ? project.imagePlaceholder
                    : null);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                    className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative ${
                      project.isFeatured
                        ? "ring-2 ring-indigo-500 border-2 border-indigo-400 shadow-indigo-500/15"
                        : "border border-slate-200/80"
                    }`}
                  >
                    {/* Top Image / Visual Banner */}
                    <div className="h-56 relative overflow-hidden bg-slate-900">
                      {displayImage ? (
                        <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={displayImage}
                            alt={project.title}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                          <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-slate-900/70 backdrop-blur-md text-white border border-white/20">
                              <IconComponent className="w-4 h-4" />
                            </div>
                          </div>
                          {project.isFeatured && (
                            <div className="absolute top-3 right-3 z-20">
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-2.5 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50 animate-pulse">
                                🌟 NEW &amp; FEATURED
                              </span>
                            </div>
                          )}
                          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                            {project.inActiveProduction ? (
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                                In Active Production @ Washington School
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white px-2 py-0.5 rounded-md shadow-xs">
                                Live App Ready
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${
                            typeof project.imagePlaceholder === "object"
                              ? project.imagePlaceholder.color
                              : "from-indigo-600 to-blue-700"
                          } p-6 flex flex-col justify-between relative overflow-hidden text-white`}
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
                          <div className="flex items-center justify-between z-10">
                            <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/20">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            {project.isFeatured ? (
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50 animate-pulse">
                                🌟 NEW &amp; FEATURED
                              </span>
                            ) : (
                              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                                SaaS Solution
                              </span>
                            )}
                          </div>
                          <div className="z-10">
                            <p className="text-xs font-medium text-white/80 uppercase tracking-wider">
                              AI &amp; RAG Architecture
                            </p>
                            <h4 className="text-sm font-semibold text-white truncate mt-0.5">
                              {typeof project.imagePlaceholder === "object"
                                ? project.imagePlaceholder.label
                                : project.title}
                            </h4>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                          {project.shortDescription}
                        </p>

                        {/* Business Impact ROI Callout */}
                        {project.businessImpact && (
                          <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-950 space-y-1">
                            <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                              <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{project.businessImpact.metric}</span>
                            </div>
                            <p className="text-[11px] text-emerald-800 leading-snug">
                              {project.businessImpact.summary}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="space-y-4 pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* See More Details Button */}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-xl border border-indigo-200/80 hover:border-indigo-600 shadow-2xs transition-all duration-200 group/btn"
                        >
                          See More Details &amp; Architecture
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Explore Catalog Expansion Button */}
          {activeCategory === "All Projects" && (
            <div className="pt-4 text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-200 hover:border-indigo-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                {isExpanded ? (
                  <>
                    Show Featured Projects Only
                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                ) : (
                  <>
                    Explore Full Project Catalog ({projects.length} Projects)
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Framer Motion Deep-Dive Modal */}
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
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-md transition-colors focus:outline-hidden"
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
                            : "Verified SaaS Deployment"}
                        </div>
                        {selectedProject.isFeatured && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg ring-2 ring-amber-300/50">
                            🌟 NEW &amp; FEATURED
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
                            🌟 NEW &amp; FEATURED
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProject.title}
                      </h2>
                      <p className="text-sm text-white/80 font-medium">
                        Screenshot Placeholder:{" "}
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
                {/* Business Impact ROI Summary Callout */}
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

                {/* Full Description - Rendered directly as React Node */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Overview &amp; Architecture
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
                      Public demo access credentials are disabled to safeguard private student profiles, daily diaries, and school administrative data at Washington School.
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
