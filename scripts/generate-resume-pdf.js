const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "../public");
const imagesDir = path.join(publicDir, "images");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, "Gabriel_Caratihan_Resume.pdf");
const doc = new PDFDocument({
  size: "LETTER", // 612 x 792 pt
  margin: 40,
  autoFirstPage: false,
  info: {
    Title: "Gabriel Caratihan - Resume",
    Author: "Gabriel Caratihan",
    Subject: "Software Engineer & Business Automation Specialist Resume",
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
    title: "1. Mini AI DocuMind – Smart Knowledge Base (NEW & FEATURED)",
    subtitle: "ROI: 95% Faster Information Retrieval & Zero AI Hallucinations",
    badgeText: "AI & RAG Vector Engine",
    liveUrl: "https://mini-ai-documind.vercel.app/",
    githubUrl: "https://github.com/GabbyDev0402/mini-ai-documind",
    imageFile: "documind-screenshot.png",
    bullets: [
      "Built RAG Q&A assistant for SMEs converting company SOP handbooks into searchable vector embeddings.",
      "Integrated Google Gemini gemini-embedding-2 with Supabase pgvector cosine similarity search.",
      "Restricted LLM answers strictly to verified company documents, returning clickable source citations."
    ]
  },
  {
    title: "2. Faculty Leave & Substitute Portal",
    subtitle: "ROI: 90% Faster Absence Processing & 100% Automated Sub Coverage",
    badgeText: "Enterprise HR System",
    liveUrl: "https://faculty-leave-management-portal.netlify.app/",
    githubUrl: "https://github.com/GabbyDev0402/faculty-leave-hr-portal",
    imageFile: "eduflex-screenshot.png",
    bullets: [
      "Replaced manual paper leave forms and phone calls with self-service substitute claiming.",
      "Engineered PostgreSQL RLS policies & DB triggers to automate leave balance deductions.",
      "Secured lesson plans with 60-second cryptographic URLs and real-time Postgres WebSocket sync."
    ]
  },
  {
    title: "3. Enterprise Communications Intranet",
    subtitle: "ROI: 100% Policy Compliance Verification & Zero Lost Announcements",
    badgeText: "Compliance & Intranet Portal",
    liveUrl: "https://washington-school-portal.netlify.app/admin",
    githubUrl: "https://github.com/GabbyDev0402/washington-school-portal",
    imageFile: "washington-school-portal.png",
    bullets: [
      "Replaced unorganized email blasts with digital read-receipt tracking & instant CSV compliance logs.",
      "Implemented Role-Based Access Control (RBAC) with Cloud Firestore Security Rules.",
      "Streamlined institutional announcement workflows with secure multi-role administrative oversight."
    ]
  },
  {
    title: "4. Washington Assessment Portal",
    subtitle: "ROI: Saved Teachers 15+ Hours/Week in Manual Grading",
    badgeText: "EdTech & Assessment LMS",
    liveUrl: "https://wcs-exam-portal.netlify.app/",
    githubUrl: "https://github.com/GabbyDev0402/washington-school-portal",
    imageFile: "washington-exam-portal.png",
    bullets: [
      "Architected dynamic exam creation engine utilizing polymorphic React form components.",
      "Engineered real-time pivot-table data aggregation for Master Gradebooks & administrative analytics.",
      "Enforced strict multi-tenant data isolation and time-gated client routing for exam security."
    ]
  },
  {
    title: "5. AttendancePro Tracker",
    subtitle: "ROI: 80% Reduction in Daily Attendance Logging Time",
    badgeText: "Attendance & Early Warning Engine",
    liveUrl: "https://wcsattendancetracker.netlify.app/",
    githubUrl: "https://github.com/GabbyDev0402/wcs-attendancetracker",
    imageFile: "attendance-pro-tracker.png",
    bullets: [
      "Replaced physical attendance rosters with proactive truancy algorithms that flag at-risk students.",
      "Optimized NoSQL database reads using session-grouped data modeling for sub-second roster logging.",
      "Engineered automated instruction-loss calculations to assist school administrators with intervention."
    ]
  }
];

projectsData.forEach((proj) => {
  const pStartY = page2Y;

  // Check if we need a new page for project overflow
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
     .text(`Category: ${proj.badgeText || "SaaS Portal"}   |   Live Demo & Repository Code Available via Upwork`, 40, currentStartY + 25);

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

// Footer Notice
doc
  .fillColor(COLOR_TEXT_LIGHT)
  .fontSize(8)
  .font("Helvetica")
  .text("Portfolio Resume — Gabriel Caratihan © 2026", 40, 750, { align: "center", width: 532 });

doc.end();

stream.on("finish", () => {
  console.log("PDF Resume generated successfully with screenshots and ROI metrics at:", outputPath);
});
