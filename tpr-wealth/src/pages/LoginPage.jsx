import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate=useNavigate()
  const [authMode, setAuthMode] = useState("login"); // Modes: login, signup, forgotPassword
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const endpoint =
      authMode === "signup"
        ? "/api/auth/signup"
        : authMode === "login"
        ? "/api/auth/login"
        : "/api/auth/forgot-password";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authMode === "forgotPassword" ? { email: formData.email } : formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Success!");
        if (authMode === "signup" || authMode === "forgotPassword") {
          setAuthMode("login"); // Redirect to login after signup or forgot password
        }
        else if (authMode==="login"){
          navigate("/profile", { state: { user: data.user } })
        }
      } else {
        setMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };
  if (message==="Login successful"){
    console.log(formData.name)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {authMode === "login"
            ? "Login"
            : authMode === "signup"
            ? "Sign Up"
            : "Forgot Password"}
        </h2>

        {message && <p className="text-green-400 text-center mb-4">{message}</p>}

        <form onSubmit={handleAuthSubmit} className="space-y-4">
          {/* Name Field (only for Signup) */}
          {authMode === "signup" && (
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-gray-500"
                required={authMode === "signup"}
              />
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          {/* Password Field (not for Forgot Password) */}
          {authMode !== "forgotPassword" && (
            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-gray-500"
                required={authMode !== "forgotPassword"}
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-300 to-gray-500 text-black px-8 py-3 rounded-lg hover:from-gray-400 hover:to-gray-600"
            >
              {authMode === "login"
                ? "Login"
                : authMode === "signup"
                ? "Sign Up"
                : "Send Reset Link"}
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center text-gray-400">
          {authMode === "login" && (
            <>
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setAuthMode("signup")}
                  className="text-blue-400 hover:underline"
                >
                  Sign Up
                </button>
              </p>
              <p>
                Forgot your password?{" "}
                <button
                  onClick={() => setAuthMode("forgotPassword")}
                  className="text-blue-400 hover:underline"
                >
                  Reset it here
                </button>
              </p>
            </>
          )}

          {authMode === "signup" && (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setAuthMode("login")}
                className="text-blue-400 hover:underline"
              >
                Login
              </button>
            </p>
          )}

          {authMode === "forgotPassword" && (
            <p>
              Remembered your password?{" "}
              <button
                onClick={() => setAuthMode("login")}
                className="text-blue-400 hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
