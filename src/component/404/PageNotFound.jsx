import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 p-6">
      {/* SVG Icon */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-32 h-32 text-orange-600"
          fill="currentColor"
        >
          <path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2zm0 56C17.8 58 6 46.2 6 32S17.8 6 32 6s26 11.8 26 26-11.8 26-26 26z"/>
          <path d="M38 22c0-3.3-2.7-6-6-6s-6 2.7-6 6h-3c0-5 4-9 9-9s9 4 9 9h-3zm0 4l-6 6-6-6h12zm-6 9c-5 0-9 4-9 9h3c0-3.3 2.7-6 6-6s6 2.7 6 6h3c0-5-4-9-9-9z"/>
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 – Page Not Found
      </h1>

      {/* Message */}
      <p className="text-gray-700 text-center mb-6 max-w-md">
        Oops! Looks like you've wandered into a part of the kitchen that's closed.
      </p>

      {/* Back to Dashboard Button */}
      <Link
        to="/admin/dashboard"
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition-transform transform hover:-translate-y-1"
      >
        Return to Dashboard
      </Link>
    </div>
  );
};

export default PageNotFound;
