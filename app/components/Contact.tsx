"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const recipientEmail = "gabrielcaratihan2003@gmail.com";

  // Template mailto link
  const defaultTemplateSubject = encodeURIComponent(
    "Inquiry: Software Engineering & SaaS Project"
  );
  const defaultTemplateBody = encodeURIComponent(
    `Hi Gabriel,\n\nI visited your software engineering portfolio and would like to discuss a project / opportunity.\n\nOrganization / Company: \nProject Scope / Role: \nEstimated Timeline: \n\nBest regards,\n[Your Name]`
  );
  const defaultMailtoUrl = `mailto:${recipientEmail}?subject=${defaultTemplateSubject}&body=${defaultTemplateBody}`;

  // Gmail Web Compose direct link (backup for browser webmail users)
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${defaultTemplateSubject}&body=${defaultTemplateBody}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedSubject = encodeURIComponent(
      subject || `Portfolio Inquiry from ${name || "a Client"}`
    );
    const formattedBody = encodeURIComponent(
      `Hi Gabriel,\n\n${message}\n\nSender Name: ${name}\nSender Email: ${email}`
    );

    const customMailto = `mailto:${recipientEmail}?subject=${formattedSubject}&body=${formattedBody}`;

    // Trigger user's mail client with pre-filled content
    window.location.href = customMailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Communication
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
              Ready to build scalable solutions together? Let’s connect.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have a software engineering opportunity, an enterprise workflow challenge, or a SaaS project? Compose a message or launch your mail app instantly below.
            </p>
          </div>

          {/* Direct Quick Action Buttons */}
          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 text-center">
              Quick Email Actions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Primary Pre-Template Mailto */}
              <a
                href={defaultMailtoUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md shadow-indigo-500/20 transition-all text-center"
              >
                <Mail className="w-4 h-4" />
                Launch Mail App
              </a>

              {/* Webmail / Gmail Compose Shortcut */}
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:border-slate-400 rounded-xl shadow-xs transition-all text-center"
              >
                <ExternalLink className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Compose in Gmail
              </a>

              {/* Copy Email Address */}
              <button
                onClick={handleCopyEmail}
                type="button"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl border shadow-xs transition-all text-center ${
                  copied
                    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    Copy Email Address
                  </>
                )}
              </button>
            </div>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Direct Email:{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono">
                  {recipientEmail}
                </span>
              </span>
            </div>
          </div>

          {/* Interactive Pre-Template Message Builder Form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-600 text-white">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Compose Custom Pre-Template Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in your message below and click send to automatically compose in your email client.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Redirecting to your Email Client...
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  If your mail application didn't open automatically, click the button below to compose manually or copy your email message.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={defaultMailtoUrl}
                    className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                  >
                    Open Mail App Again
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Full-Stack SaaS Development / Engineering Role"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, engineering requirements, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950 outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md shadow-indigo-500/20 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Compose & Send via Email App
                  </button>

                  <a
                    href="https://github.com/GabbyDev0402"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-900 dark:text-slate-100" />
                    GitHub: github.com/GabbyDev0402
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
