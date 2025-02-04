import React, { useContext } from 'react';
import { ThemeContext } from '../../../Themecontext';
import NavBar from '../../Global/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { filterDepartments } from '../../Global/Navbar/Filters';

const DepartmentListJobs = () => {
  const { companies, departments, search } = useContext(ThemeContext);

  // Filter departments that belong to the company and match the search query
  const filteredDepartments = filterDepartments(departments, search);

  // Assuming you want to check for the first company in the array
  const company = companies[0];

  // Filter departments that belong to the company
  const companyDepartments = filteredDepartments.filter(department => company.department.includes(department._id));

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-5 mt-5 mx-10" style={{ position: 'absolute', top: '6rem' }}>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Department List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">SNo</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Department</th>
                <th className="w-4/12 text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">No of Job posts</th>
                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {companyDepartments.map((department, index) => (
                <tr key={department._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="text-left py-3 px-4">{index + 1}</td>
                  <td className="text-left py-3 px-4">{department.name}</td>
                  <td className="text-left py-3 px-4">{department.description}</td>
                  <td className="text-left py-3 px-4">{department.jobs.length}</td>
                  <td className="text-left py-3 px-4">
                    <Link
                      to={`${department._id}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded"
                    >
                      View Jobs
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepartmentListJobs;
