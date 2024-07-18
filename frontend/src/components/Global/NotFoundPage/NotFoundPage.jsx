import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl text-gray-800 mb-4">Oops! Page not found.</p>
        <p className="text-lg text-gray-600 mb-6">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className="mb-6">
          <p className="text-lg text-gray-600">Here are some things you can do:</p>
          <ul className="text-left list-disc list-inside text-lg text-gray-600">
            <li>Check the URL for any typos or errors.</li>
            <li>Return to the <Link to="/Home" className="text-blue-600 underline hover:text-blue-800">Home Page</Link>.</li>
            <li>Contact our support team for assistance at <a href="mailto:support@example.com" className="text-blue-600 underline hover:text-blue-800">support@example.com</a>.</li>
          </ul>
        </div>
        <p className="text-lg text-gray-600 mb-4">Still can't find what you're looking for?</p>
        <Link to="/ContactPage" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">Contact Us</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;