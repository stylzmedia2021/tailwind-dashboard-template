# BizBondhu Project: Copilot Conversation History & ERP Main Context

এই ফাইলে BizBondhu ERP নিয়ে মূল সিদ্ধান্ত, টেকনিক্যাল গাইড এবং প্রকল্পের প্রাথমিক উদ্দেশ্য/context সংরক্ষিত।  
**BizBondhu** — একটি আধুনিক, Banglish-নামকরণকৃত, মাল্টি-টেন্যান্ট, মডুলার ERP (Enterprise Resource Planning) প্ল্যাটফর্ম
যা Laravel 12 (API Backend) এবং React + Tailwind (SPA Frontend) দিয়ে নির্মিত হবে।

---

## 🎯 Main Context & Vision

### **কেন এই ERP?**
- বাংলাদেশের/লোকাল মার্কেটের জন্য আধুনিক, সহজ, cloud-ready ERP বানানো
- ছোট/মাঝারি ব্যবসা (SME), স্কুল, NGO, অফিস—যারা সহজ ইউজার-ইন্টারফেস, অটোমেশন ও মাল্টি-টেন্যান্সি চায়
- Traditional ERP-এর জটিলতা/বড় বাজেটের বাইরে গিয়ে, একটি “বন্ধুসুলভ” (BizBondhu!) SaaS বানানো

### **Target User**
- ছোট ব্যবসার মালিক, HR/Admin, Accountant, স্কুল/ক্লিনিক ম্যানেজার, মাল্টি-অফিস টিম
- Developer যারা Bangladesh-centric, Bangla/Banglish ফিল চান

### **Core Features (MVP)**
- Multi-tenancy: এক সার্ভারে একাধিক ক্লায়েন্ট/বিজনেস isolate & secure থাকবে
- User Management: Role-based access, permission, audit
- HRM: Employee, Attendance, Payroll, Leave
- Accounting: Basic ledger, voucher, invoice, expense, report
- CRM: Customer, Supplier, Communication
- Inventory: Stock, Product, Purchase/Sales
- Dashboard: Real-time overview, graphs
- Notification & Activity Log
- API-first: Mobile/3rd party integration
- Modern UI/UX: Responsive, clean, Bangla/Banglish supportive
- **Laravel 12 compatible, tested on Laravel 12.x**

### **Tech Stack**
- Backend: Laravel 12 (LTS)
- Frontend: React + Tailwind (SPA)
- Database: MySQL/Postgres (tenant-wise isolation)
- Auth: Sanctum (v4+), Social login, 2FA (future)
- Deployment: Cloud/VPS ready, dockerizable

> **Laravel 12 Important Notes:**
> - Sanctum, Passport, Telescope ইত্যাদি প্যাকেজের মাইগ্রেশন publish করতে হয়: `php artisan vendor:publish --tag=sanctum-migrations`
> - Doctrine DBAL ডিপেন্ডেন্সি আর লাগবে না।
> - মাইগ্রেশন পরিবর্তনের সময় সব modifier (unsigned, default, comment) আবারও দিতে হবে।
> - Carbon 3.x ব্যবহার হচ্ছে, কিছু date method-এর behavior পরিবর্তিত।
> - Password hashing বা custom password field থাকলে `$authPasswordName` property যোগ করতে হবে।
> - image validation rule-এ SVG allow করতে চাইলে আলাদাভাবে allow করতে হবে।
> - এখন থেকে per-second rate limiting সাপোর্ট করে।
> - Laravel 12-এ নতুন অ্যাপ স্ট্রাকচার এসেছে, তবে পুরনো স্ট্রাকচারও সাপোর্ট করে।

---

## 🤝 BizBondhu Project Values

- “বন্ধুত্বপূর্ণ”—ইউজার ইন্টারফেস সহজ ও ভয়মুক্ত
- Banglish naming, বাংলাদেশের বিজনেস কনটেক্সটে ফিচার
- Low-cost, open-source deployment-friendly
- Easy extensibility—নতুন module plug-in করা যাবে

---

## 📦 Project Structure (Recap)

```
BizBondhu/
 ├── api/             # Laravel 10 LTS (API/backend)
 ├── frontend/        # React + Tailwind (frontend)
 ├── README.md
 └── docs/            # Documentation, architecture, dev notes
```

---

## 🗣️ Key Decision & Discussion Log

### Stack & UI
- Laravel 10 LTS (Backend), React + Tailwind (Frontend)
- Use Mosaic (Cruip) dashboard template, responsive, multi-tenant friendly UI

### Naming & Branding
- Banglish name: **BizBondhu** (business + বন্ধুত্ব)
- ফোল্ডার ও রিপো structure clean, future-proof

### Documentation & Onboarding
- All docs in `docs/`
  - API docs
  - Architecture
  - Developer onboarding
  - Contribution guideline
- README.md: Overview, setup, quick usage

---

## 📚 Documentation Structure

- `docs/`
  - `architecture/` - Architecture diagrams, design decisions
  - `api/` - API documentation, endpoints, usage
  - `dev-notes/` - Developer notes, tips, common issues
  - `onboarding/` - New developer onboarding guide
  - `contribution.md` - Contribution guidelines
  - `conversation-copilot.md` - Conversation history, main context
  - `README.md` - Project overview, quick start
---
## 📖 Documentation Overview


- **Architecture**: High-level design, module interaction, database schema
- **API**: Endpoints, request/response formats, authentication
- **Developer Notes**: Common issues, tips, best practices
- **Onboarding**: Step-by-step guide for new developers
- **Contribution Guidelines**: How to contribute, code review process
- **Conversation History**: Key decisions, project context, and vision
---
## 🚀 Quick Start
- **Backend:** See [api/README.md](api/README.md) for setup, configuration, and running the Laravel API. (Laravel 12 compatible)
- **Frontend**: See [frontend/README.md](frontend/README.md) for setup, configuration, and running the React + Tailwind SPA.
- **Docs**: All documentation is in the `docs/` directory, including architecture, API, developer notes, and onboarding guides.
- **Contribution**: Follow the guidelines in `docs/contribution.md` for contributing to the project.
---
## 📜 Project Overview
BizBondhu is a modern, multi-tenant ERP platform designed for small to medium enterprises in Bangladesh. It aims to provide a user-friendly interface, modular architecture, and essential features like HRM, CRM, Accounting, and Inventory management. The project is built using Laravel 10 for the backend and React with Tailwind CSS for the frontend, ensuring a responsive and modern user experience.


## 📝 Contribution Guideline

- Feature/bug branch → Pull Request → Code review → develop branch
- Docs & discussions in Markdown in `docs/`

---

## 🔗 UI Reference Links

- Mosaic Dashboard: [https://github.com/cruip/tailwind-dashboard-template](https://github.com/cruip/tailwind-dashboard-template)
- Demo: [https://tailwind-dashboard-template.cruip.com/](https://tailwind-dashboard-template.cruip.com/)
- Tailwind Components: [https://tailwindcomponents.com/](https://tailwindcomponents.com/)

---

## ℹ️ Note

এই ফাইলটি future developer, Copilot, বা নতুন টিম মেম্বার onboarding-এর জন্য একদম শুরুতেই দেখানো উচিত।  
নতুন module, requirement, বা সিদ্ধান্ত হলে এই ফাইলের “Main Context & Vision” অংশ আপডেট করতে থাকুন।

---

_© 2025 BizBondhu Team_