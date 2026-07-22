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
  ShieldCheck,
} from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  agenticWorkflow: string;
  techStack: string[];
  demoCredentials: {
    role: string;
    email: string;
    password?: string;
  };
  githubLink: string;
  liveLink: string;
  imageUrl?: string;
  imagePlaceholder: {
    color: string;
    label: string;
  };
  icon: typeof School;
}

const projects: Project[] = [
  {
    id: "enterprise-intranet",
    title: "Enterprise Communications Intranet",
    shortDescription:
      "Secure B2B announcement portal built for institutional compliance and administrative oversight.",
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
  {
    id: "attendance-pro",
    title: "AttendancePro Tracker",
    shortDescription:
      "Proactive session-based attendance management system with early-warning truancy detection.",
    fullDescription:
      "A specialized tracking system engineered to eliminate student truancy. It optimizes NoSQL database reads using session-grouped data modeling, calculates automated instruction-loss metrics, and alerts administrative staff to at-risk attendance patterns using proactive early-warning algorithms.",
    agenticWorkflow:
      "Architected and engineered using advanced agentic workflows via the Antigravity IDE. Directed AI models (Gemini 3.5 Flash / 3.1 Pro) to rapidly prototype UI/UX, establish NoSQL data schemas, enforce Cloud Firestore security rules, and generate automated Playwright E2E testing suites, significantly reducing the development lifecycle.",
    techStack: ["React", "NoSQL", "Next.js", "Tailwind CSS", "Framer Motion"],
    demoCredentials: {
      role: "School Administrator",
      email: "admin@attendancepro.demo",
      password: "attendancePass2026!",
    },
    githubLink: "https://github.com/GabbyDev0402/wcs-attendancetracker",
    liveLink: "https://wcsattendancetracker.netlify.app/",
    imageUrl: "/images/attendance-pro-tracker.png",
    imagePlaceholder: {
      color: "from-blue-600 to-indigo-800",
      label: "AttendancePro Algorithmic Analytics",
    },
    icon: UserCheck,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl mx-auto">
              Real-world enterprise applications built with agentic engineering workflows and scalable architectures.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                  className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between group"
                >
                  {/* Top Image / Visual Banner */}
                  <div className="h-52 relative overflow-hidden bg-slate-900 dark:bg-slate-950">
                    {project.imageUrl ? (
                      <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-slate-900/70 backdrop-blur-md text-white border border-white/20">
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 z-10">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white px-2 py-0.5 rounded-md shadow-xs">
                            Live App Ready
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.imagePlaceholder.color} p-6 flex flex-col justify-between relative overflow-hidden text-white`}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
                        <div className="flex items-center justify-between z-10">
                          <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/20">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                            SaaS Solution
                          </span>
                        </div>
                        <div className="z-10">
                          <p className="text-xs font-medium text-white/80 uppercase tracking-wider">
                            Screenshot Placeholder
                          </p>
                          <h4 className="text-sm font-semibold text-white truncate mt-0.5">
                            {project.imagePlaceholder.label}
                          </h4>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* See More Details Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white rounded-xl border border-indigo-200/80 dark:border-indigo-800 hover:border-indigo-600 shadow-2xs transition-all duration-200 group/btn"
                      >
                        See More Details
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-y-auto z-10 border border-slate-200 dark:border-slate-800 flex flex-col"
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
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-md mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified SaaS Deployment
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${selectedProject.imagePlaceholder.color} p-8 flex flex-col justify-end relative overflow-hidden text-white`}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-full pointer-events-none" />
                    <div className="z-10 space-y-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/20 text-white mb-2">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified Architecture
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProject.title}
                      </h2>
                      <p className="text-sm text-white/80 font-medium">
                        Screenshot Placeholder: {selectedProject.imagePlaceholder.label}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Inner Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-1">
                {/* Full Description */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Project Overview
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-normal">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Agentic Engineering Workflow Callout Box */}
                <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-indigo-50/90 via-indigo-50/40 to-slate-50 dark:from-indigo-950/80 dark:via-slate-900 dark:to-slate-900 border border-indigo-200/80 dark:border-indigo-800/80 space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm tracking-tight">
                    <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-xs">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                    <span>Agentic Engineering Workflow</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                    {selectedProject.agenticWorkflow}
                  </p>
                </div>

                {/* Demo Credentials Box */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-sm">
                    <Key className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Demo Access Credentials</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-400 dark:text-slate-500 block font-medium text-[10px] uppercase">
                        Role
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {selectedProject.demoCredentials.role}
                      </span>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-400 dark:text-slate-500 block font-medium text-[10px] uppercase">
                        Email
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                        {selectedProject.demoCredentials.email}
                      </span>
                    </div>
                    {selectedProject.demoCredentials.password && (
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-400 dark:text-slate-500 block font-medium text-[10px] uppercase">
                          Password
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono">
                          {selectedProject.demoCredentials.password}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Technologies & Architecture
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-xl shadow-xs transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-900 dark:text-slate-100" />
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
