# BizBondhu ERP – Dox Unique Content (Final)

এই ফাইলে `/docs/dox` ফোল্ডারের ৫৯টি `.md` ফাইলের ইউনিক ও চূড়ান্ত কনটেন্ট একত্রে সংরক্ষিত হয়েছে।

---

## Context, Vision, Tech Stack
- Bangladeshi SME/office/clinic-centric, Banglish, user-friendly, cloud-ready ERP
- Laravel 12 LTS (API), React + Tailwind (SPA), MySQL/Postgres, Cloudinary/local storage
- Multi-tenancy, modular, scalable, open-source, future-ready

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

## Core Modules & Unique Workflows

### HRM (Employee, Attendance, Leave, Payroll, Appraisal, Recruitment, Exit, Training)
- Employee master/profile, document upload, org chart
- Attendance (biometric/app/manual), shift, overtime, approval, reporting
- Leave (type, application, approval, balance, reporting)
- Payroll (structure, processing, payslip, compliance, disbursement, reporting)
- Appraisal, recruitment, onboarding, exit, training, analytics

### Accounts & Finance
- Chart of Accounts, journal entry, ledger, AR/AP, bank/cash, expense, asset, budgeting, tax, reporting

### CRM
- Lead, account, contact, opportunity, quotation, sales order, communication, campaign, support, document, reporting, integration, audit, territory, partner/channel, contract, SLA

### Sales
- Lead, opportunity, quotation, sales order, delivery, invoicing, payment, customer, return, analytics

### Purchase
- Requisition, RFQ, quotation, PO, GRN, invoice, return, approval, analytics, integration, security

### Inventory/Stock
- Item/category, stock in/out, adjustment, warehouse/bin, transfer, valuation, reorder, audit, reporting

### Asset Management
- Asset issue/return, inventory, tracking, maintenance, disposal, reporting, audit

### Project Management
- Project, task, milestone, timesheet, issue, resource, document, reporting

### Vendor/Supplier Portal
- Registration, onboarding, catalog, RFQ, PO, invoice, payment, dispute, notification

### Customer Portal
- Registration, KYC, profile, order, invoice, payment, support, feedback, notification

### Loan & Advance
- Application, eligibility, approval, disbursement, repayment, EMI, reporting

### Document Management
- Upload, expiry, renewal, access control, audit, compliance

### Audit Trail/Activity Log
- Action tracking, field-level log, filter/search, export, compliance

### Multi-Tenancy
- Tenant registration, onboarding, domain, data isolation, feature toggle, billing, usage

### BI Dashboard
- Data source, KPI/widget, dashboard builder, drilldown, analytics, alert, export

### Budgeting & Forecasting
- Budget entry, approval, tracking, variance, forecast, alert, reporting

### Support/Help Desk
- Ticket/case, assignment, status, escalation, feedback, reporting

### Internal Messaging
- User/group/department message, notice board, attachment, notification, search

### Workflow/Process Automation
- Visual builder, approval/escalation, trigger, versioning, monitor, audit

### E-commerce Integration
- Channel registration, product sync, order import, payment, analytics

### Production/Manufacturing
- BOM, plan, job order, WIP, entry, QC, stock, downtime, reporting

---

## Database & Schema (Sample)
- Multi-warehouse: products, warehouses, warehouse_product_stocks, stock_movements
- Tenant-wise isolation, modular ERD, extensible for all modules

---

## Feature List (Summary)
- Multi-tenancy, user/role/permission, authentication, dashboard, product/service, warehouse, inventory, purchase, sales, accounting, HRM, CRM, project, asset, document, notification, API, multi-language, audit, settings, backup

---

## Implementation & Contribution
- Tenant-aware config, cloud/VPS deploy, modular UI, open-source, onboarding, contribution guideline
- **Laravel 12 compatible, tested on Laravel 12.x**

---

_© 2025 BizBondhu Team_
