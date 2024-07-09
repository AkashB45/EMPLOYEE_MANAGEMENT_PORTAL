import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#071952] to-[#14287c] shadow-lg fixed w-full z-10 px-6 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          Job Application Dashboard
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative flex items-center rounded-full bg-white bg-opacity-80 px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-100">
            <input
              type="text"
              className="w-full pl-10 pr-3 py-1 text-black rounded-full focus:outline-none"
              placeholder="Search"
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
          </div>
          <div className="relative">
            <select
              className="form-select rounded-full bg-white bg-opacity-80 px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 transition duration-300 ease-in-out"
            >
              <option value="">Sort by</option>
              <option value="date">Date</option>
              <option value="name">Name</option>
              <option value="position">Position</option>
            </select>
          </div>
          <div className="relative">
            <select
              className="form-select rounded-full bg-white bg-opacity-80 px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 transition duration-300 ease-in-out"
            >
              <option value="">Filter by</option>
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
