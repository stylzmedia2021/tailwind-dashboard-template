# 🚦 User Registration & Onboarding Policy (BizBondhu)

- **Public Registration:** Only for new organizations/tenants (businesses, schools, NGOs, etc.). This creates a new tenant and a tenant admin user.
- **Super Admin:** Only seeded from the database (see `DatabaseSeeder.php`). Super admin cannot be created via public registration.
- **Staff/Other Users:** Can only be invited/created by the tenant admin from within the ERP admin panel. No public registration for staff.
- **Roles:**
  - `super-admin`: Platform owner, seeded only.
  - `tenant-admin`: First user of each tenant, created via public registration.
  - `staff`/`user`: Created/invited by tenant admin.

**Note:** This policy ensures security and proper onboarding for multi-tenant SaaS. See backend code and seeder for implementation details.
