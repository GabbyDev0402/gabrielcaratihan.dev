import GithubIcon from "./icons/GithubIcon";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-400 text-xs sm:text-sm font-medium">
            © 2026 Gabriel Caratihan. Built with Next.js and Tailwind CSS.
          </p>

          <div className="flex items-center gap-6 text-xs font-semibold">
            <a
              href="https://github.com/GabbyDev0402"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="mailto:gabrielcaratihan2003@gmail.com"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
