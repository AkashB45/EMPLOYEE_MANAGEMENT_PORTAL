import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { ThemeContext } from '../../Themecontext';
import { filterPosts, filterUsers, filterApplicants } from './Filters'; // Adjust path as needed


const Navbar = () => {
  const { posts, setPosts, users, applicants,search,setSearch } = useContext(ThemeContext)
  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

 

  // Handle form submission (if needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or filtering action
    // For example: update state with filtered results
    // setFilteredResults(filteredResults);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 px-6 py-2">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:justify-around">
        <div className="text-blue-700 text-2xl font-bold">
          OnBoardMaster
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-6 w-full lg:w-auto space-y-4 lg:space-y-0 mt-4 lg:mt-0">
          <form className="relative flex items-center rounded-lg bg-gray-100 px-4 py-2 shadow focus-within:ring-2 focus-within:ring-blue-500 w-full lg:w-64" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full pl-8 pr-4 py-1 text-gray-800 bg-transparent rounded-lg focus:outline-none"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
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
          </form>
          <div className="flex flex-row lg:flex-row lg:space-x-10 w-full lg:w-auto space-y-0 lg:space-y-0">
            {/* Add your sorting and filtering options here */}
            <div className="relative w-full lg:w-auto">
              <select
                className="form-select w-full lg:w-auto rounded-lg bg-gray-100 px-4 py-1 lg:py-2 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="" disabled selected>
                  Sort by
                </option>
                <option value="date">Date</option>
                <option value="name">Name</option>
                <option value="position">Position</option>
              </select>
            </div>
            <div className="relative w-full lg:w-auto">
              <select
                className="form-select w-full lg:w-auto rounded-lg bg-gray-100 px-4 py-1 lg:py-2 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
      </div>
    </nav>
  );
};

export default Navbar;
