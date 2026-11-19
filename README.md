# 🏥 PrivateCheck — Male Reproductive Health Triage

> **Future Health Digital Innovation Challenge 2026 Submission**
> A privacy-first, full-stack digital triage tool designed to break the silence on male reproductive health.

![Status](https://img.shields.io/badge/Status-Deployed-emerald)
![Privacy](https://img.shields.io/badge/Privacy-Zero%20PII-blue)
![Language](https://img.shields.io/badge/Language-EN%20%7C%20AR%20(RTL)-teal)

## 🚨 The Problem
Male reproductive health is a silent crisis. Men typically enter care only after infertility is diagnosed, often missing critical windows to address modifiable risk factors. In regions like the Gulf/MENA, cultural stigma makes proactive help-seeking even harder.

## 💡 The Solution
**PrivateCheck** is a 60-second, anonymous assessment that helps users identify risk signals worth a medical conversation. 

Built for **privacy by design**, the tool evaluates inputs locally on the user's device via an explainable, auditable rule engine. It outputs a 3-tier triage level (Low, Moderate, Urgent) and generates a printable, anonymous **"Doctor Summary"** to bridge the gap between silent symptoms and clinical evaluation.

### ✨ Key Features
*   **🔒 Zero PII Storage:** The architecture ensures that no personally identifiable information ever leaves the user's browser.
*   **🌍 Bilingual & Accessible:** Full English and Arabic support with complete Right-to-Left (RTL) layout switching.
*   **🧠 Explainable Engine:** A white-box rule engine based on published clinical guidelines (no black-box AI).
*   **🩺 Clinical Handoff:** Generates a printable, anonymous summary for users to hand to their primary care physician.
*   **📊 Live Analytics:** A persistent, anonymized dashboard tracking aggregate risk distribution (powered by PostgreSQL).
*   **✅ Transparent Validation:** A dedicated validation page demonstrating 100% urgent-case detection on synthetic clinical profiles.

---

## 🚀 Live Demo & Links
*   **Live Web App:** [https://privatecheck-xxxx.onrender.com](https://privatecheck-xxxx.onrender.com) *(Replace with your actual Render URL)*
*   **Demo Video:** [Watch the 3-minute walkthrough](YOUR_VIDEO_LINK_HERE) *(Replace with your YouTube/Drive link)*

---

## 🛠️ Tech Stack
*   **Frontend:** React 18, Vite, Tailwind CSS
*   **Backend:** Node.js, Express.js
*   **Database:** Neon PostgreSQL (Serverless)
*   **Deployment:** Render (Single-container deployment)

---

## 🏗️ Architecture

```text
[ User Browser ] 
       │
       ▼ (HTTPS)
[ React Frontend ] ──(Local Processing)──> [ Rule Engine ] 
       │
       ▼ (POST /api/assess) - *Anonymized risk codes only*
[ Express Backend ]
       │
       ▼
[ Neon PostgreSQL ] (Persistent anonymous aggregate analytics)

The application is deployed as a single container. The Express backend serves the static React build, while simultaneously handling REST API requests for the anonymized analytics and validation reports.

💻 Local Setup & Installation
To run this project locally, ensure you have Node.js installed.

1. Clone the repo
bash
git clone https://github.com/PHILTEC24/privatecheck.git
cd privatecheck
2. Install dependencies
bash
npm run install:all
3. Set up Environment Variables
Create a .env file in the root directory and add your PostgreSQL connection string:

env
DATABASE_URL=postgresql://your_user:your_password@your_host/your_db?sslmode=require
4. Run the app
bash
# On Windows (using Git Bash) or Mac/Linux:
export $(cat .env | xargs)
npm run dev
5. Access the app
Open http://localhost:5173 in your browser.
(The backend API runs on port 3001).

📊 Validation Methodology
The rule engine is validated against 20 synthetic patient profiles hand-labeled from published clinical guideline thresholds.

Agreement: 100%

Urgent-case detection: 100%

Note: This measures implementation fidelity, not clinical efficacy. Prospective clinical validation is the next step.

⚖️ Clinical Boundary & Disclaimer
PrivateCheck is a triage and educational prototype, NOT a diagnostic tool.
It does not measure fertility, sperm quality, or hormone levels. It does not replace a clinical exam or lab tests. Users with severe pain, sudden swelling, or a new lump are explicitly instructed to seek urgent care regardless of the tool's result.

Built with ❤️ for the Future Health Digital Innovation Challenge 2026.

text

### Quick fixes before you commit:
1. Scroll through the README and replace `https://privatecheck-xxxx.onrender.com` with your actual Render link.
2. Replace `YOUR_VIDEO_LINK_HERE` with your YouTube or Google Drive link.
3. If you haven't pushed your `.env` file (which you shouldn't), the app will fail to connect to the DB on a fresh clone unless the user adds it, which is why the instructions above tell them how to set it up.

Run this to push it:
```bash
git add README.md
git commit -m "docs: add comprehensive README"
git push
