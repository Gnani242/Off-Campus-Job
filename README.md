# Off-Campus Auto Job Application Platform

## Overview
The output of this project is a fully functional web-based platform that automates off-campus job applications for students.

Users can upload their resume once, and the system automatically parses profile details, matches suitable jobs, and applies to selected positions with user consent.
The platform provides a dashboard to track application status such as applied, failed, or shortlisted.

It is built using a React single-page frontend, Node.js serverless backend APIs, and background automation workers, deployed on Vercel.
The final output demonstrates real-world automation, scalability, and ethical job application handling.

## Key Features
- **Frontend**: React (Vite) SPA for user interaction.
- **Backend**: Express APIs for auth, profile, and job management.
- **Automation**: Worker/Bot system using Playwright for auto-applying.
- **AI**: Resume parsing and matching.

## Setup Instructions

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm start
```

### Automation
```bash
cd automation
npm install
node index.js
```

## Deployment
Deployed on Vercel with serverless functions for backend and static hosting for frontend.
