import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);
  setSuccessMessage('');
  setErrorMessage('');

  if (password !== confirmPassword) {
    setErrorMessage('Passwords do not match');
    setIsLoading(false); // FIX
    return;
  }

  try {

    const response = await axios.post(
      "https://duoygemra1.execute-api.ap-south-1.amazonaws.com/default/auth",
      {
        action: "signup",
        name,
        email,
        password
      }
    );

    console.log(response.data);

    setSuccessMessage("Sign up successful!");

    setTimeout(() => navigate("/signin"), 2000);

  } catch (error) {

    console.error(error);
    setErrorMessage("Sign up failed. Please try again.");

  } finally {

    setIsLoading(false);

  }
};

  //aws lambda api https://duoygemra1.execute-api.ap-south-1.amazonaws.com/default/auth

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-[#fff5f5]">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold text-[#9e2a2b] mb-4 text-center">Create Account</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">Join YourTourGuide to save favorites and get local tips.</p>

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errorMessage}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#9e2a2b]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#9e2a2b]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#9e2a2b]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#9e2a2b]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#9e2a2b] hover:bg-[#7a1f21] text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link to="/signin" className="text-[#9e2a2b] font-semibold">Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
