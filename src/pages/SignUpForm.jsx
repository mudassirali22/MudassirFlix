import React from "react";
import { Form, NavLink, useActionData } from "react-router-dom";

const Signup = () => {
  const actionData = useActionData()
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <Form
          method="Post"
          action="/signUp"
          onSubmit={(e) => {
            setTimeout(() => e.target.reset(), 0);
          }}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm"
              className="block text-gray-700 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Display action messages */}
          {actionData?.error && <p className="text-red-500 text-sm">{actionData.error}</p>}
          {actionData?.success && <p className="text-green-500 text-sm">{actionData.success}</p>}

          {/* Button */}
          <button
            type="submit"
            className="w-full  bg-gray-800 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Sign Up
          </button>
        </Form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Login In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
