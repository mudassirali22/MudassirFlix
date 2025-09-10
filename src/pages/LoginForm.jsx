import React from "react";
import { NavLink, Form, useActionData } from "react-router-dom";

const Login = () => {
  const actionData = useActionData(); // Get data returned from loginData action

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <Form
          method="post"
          action="/login"
          className="space-y-5"
        >
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* display action data  */}
          {actionData?.error && (
            <p className="text-red-500 text-sm">{actionData.error}</p>
          )}
          {actionData?.success && (
            <p className="text-green-500 text-sm">{actionData.success}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Log In
          </button>
        </Form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
