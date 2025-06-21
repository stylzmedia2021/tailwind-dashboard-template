import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b">BizBondhu</div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li><a href="#" className="block px-3 py-2 rounded hover:bg-blue-100">Dashboard</a></li>
            <li><a href="#" className="block px-3 py-2 rounded hover:bg-blue-100">Register</a></li>
            <li><a href="#" className="block px-3 py-2 rounded hover:bg-blue-100">Login</a></li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center px-6 justify-between">
          <span className="font-semibold text-lg">BizBondhu ERP</span>
          <span className="text-gray-500 text-sm">Modern ERP for Bangladesh</span>
        </header>
        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
