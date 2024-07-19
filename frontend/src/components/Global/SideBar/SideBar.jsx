import React, { useState } from 'react';
import { FaHome, FaInfo, FaServicestack, FaEnvelope, FaBars, FaTimes,FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = ({ toggleSidebar, isOpen }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-10 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />
      <div
        className={`fixed inset-y-0 left-0 transform transition-transform duration-300 z-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-gray-800 text-white shadow-lg`}
      >
        <div className="flex flex-col h-full p-3">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Divakar Infotech Solutions</h2>
              <button onClick={toggleSidebar} className="text-white">
                <FaTimes />
              </button>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <Link to={"/Profile"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaUserAlt />
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to={"/AdminDashBoard"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaHome />
                    <span>Admin DashBoard</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to={"/UserRegisteration"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaInfo />
                    <span>User Registeration</span>
                  </Link>
                </li>
                
                <li className="rounded-sm">
                  <Link to={"/DepartmentListUsers"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaInfo />
                    <span>Users List</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to={"/DepartmentListJobs"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaInfo />
                    <span>Jobs List</span>
                  </Link>
                </li>
                {/* <li className="rounded-sm">
                  <Link to={"/UserList"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaInfo />
                    <span>User List</span>
                  </Link>
                </li> */}
                <li className="rounded-sm">
                  <Link to={"/UserDashBoard"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaHome />
                    <span>User DashBoard</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to={"/application"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaServicestack />
                    <span>Application Form</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to={"/AddJobList"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaInfo />
                    <span>Post Jobs</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to={"/ApplicantDetails"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaServicestack />
                    <span>Applicant Details</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to={"/InterviewProgress"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaServicestack />
                    <span>Interview Progress</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to={"/AdminLogin"} className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                    <FaEnvelope />
                    <span>LogOut</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
