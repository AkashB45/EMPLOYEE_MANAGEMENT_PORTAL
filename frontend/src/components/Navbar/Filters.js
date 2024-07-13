// filters.js

// Function to filter posts based on search input
export const filterPosts = (posts, searchQuery) => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  // Function to filter users based on search input
  export const filterUsers = (users, searchQuery) => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
  