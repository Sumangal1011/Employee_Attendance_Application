import React, { useState } from 'react';

const LoginPage = () => {
  const [empId, setempId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Entered By User', { empId, password });
  };

  return (
    <div className="flex items-center justify-center my-10 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input type="empId" value={empId} onChange={(e) => setempId(e.target.value)} className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Your Employee ID' required/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='password'required/>
          </div>
          <button type="submit"className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none">
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account? Contact your HR..
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
