"use client";

import { useState } from "react";
import { Menu, X, Download, Workflow } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:bg-indigo-700 transition-colors">
              <Workflow className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 tracking-tight text-base group-hover:text-indigo-600 transition-colors">
                Gabriel Caratihan
              </span>
              <span className="text-[10px] font-semibold text-indigo-600 tracking-wide uppercase -mt-0.5">
                Business Automation Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#problems"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Problems I Solve
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#why-me"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Why Hire Me
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Gabriel_Caratihan_Resume.pdf"
              download="Gabriel_Caratihan_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-300 shadow-xs transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Resume PDF
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-800 shadow-sm shadow-indigo-500/20 transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              Book a Free Review
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <a
            href="#problems"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50"
          >
            Problems I Solve
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50"
          >
            Case Studies
          </a>
          <a
            href="#why-me"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50"
          >
            Why Hire Me
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50"
          >
            About
          </a>
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="/Gabriel_Caratihan_Resume.pdf"
              download="Gabriel_Caratihan_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm"
            >
              Book a Free Workflow Review
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
