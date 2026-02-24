import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-[#fff5f5]">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold text-[#9e2a2b] mb-4 text-center">Create Account</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">Join YourTourGuide to save favorites and get local tips.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#9e2a2b]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#9e2a2b]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#9e2a2b]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#9e2a2b]"
            />
          </div>

          <button className="w-full bg-[#9e2a2b] hover:bg-[#7a1f21] text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Create Account
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
