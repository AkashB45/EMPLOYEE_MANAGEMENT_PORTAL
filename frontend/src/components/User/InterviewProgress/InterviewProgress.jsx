import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../Themecontext';
import NavBar from '../../Global/Navbar/Navbar';
// import './ApplicantDetails.css';
import { filterPosts, filterUsers, filterApplicants } from '../../Global/Navbar/Filters'; // Adjust path as needed

const InterviewProgress = () => {
  const { applicants, setApplicants,search } = useContext(ThemeContext);
  const filteredApplicants = filterApplicants(applicants, search);
  
  const [viewResume, setViewResume] = useState(null); // State for controlling the resume popup

  const handleStatusChange = (id, newStatus) => {
    const updatedApplicants = applicants.map((applicant) =>
      applicant.id === id ? { ...applicant, status: newStatus } : applicant
    );
    setApplicants(updatedApplicants);
  };

  const getStatusClass = (status) => {
    switch (status) {
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

  const handleSendResponse = (id) => {
    // Implement your logic here to handle sending response
    console.log(`Sending response for applicant with ID ${id}`);
  };

  const openResume = (resumeUrl) => {
    window.open(resumeUrl, '_blank'); // Open PDF document in a new tab
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-5 mt-5 mx-10" style={{ position: "absolute", top: "6rem" }}>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Interview Progress</h2>
        {filteredApplicants
                  .filter((applicant) => (applicant.status !== 'New' && applicant.status !=='Rejected')).length === 0 ? (
          <p className="text-center text-gray-700">No Applicants found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Contact No</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Position</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Resume</th>
                  <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                  <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Interview Date</th>
                  <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {filteredApplicants
                  .filter((applicant) => (applicant.status !== 'New' && applicant.status !== 'Rejected'))
                  .map((applicant) => (
                    <tr key={applicant.id} className="bg-gray-100">
                      <td className="text-left py-3 px-4">{applicant.id}</td>
                      <td className="text-left py-3 px-4">{applicant.name}</td>
                      <td className="text-left py-3 px-4">
                        <a href={`mailto:${applicant.email}`} className="text-blue-500 hover:underline">
                          {applicant.email}
                        </a>
                      </td>
                      <td className="text-left py-3 px-4">{applicant.contactNo}</td>
                      <td className="text-left py-3 px-4">{applicant.position}</td>
                      <td className="text-left py-3 px-4">
                        <button
                          onClick={() => openResume(applicant.resume)}
                          className="text-blue-500 hover:underline focus:outline-none"
                        >
                          View Resume
                        </button>
                      </td>
                      <td className="text-left py-3 px-4">
                        <select
                          value={applicant.status}
                          onChange={(e) => handleStatusChange(applicant.id, e.target.value)}
                          className={`p-2 rounded-lg ${getStatusClass(applicant.status)}`}
                        >
                          <option value="Interview" className="bg-yellow-500 text-white">Interview</option>
                          <option value="Accepted" className="bg-green-500 text-white">Accepted</option>
                          <option value="Rejected" className="bg-red-500 text-white">Rejected</option>
                          <option value="Future" className="bg-purple-500 text-white">Future</option>
                        </select>
                      </td>
                      <td className="text-left py-3 px-4">
                        <input
                          type="date"
                          className="rounded-lg bg-gray-100 px-2 py-1 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                      </td>
                      <td className="text-left py-3 px-4">
                        <button
                          onClick={() => handleSendResponse(applicant.id)}
                          className="bg-blue-600 text-white rounded-full px-4 py-1 hover:bg-blue-700 transition duration-300 mr-2"
                        >
                          Send Response
                        </button>
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

export default InterviewProgress;
