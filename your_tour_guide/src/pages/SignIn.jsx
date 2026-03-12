import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
setSuccessMessage("");
setErrorMessage("");

try {
  const response = await axios.post(
    "https://duoygemra1.execute-api.ap-south-1.amazonaws.com/default/auth",
    {
      action: "login",
      email: email,
      password: password
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  console.log(response.data);

  setSuccessMessage("Sign in successful!");

  setTimeout(() => {
    navigate("/home");
  }, 1500);

} catch (error) {
  console.error(error);

  if (error.response) {
    setErrorMessage(error.response.data.message || "Invalid email or password");
  } else if (error.request) {
    setErrorMessage("Server not responding");
  } else {
    setErrorMessage("Something went wrong");
  }
}

setLoading(false);

};

return ( <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-[#fff5f5]"> <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md border border-gray-100">

```
    <h1 className="text-3xl font-bold text-[#9e2a2b] mb-4 text-center">
      Sign In
    </h1>

    <p className="text-sm text-gray-500 mb-6 text-center">
      Welcome back — sign in to continue.
    </p>

    {successMessage && (
      <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
        {successMessage}
      </div>
    )}

    {errorMessage && (
      <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
        {errorMessage}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#9e2a2b] text-white font-bold py-2 rounded-lg hover:bg-[#7a1f21]"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>

    </form>

    <div className="mt-6 text-center text-sm text-gray-600">
      Don't have an account?{" "}
      <Link to="/signup" className="text-[#9e2a2b] font-semibold">
        Create one
      </Link>
    </div>

  </div>
</div>

);
};

export default SignIn;
