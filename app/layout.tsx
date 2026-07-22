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
  title: "Gabriel Caratihan | Software Engineer & Systems Architect",
  description:
    "Software Engineer passionate about building full-stack, highly scalable SaaS applications that automate workflows and bridge the gap between operational bottlenecks and digital solutions.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
