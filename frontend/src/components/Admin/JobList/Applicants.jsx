import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../../Themecontext';
import NavBar from '../../Global/Navbar/Navbar';
import { filterApplicants } from '../../Global/Navbar/Filters';

const Applicants = () => {
  const { jobs, applicants, search } = useContext(ThemeContext);
  const { jobId } = useParams();
  const filteredApplicants = filterApplicants(applicants, search);

  // Find the job with the matching jobId
  const job = jobs.find(job => job._id === jobId);

  // Get applicants related to the job
  const jobApplicants = filteredApplicants.filter(applicant => job?.applicants.includes(applicant._id));

  // Function to get background color based on status
  const getStatusColor = (status) => {
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
      <div className="container mx-auto p-5 mt-5" style={{ position: 'absolute', top: '6rem' }}>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Applicants for {job?.title}</h2>
        
        {/* Job Details Section */}
        {job && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Job Details</h3>
            <div className="bg-white p-4 rounded shadow-md">
              <p><strong>Title:</strong> {job.title}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Posted Date:</strong> {job.postedDate}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Qualification:</strong> {job.qualification}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
            </div>
          </div>
        )}

        {/* Applicants Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">SNo</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Applicant Name</th>
                <th className="w-3/12 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Contact No</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Resume</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {jobApplicants.map((applicant, index) => (
                <tr key={applicant._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="text-left py-3 px-4">{index + 1}</td>
                  <td className="text-left py-3 px-4">{applicant.name}</td>
                  <td className="text-left py-3 px-4">
                    <a href={`mailto:${applicant.email}`} className="text-blue-600 hover:underline">{applicant.email}</a>
                  </td>
                  <td className="text-left py-3 px-4">{applicant.contactNo}</td>
                  <td className="text-left py-3 px-4">
                    <a href={applicant.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Resume</a>
                  </td>
                  <td className={`text-left py-3 px-4 ${getStatusColor(applicant.status)}`}>{applicant.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Applicants;
