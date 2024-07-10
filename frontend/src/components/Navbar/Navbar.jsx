import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 px-6 py-4">
      <div className="container mx-auto flex items-center justify-around">
        <div className="text-blue-700 text-3xl font-bold">
          Job Dashboard
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative flex items-center rounded-lg bg-gray-100 px-4 py-2 shadow focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              className="w-full pl-8 pr-4 py-2 text-gray-800 bg-transparent rounded-lg focus:outline-none"
              placeholder="Search jobs..."
            />
            <svg
              className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full px-4 py-1 hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>
          <div className="relative">
            <select
              className="form-select rounded-lg bg-gray-100 px-4 py-2 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="" disabled selected>
                Sort by
              </option>
              <option value="date">Date</option>
              <option value="name">Name</option>
              <option value="position">Position</option>
            </select>
          </div>
          <div className="relative">
            <select
              className="form-select rounded-lg bg-gray-100 px-4 py-2 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="" disabled selected>
                Filter by
              </option>
              <option value="status">Status</option>
              <option value="department">Department</option>
              <option value="location">Location</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
