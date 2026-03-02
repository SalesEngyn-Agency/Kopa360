# Kopa360 Website

Built with React + Vite + Tailwind CSS
Designed for deployment on Vercel

## Tech Stack
- React 18
- React Router DOM v6
- Tailwind CSS
- Lucide React (icons)
- Vite (build tool)

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## Deploying to Vercel

### Option A — Via GitHub (Recommended)
1. Upload this entire folder to a GitHub repository
2. Go to vercel.com → "Add New Project"
3. Connect your GitHub account and select the repository
4. Vercel auto-detects Vite — just click Deploy
5. In Project Settings → Domains, add: kopa360.salesengyn.online
6. Copy the CNAME record Vercel gives you
7. Add that CNAME record in your Hostinger DNS panel for the subdomain

### Option B — Via Vercel CLI
```bash
npm install -g vercel
vercel
```

## Setting Up Email (EmailJS)

Forms currently use mailto: links as a fallback.
To enable proper email delivery via EmailJS:

1. Go to https://emailjs.com and create a free account
2. Add a Gmail service and connect sundaydigitals@gmail.com
3. Create 5 email templates (one per form)
4. Open src/utils/emailConfig.js
5. Replace the placeholder values with your actual EmailJS IDs

## Pages
- / — Homepage
- /tutorlink — TutorLink program
- /skillzbridge — SkillzBridge program
- /the-network — The Network
- /parents — Parents & Pupils
- /contact — Contact page

## Brand Colors
- Dark Green: #0a1f0e (primary background)
- Gold/Yellow: #e8b800 (accent)
- White: #ffffff
- Off-White: #f8f7f2

## Built by SalesEngyn
https://salesengyn.online
