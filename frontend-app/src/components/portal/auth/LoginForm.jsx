import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = ({ redirect, signIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${username}`);
    navigate(redirect);
  };

  const handleGoogleLogin = () => {
    alert(`Logging in with Google`);
    navigate(redirect);
  };

  return (
    <section className="flex items-center justify-center bg-white px-4 pt-40">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200 transition-all duration-300 hover:shadow-purple-500/10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Welcome Back to{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            MineGuard
          </span>
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-gray-900 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-900 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-md transition-all"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-2 text-gray-500 text-sm">
              OR
            </span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-gray-50 hover:bg-gray-100 transition-all"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Login with Google</span>
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to={signIn}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;