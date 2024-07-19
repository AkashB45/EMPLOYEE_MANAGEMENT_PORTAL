import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../Themecontext';
import NavBar from '../../Global/Navbar/Navbar';
import './ApplicantDetails.css';
import { filterApplicants } from '../../Global/Navbar/Filters'; // Adjust path as needed

const ApplicationDetails = () => {
  const { applicants, setApplicants, search, currentUser, departments, jobs } = useContext(ThemeContext);

  // Find the department of the current user
  const userDepartment = departments.find(department =>
    department.users.includes(currentUser._id)
  );

  // Get job IDs of the user's department
  const departmentJobIds = userDepartment ? userDepartment.jobs : [];

  // Get jobs in the user's department
  const departmentJobs = jobs.filter(job => departmentJobIds.includes(job._id));

  // Get applicant IDs from the jobs in the user's department
  const departmentApplicantIds = departmentJobs.reduce((acc, job) => {
    return acc.concat(job.applicants);
  }, []);

  // Filter applicants based on the applicant IDs from the department jobs
  const departmentApplicants = applicants.filter(applicant =>
    departmentApplicantIds.includes(applicant._id)
  );

  // Filter applicants based on search criteria
  const filteredApplicants = filterApplicants(departmentApplicants, search);

  // Handle status change for an applicant
  const handleStatusChange = (id, newStatus) => {
    const updatedApplicants = applicants.map(applicant =>
      applicant._id === id ? { ...applicant, status: newStatus } : applicant
    );
    setApplicants(updatedApplicants);
  };

  // Get status class for styling
  const getStatusClass = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-500 text-white';
      case 'Interview':
        return 'bg-yellow-500 text-white';
      case 'Accepted':
        return 'bg-green-500 text-white';
      case 'Rejected':
        return 'bg-red-500 text-white';
      case 'Future':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-5 mt-5 mx-10" style={{ position: "absolute", top: "6rem" }}>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Applicant Details</h2>
        {filteredApplicants.length === 0 ? (
          <p className="text-center text-gray-700"><br />No Applicants found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">Sno</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Contact No</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Position</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Resume</th>
                  <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {filteredApplicants.map((applicant, index) => (
                  <tr key={applicant._id} className="bg-gray-100">
                    <td className="text-left py-3 px-4">{index + 1}</td>
                    <td className="text-left py-3 px-4">{applicant.name}</td>
                    <td className="text-left py-3 px-4">
                      <a href={`mailto:${applicant.email}`} className="text-blue-500 hover:underline">
                        {applicant.email}
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">{applicant.contactNo}</td>
                    <td className="text-left py-3 px-4">{applicant.position}</td>
                    <td className="text-left py-3 px-4">
                      <a href={applicant.resume} target="_blank" className="text-blue-500 hover:underline">
                        View Resume
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <select
                        value={applicant.status}
                        onChange={(e) => handleStatusChange(applicant._id, e.target.value)}
                        className={`p-2 rounded-lg ${getStatusClass(applicant.status)}`}
                      >
                        <option value="New" className="bg-blue-500 text-white">New</option>
                        <option value="Interview" className="bg-yellow-500 text-white">Interview</option>
                        <option value="Accepted" className="bg-green-500 text-white">Accepted</option>
                        <option value="Rejected" className="bg-red-500 text-white">Rejected</option>
                        <option value="Future" className="bg-purple-500 text-white">Future</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetails;
