import React, { useState } from 'react';

const Admin_login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Replace with real authentication logic (e.g., API call)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Example: send email and password to server here
    console.log('Login submitted:', { email, password });

    // Temporarily reset error (until real response comes)
    setError('');
  };

  return (
    <div className="flex items-center justify-center my-10 bg-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 border border-red-400 rounded px-4 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Admin Email</label>
            <input
              type="email"
              placeholder="Enter your admin email"
              className="w-full mt-1 px-4 py-2 rounded bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin_login;
