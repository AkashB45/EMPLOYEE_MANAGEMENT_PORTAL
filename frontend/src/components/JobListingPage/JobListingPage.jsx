import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import Jobs from './Jobs';
import { ThemeContext } from '../../Themecontext';

const JobListingPage = () => {
  const { posts } = useContext(ThemeContext);

  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-end mb-4">
        <Link to="/NewJobForm" className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
          Create New Job
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="flex justify-center">
            <Jobs post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingPage;