const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "../public");
const imagesDir = path.join(publicDir, "images");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, "Gabriel_Caratihan_Portfolio_Upwork.pdf");
const doc = new PDFDocument({
  size: "LETTER", // 612 x 792 pt
  margin: 40,
  autoFirstPage: false,
  info: {
    Title: "Gabriel Caratihan - Upwork Portfolio Resume",
    Author: "Gabriel Caratihan",
    Subject: "Software Engineer Portfolio (Upwork Compliant)",
    Keywords: "Software Engineer, Business Automation, Full Stack, SaaS, Next.js, TypeScript, Supabase, PostgreSQL, Gemini API, RAG",
  },
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Color Palette
const COLOR_HEADER_BG = "#1e1b4b"; // Dark Indigo
const COLOR_PRIMARY = "#4f46e5";   // Indigo 600
const COLOR_DARK_INDIGO = "#3730a3"; // Indigo 800
const COLOR_TEXT_DARK = "#0f172a"; // Slate 900
const COLOR_TEXT_MUTED = "#334155"; // Slate 700
const COLOR_TEXT_LIGHT = "#64748b"; // Slate 500
const COLOR_SECTION_BG = "#e0e7ff"; // Indigo 100
const COLOR_CARD_BG = "#f8fafc";    // Slate 50
const COLOR_BORDER = "#cbd5e1";     // Slate 300

function addHeader(d) {
  d.rect(0, 0, 612, 105).fill(COLOR_HEADER_BG);

  d.fillColor("#ffffff")
    .fontSize(22)
    .font("Helvetica-Bold")
    .text("GABRIEL CARATIHAN", 40, 24);

  d.fillColor("#a5b4fc")
    .fontSize(11)
    .font("Helvetica-Bold")
    .text("SOFTWARE ENGINEER & BUSINESS AUTOMATION SPECIALIST", 40, 52);

  d.fillColor("#e2e8f0")
    .fontSize(8.5)
    .font("Helvetica")
    .text(
      "Communication & Hiring: Available Exclusively via Upwork   |   Location: Imus, Cavite, PH",
      40,
      74
    );
}

function drawSectionTitle(d, title, yPos) {
  d.rect(40, yPos, 532, 22).fill(COLOR_SECTION_BG);

  d.fillColor(COLOR_DARK_INDIGO)
    .fontSize(10)
    .font("Helvetica-Bold")
    .text(title.toUpperCase(), 48, yPos + 6);

  return yPos + 30;
}

// --- PAGE 1 ---
doc.addPage();
addHeader(doc);

let currentY = 120;

// Executive Summary Section
currentY = drawSectionTitle(doc, "Executive Summary", currentY);

doc
  .fillColor(COLOR_TEXT_MUTED)
  .fontSize(9.5)
  .font("Helvetica")
  .text(
    "Software Engineer passionate about replacing messy spreadsheets and manual processes with custom, automated web portals. Former ESL Educator turned Systems Architect with a dual perspective that bridges non-technical business leaders seeking operational ROI with robust, enterprise-grade cloud software architecture.",
    40,
    currentY,
    { width: 532, lineGap: 4 }
  );

currentY = doc.y + 20;

// Core Technical Skills Section
currentY = drawSectionTitle(doc, "Core Technical Skills & Business Focus", currentY);

const col1X = 40;
const col2X = 220;
const col3X = 400;

doc.fontSize(9.5).font("Helvetica-Bold").fillColor(COLOR_TEXT_DARK);
doc.text("Languages & Frontend", col1X, currentY);
doc.text("Backend & AI Infrastructure", col2X, currentY);
doc.text("Business Automation", col3X, currentY);

doc.fontSize(8.5).font("Helvetica").fillColor(COLOR_TEXT_MUTED);
doc.text(
  "• TypeScript / JavaScript\n• React / Next.js (App Router)\n• Tailwind CSS v4 / HTML5\n• Framer Motion UI",
  col1X,
  currentY + 16,
  { lineGap: 3 }
);
doc.text(
  "• Supabase / pgvector\n• Google Gemini API (RAG)\n• Node.js / REST APIs\n• Firebase / Cloud Firestore",
  col2X,
  currentY + 16,
  { lineGap: 3 }
);
doc.text(
  "• 80%+ Operational Time Saved\n• Paper-to-Digital Workflows\n• RLS & Bank-Grade Security\n• Agentic Prompt Engineering",
  col3X,
  currentY + 16,
  { lineGap: 3 }
);

currentY = currentY + 80;

// Agentic Engineering Workflow Callout Box
const boxHeight = 70;
doc
  .roundedRect(40, currentY, 532, boxHeight, 6)
  .fillAndStroke(COLOR_CARD_BG, COLOR_BORDER);

doc
  .fillColor(COLOR_PRIMARY)
  .fontSize(9.5)
  .font("Helvetica-Bold")
  .text("⚡ AGENTIC ENGINEERING & BUSINESS TRANSLATION WORKFLOW", 52, currentY + 10);

doc
  .fillColor(COLOR_TEXT_MUTED)
  .fontSize(8.5)
  .font("Helvetica")
  .text(
    "Architected applications using advanced agentic workflows via the Antigravity IDE. Directed AI models (Gemini 3.5 Flash / 3.1 Pro) to rapidly prototype UI/UX, establish PostgreSQL & NoSQL data schemas, enforce Row Level Security (RLS) policies, and automate end-to-end business logic, reducing development lifecycles significantly.",
    52,
    currentY + 26,
    { width: 508, lineGap: 3 }
  );

currentY = currentY + boxHeight + 25;

// Education & Career Journey
currentY = drawSectionTitle(doc, "Education & Professional Background", currentY);

const ed1X = 40;
const ed2X = 300;

doc.fontSize(9.5).font("Helvetica-Bold").fillColor(COLOR_TEXT_DARK).text("Computer Programming Practitioner", ed1X, currentY);
doc.fontSize(8.5).font("Helvetica").fillColor(COLOR_TEXT_MUTED).text("Imus Computer College — Systems & Software Development", ed1X, currentY + 14);

doc.fontSize(9.5).font("Helvetica-Bold").fillColor(COLOR_TEXT_DARK).text("ESL Educator", ed2X, currentY);
doc.fontSize(8.5).font("Helvetica").fillColor(COLOR_TEXT_MUTED).text("Washington School — Educational Technology & Workflows", ed2X, currentY + 14);

// --- PAGE 2: FEATURED PROJECTS WITH SCREENSHOTS & ROI ---
doc.addPage();
addHeader(doc);

let page2Y = 120;
page2Y = drawSectionTitle(doc, "Featured Projects & Business ROI Impact", page2Y);

const projectsData = [
  {
    title: "1. Washington School International (Online Portal - PRODUCTION)",
    subtitle: "ROI: 80%+ Reduction in Operational Friction & 100% Grade Sync",
    badgeText: "In Active Use @ Washington School",
    imageFile: "attendance-pro-tracker.png",
    bullets: [
      "Engineered multi-role institutional portal (Admin, Faculty, Student) with React 19 and Firebase.",
      "Architected 24-column Academic Performance Grid with dynamic SHS track mapping and .xls generation.",
      "Developed polymorphic exam builder with live read receipts, rapid score desk, & diary workflows."
    ]
  },
  {
    title: "2. Apply Copilot — AI Application Agent (CHROME EXTENSION)",
    subtitle: "ROI: 90% Faster Applications & Zero Missed Secret Instructions",
    badgeText: "AI Browser Agent (Gemini + Supabase)",
    imageFile: "washington-school-portal.png",
    bullets: [
      "Built Chrome Extension with live Supabase master brain integration for dynamic DOM form autofill.",
      "Engineered secret instruction scanner detecting mandatory hidden keywords & required file uploads.",
      "Generated 0-100% role compatibility match scores and tailored 3-paragraph cover letters via Gemini AI."
    ]
  }
];

projectsData.forEach((proj) => {
  const pStartY = page2Y;

  if (pStartY > 650) {
    doc.addPage();
    addHeader(doc);
    page2Y = 120;
  }

  const currentStartY = page2Y;

  // Project Header
  doc.fontSize(10).font("Helvetica-Bold").fillColor(COLOR_TEXT_DARK).text(proj.title, 40, currentStartY);
  doc.fontSize(8.2).font("Helvetica-Oblique").fillColor(COLOR_PRIMARY).text(proj.subtitle, 40, currentStartY + 13);
  
  doc.fontSize(7.8).font("Helvetica-Bold").fillColor(COLOR_TEXT_LIGHT)
     .text(`Category: ${proj.badgeText}   |   Live Demo & Repository Code Available via Upwork`, 40, currentStartY + 25);

  // Content Row: Screenshot on Right (175pt width), Bullets on Left (340pt width)
  const contentY = currentStartY + 37;
  
  let imagePath = path.join(imagesDir, proj.imageFile);
  if (!fs.existsSync(imagePath)) {
    imagePath = path.join(publicDir, proj.imageFile);
  }

  if (fs.existsSync(imagePath)) {
    try {
      doc.image(imagePath, 395, contentY, { width: 175, height: 85 });
      doc.rect(395, contentY, 175, 85).strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();
    } catch (e) {
      console.warn("Could not embed image:", proj.imageFile, e);
    }
  }

  // Draw Bullet Points
  let bulletY = contentY;
  doc.fontSize(8.2).font("Helvetica").fillColor(COLOR_TEXT_MUTED);
  proj.bullets.forEach((bullet) => {
    doc.text(`•  ${bullet}`, 44, bulletY, { width: 340, lineGap: 2 });
    bulletY += 25;
  });

  page2Y = contentY + 92;
});

// Footer Notice (Upwork Compliant)
doc
  .fillColor(COLOR_TEXT_LIGHT)
  .fontSize(8)
  .font("Helvetica")
  .text("Portfolio Resume (Upwork Version) — Gabriel Caratihan © 2026", 40, 750, { align: "center", width: 532 });

doc.end();

stream.on("finish", () => {
  console.log("Upwork Compliant PDF Resume generated successfully at:", outputPath);
});
