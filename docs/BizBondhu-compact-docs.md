# BizBondhu Project Documentation (সংক্ষিপ্ত ও ইউনিক)

এই ফাইলে BizBondhu ERP প্রকল্পের মূল কনটেক্সট, টেক স্ট্যাক, ডকুমেন্টেশন স্ট্রাকচার, কন্ট্রিবিউশন গাইড, অনবোর্ডিং, এবং API/মডিউল সারাংশ একত্রে দেওয়া হলো।

---

## 🎯 Vision & Context
- বাংলাদেশের SME, স্কুল, NGO, অফিসের জন্য আধুনিক, মাল্টি-টেন্যান্ট, মডুলার ERP
- Banglish naming, সহজ UI, cloud-ready, SaaS ফোকাস

## 🛠️ Tech Stack
- Backend: Laravel 12 (API-first)
- Frontend: React + Tailwind (SPA)
- Database: MySQL/Postgres (tenant-wise isolation)
- Auth: Sanctum (v4+), Role/Permission (Spatie)
- Multi-tenancy: Stancl Tenancy

> **নোট:** Laravel 12-এ কিছু breaking changes এসেছে। নিচে গুরুত্বপূর্ণ বিষয়গুলো দেওয়া হলো—
> - Sanctum, Passport, Telescope ইত্যাদি প্যাকেজের মাইগ্রেশন আলাদাভাবে publish করতে হয়:
>   `php artisan vendor:publish --tag=sanctum-migrations`
> - Doctrine DBAL ডিপেন্ডেন্সি আর লাগবে না।
> - মাইগ্রেশন পরিবর্তনের সময় সব modifier (unsigned, default, comment) আবারও দিতে হবে।
> - Carbon 3.x ব্যবহার হচ্ছে, কিছু date method-এর behavior পরিবর্তিত।
> - Password hashing বা custom password field থাকলে `$authPasswordName` property যোগ করতে হবে।
> - image validation rule-এ SVG allow করতে চাইলে আলাদাভাবে allow করতে হবে।
> - এখন থেকে per-second rate limiting সাপোর্ট করে।
> - Laravel 12-এ নতুন অ্যাপ স্ট্রাকচার এসেছে, তবে পুরনো স্ট্রাকচারও সাপোর্ট করে।

## 📦 Project Structure
```
BizBondhu/
 ├── api/             # Laravel 10 API/backend
 ├── frontend/        # React + Tailwind SPA
 └── docs/            # Documentation
```

## 📚 Documentation Structure
- `docs/architecture/` — Design, database, module overview
- `docs/api/` — API endpoints, usage
- `docs/dev-notes/` — টিপস, কমন ইস্যু
- `docs/onboarding/` — নতুন ডেভেলপার গাইড
- `docs/contribution.md` — কন্ট্রিবিউশন প্রসেস

## 🚀 Quick Start
1. কোড ক্লোন করুন
2. Backend: `composer install`, `npm install`, `.env`, `php artisan migrate`, `php artisan vendor:publish --tag=sanctum-migrations`, `php artisan serve`
3. Frontend: `npm install`, `npm run dev`

> **নোট:** Laravel 12 compatible, tested on Laravel 12.x

## 👤 User Management
- Register, Login, Logout, User Info (Sanctum)
- Role/Permission (Spatie): রোল অ্যাসাইন/রিমুভ, পারমিশন অ্যাসাইন/রিমুভ

## 🏢 Multi-tenancy
- Stancl Tenancy: Tenant create/list, tenant-aware API

## 👥 HRM (উদাহরণ)
- Employee CRUD
- Attendance CRUD

## 📝 Contribution Guideline
- ফিচার/বাগ ব্রাঞ্চ → PR → Code review → develop
- ডকস Markdown-এ

---

_এই ফাইলটি ডুপ্লিকেট ছাড়া, কেবল ইউনিক ও প্রয়োজনীয় তথ্য সংক্ষেপে সংরক্ষণ করে।_

_© 2025 BizBondhu Team_
