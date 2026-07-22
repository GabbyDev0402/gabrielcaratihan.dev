import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gabriel Caratihan | Software Engineer & Systems Architect",
  description:
    "Software Engineer passionate about building full-stack, highly scalable SaaS applications that automate workflows and bridge the gap between operational bottlenecks and digital solutions.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "Gabriel Caratihan",
    "Software Engineer",
    "Full-Stack Engineer",
    "SaaS Developer",
    "Next.js Developer",
    "Enterprise Solutions",
    "Workflow Automation",
  ],
  authors: [{ name: "Gabriel Caratihan" }],
  openGraph: {
    title: "Gabriel Caratihan | Software Engineer",
    description:
      "Engineering Enterprise Solutions for Real-World Problems. Full-Stack SaaS Developer & Systems Architect.",
    type: "website",
    url: "https://github.com/GabbyDev0402",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
