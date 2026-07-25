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
    Subject: "Software Engineer Portfolio Resume",
    Keywords: "Software Engineer, Full Stack, SaaS, Next.js, TypeScript, Supabase, PostgreSQL",
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
    .text("SOFTWARE ENGINEER & SYSTEMS ARCHITECT", 40, 52);

  d.fillColor("#e2e8f0")
    .fontSize(8.5)
    .font("Helvetica")
    .text(
      "Email: gabrielcaratihan2003@gmail.com   |   GitHub: github.com/GabbyDev0402   |   Location: Imus, Cavite, PH",
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
    "Software Engineer passionate about architecting full-stack, highly scalable SaaS applications that eliminate administrative friction and bridge the gap between operational bottlenecks and digital solutions. Former ESL Educator turned Systems Architect with dual perspective in institutional workflows and cloud software design.",
    40,
    currentY,
    { width: 532, lineGap: 4 }
  );

currentY = doc.y + 20;

// Core Technical Skills Section
currentY = drawSectionTitle(doc, "Core Technical Skills", currentY);

const col1X = 40;
const col2X = 220;
const col3X = 400;

doc.fontSize(9.5).font("Helvetica-Bold").fillColor(COLOR_TEXT_DARK);
doc.text("Languages & Frontend", col1X, currentY);
doc.text("Backend & Cloud", col2X, currentY);
doc.text("Engineering Workflows", col3X, currentY);

doc.fontSize(8.5).font("Helvetica").fillColor(COLOR_TEXT_MUTED);
doc.text(
  "• TypeScript / JavaScript\n• React / Next.js (App Router)\n• Tailwind CSS v4 / HTML5\n• Framer Motion",
  col1X,
  currentY + 16,
  { lineGap: 3 }
);
doc.text(
  "• Supabase / PostgreSQL\n• Node.js / REST APIs\n• Firebase / Cloud Firestore\n• Netlify / Vercel",
  col2X,
  currentY + 16,
  { lineGap: 3 }
);
doc.text(
  "• Antigravity IDE (Gemini 3.5)\n• Agentic Prompt Engineering\n• RLS & DB Triggers\n• Git & CI/CD Workflows",
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
  .text("⚡ AGENTIC ENGINEERING WORKFLOW", 52, currentY + 10);

doc
  .fillColor(COLOR_TEXT_MUTED)
  .fontSize(8.5)
  .font("Helvetica")
  .text(
    "Architected and engineered applications using advanced agentic workflows via the Antigravity IDE. Directed AI models (Gemini 3.5 Flash / 3.1 Pro) to rapidly prototype UI/UX, establish PostgreSQL & NoSQL data schemas, enforce Row Level Security (RLS) policies, and generate automated Playwright E2E testing suites.",
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

// --- PAGE 2: FEATURED PROJECTS WITH SCREENSHOTS ---
doc.addPage();
addHeader(doc);

let page2Y = 120;
page2Y = drawSectionTitle(doc, "Featured Engineering Projects", page2Y);

const projectsData = [
  {
    title: "1. Faculty Leave & Substitute Portal (NEW & FEATURED)",
    subtitle: "Enterprise Supabase HR Workflow Engine & Substitute Coverage Portal",
    liveUrl: "https://faculty-leave-management-portal.netlify.app/",
    githubUrl: "https://github.com/GabbyDev0402/faculty-leave-hr-portal",
    imageFile: "eduflex-screenshot.png",
    bullets: [
      "Engineered PostgreSQL Row Level Security (RLS) policies and database triggers for automated leave balance deduction.",
      "Built relational one-to-many schema for claiming class blocks and 60-second cryptographic signed URLs for lesson plans.",
      "Integrated real-time Postgres WebSocket synchronization and dynamic Next.js layout overrides for /login."
    ]
  },
  {
    title: "2. Enterprise Communications Intranet",
    subtitle: "B2B Announcement & Administrative Compliance Portal",
    liveUrl: "https://washington-school-portal.netlify.app/admin",
    githubUrl: "https://github.com/GabbyDev0402/washington-school-portal",
    imageFile: "washington-school-portal.png",
    bullets: [
      "Implemented Role-Based Access Control (RBAC) with Cloud Firestore Security Rules.",
      "Engineered digital 'Read Receipt' compliance tracking and automated client-side CSV audit log reporting.",
      "Streamlined institutional announcement workflows with secure multi-role administrative oversight."
    ]
  },
  {
    title: "3. Washington Assessment Portal",
    subtitle: "Multi-Tenant LMS with Automated Exam Engine & Analytics",
    liveUrl: "https://wcs-exam-portal.netlify.app/",
    githubUrl: "https://github.com/GabbyDev0402/washington-school-portal",
    imageFile: "washington-exam-portal.png",
    bullets: [
      "Architected dynamic exam creation engine utilizing polymorphic React form components.",
      "Engineered real-time pivot-table data aggregation for Master Gradebooks and teacher performance metrics.",
      "Enforced strict multi-tenant data isolation and time-gated client routing for exam security."
    ]
  },
  {
    title: "4. AttendancePro Tracker",
    subtitle: "Proactive Attendance Management & Truancy Early-Warning Engine",
    liveUrl: "https://wcsattendancetracker.netlify.app/",
    githubUrl: "https://github.com/GabbyDev0402/wcs-attendancetracker",
    imageFile: "attendance-pro-tracker.png",
    bullets: [
      "Optimized NoSQL database reads using session-grouped data modeling for rapid attendance logging.",
      "Designed proactive early-warning algorithms to detect at-risk student truancy patterns.",
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
  doc.fontSize(8.2).font("Helvetica-Oblique").fillColor(COLOR_TEXT_LIGHT).text(proj.subtitle, 40, currentStartY + 13);
  
  doc.fontSize(7.8).font("Helvetica-Bold").fillColor(COLOR_PRIMARY)
     .text(`Live App: ${proj.liveUrl}   |   GitHub: ${proj.githubUrl}`, 40, currentStartY + 25);

  // Content Row: Screenshot on Right (170pt width), Bullets on Left (340pt width)
  const contentY = currentStartY + 37;
  
  // Try image from public/eduflex-screenshot.png or public/images/
  let imagePath = path.join(imagesDir, proj.imageFile);
  if (!fs.existsSync(imagePath)) {
    imagePath = path.join(publicDir, proj.imageFile);
  }

  if (fs.existsSync(imagePath)) {
    try {
      // Draw screenshot thumbnail
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
  console.log("PDF Resume generated successfully with screenshots and spacious layout at:", outputPath);
});
