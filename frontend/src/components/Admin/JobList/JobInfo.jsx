import React, { useContext } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../Themecontext';
import NavBar from '../../Navbar/Navbar';

const JobInfo = () => {
  const { departments, jobs } = useContext(ThemeContext);
  const location = useLocation();
  const endpoint = location.pathname.split('/');
  const departmentId = endpoint[endpoint.length - 1];
  // Find the department with the matching _id
  const department = departments.find(dep => dep._id === departmentId);

  // Filter jobs that belong to the current department
  const departmentJobs = jobs.filter(job => department.jobs.includes(job._id));

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-5 mt-5" style={{ position: 'absolute', top: '6rem' }}>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Job Information for {department?.name}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">SNo</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Job Title</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">No of Vacancies</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">No of Applicants</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Selected</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Rejected</th>
                <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">In Progress</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {departmentJobs.map((job, index) => (
                <tr key={job._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="text-left py-3 px-4">{index + 1}</td>
                  <td className="text-left py-3 px-4">{job.title}</td>
                  <td className="text-left py-3 px-4">{job.vacancy}</td>
                  <td className="text-left py-3 px-4">{job.applicants.length}</td>
                  <td className="text-left py-3 px-4">{job.selected}</td>
                  <td className="text-left py-3 px-4">{job.rejected}</td>
                  <td className="text-left py-3 px-4">{job.inprogress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
