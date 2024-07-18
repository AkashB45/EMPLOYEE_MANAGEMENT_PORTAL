import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Jobs from './Jobs';
import { ThemeContext } from '../../../Themecontext';
import NavBar from '../../Global/Navbar/Navbar';
// import './jobListings.css'; // Import external CSS
import { currentUser,filterJobs, filterUsers, filterApplicants } from'../../Global/Navbar/Filters'; // Adjust path as needed

const JobListingPage = () => {
  const { currentUser,departments,users,jobs,search } = useContext(ThemeContext);
  const userDepartment = departments.find(department => 
    department.users.includes(currentUser._id)
  );
  const departmentJobs = userDepartment ? 
  jobs.filter(job => userDepartment.jobs.includes(job._id)) : [];
  
  const filteredJobs = filterJobs(departmentJobs, search);
  // console.log(filteredJobs);
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-5 mt-5" style={{position:"absolute",top:"6rem"}}>
        <div className="flex justify-end mb-4">
          <Link
            to={`NewJobForm/${userDepartment._id}`}
            className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Post New Job
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Posted Jobs</h2>

        {filteredJobs.length === 0 ? (
          <div className="text-center text-gray-600">
            Currently No Job Vacancy Available
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredJobs.map((job) => (
              <div key={job._id} className="flex justify-center">
                <div className="job-container">
                  <Jobs job={job} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListingPage;
