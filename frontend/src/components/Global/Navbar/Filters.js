// filters.js

// Function to filter posts based on search input
export const filterJobs = (jobs, searchQuery) => {
  return jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase()) 
    // job.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
};
 

export const filterDepartments = (departments, searchQuery) => {
  return departments.filter(department =>
    department.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    department.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

  
  // Function to filter users based on search input
  export const filterUsers = (users, searchQuery) => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase())
      
    );
  };
  
  
  // Function to filter applicants based on search input
  export const filterApplicants = (applicants, searchQuery) => {
    return applicants.filter(applicant =>
      applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.position.toLowerCase().includes(searchQuery.toLowerCase())||
      applicant.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  