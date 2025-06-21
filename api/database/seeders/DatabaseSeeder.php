<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create Super Admin (seed only)
        $superAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@bizbondhu.com',
            'password' => Hash::make('supersecurepassword'),
        ]);
        $role = Role::firstOrCreate(['name' => 'super-admin']);
        $superAdmin->assignRole($role);

        // Optionally, seed a demo tenant admin (for testing only)
        // $tenantAdmin = User::create([
        //     'name' => 'Demo Tenant Admin',
        //     'email' => 'tenantadmin@demo.com',
        //     'password' => Hash::make('tenantpassword'),
        // ]);
        // $role = Role::firstOrCreate(['name' => 'tenant-admin']);
        // $tenantAdmin->assignRole($role);
    }
}
