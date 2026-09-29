import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gabriel Caratihan | Business Automation Engineer & Custom Web Portal Specialist",
  description:
    "I build custom web portals that automate administrative processes, centralize data, and eliminate operational bottlenecks for schools and organizations.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "Gabriel Caratihan",
    "Business Automation Engineer",
    "Workflow Automation Specialist",
    "Custom Web Portals",
    "Spreadsheet Replacement",
    "School Management Systems",
    "Internal Business Tools",
    "Operational Efficiency",
  ],
  authors: [{ name: "Gabriel Caratihan" }],
  openGraph: {
    title: "Gabriel Caratihan | Business Automation Engineer",
    description:
      "Replacing Spreadsheets, Paperwork, and Manual Workflows with Custom Business Systems.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
