import React, { useContext } from 'react';
import Jobs from './Jobs';
import { ThemeContext } from '../../Themecontext';

const JobListingPage = () => {
  const { posts } = useContext(ThemeContext);

  return (
    <div className="container mx-auto p-5">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <Jobs post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingPage;
