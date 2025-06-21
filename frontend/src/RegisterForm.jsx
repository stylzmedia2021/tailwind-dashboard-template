import React, { useState } from 'react';

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '', news: false });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Registration successful!');
      } else {
        setMessage(data.message || 'Registration failed.');
      }
    } catch {
      setMessage('Network error.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Signup Form */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 md:px-24 lg:px-32 bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create your Account</h2>
            <p className="text-gray-500">Sign up to get started</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center">
              <input
                id="news"
                name="news"
                type="checkbox"
                checked={form.news}
                onChange={handleChange}
                className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
              />
              <label htmlFor="news" className="ml-2 block text-sm text-gray-600">
                Email me about product news.
              </label>
            </div>
            <button
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-lg text-base transition disabled:opacity-50 shadow-md"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            {message && <div className="text-center text-red-600">{message}</div>}
            <div className="text-center text-sm mt-4">
              Have an account? <a href="#" className="text-violet-700 hover:underline">Sign In</a>
            </div>
          </form>
        </div>
      </div>
      {/* Right: Image */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80')"}}></div>
    </div>
  );
}
