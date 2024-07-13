import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const[search,setSearch]  = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Innovators',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing and maintaining web applications using React.js and other modern web technologies.',
      postedDate: '2024-06-01',
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Data Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$80,000 - $100,000',
      description: 'Join our team as a Backend Developer, working with Node.js and Express.js to build scalable and efficient server-side applications.',
      postedDate: '2024-06-05',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Minds',
      location: 'Austin, TX',
      type: 'Part-time',
      salary: '$40,000 - $60,000',
      description: 'We are seeking a talented UI/UX Designer to create engaging and user-friendly interfaces for our web and mobile applications.',
      postedDate: '2024-06-10',
      skills: ['Sketch', 'Figma', 'Adobe XD', 'User Research'],
    },
    {
      id: 4,
      title: 'Project Manager',
      company: 'Business Corp',
      location: 'Remote',
      type: 'Contract',
      salary: '$50,000 - $70,000',
      description: 'As a Project Manager, you will be responsible for overseeing project timelines, coordinating with teams, and ensuring successful project delivery.',
      postedDate: '2024-06-12',
      skills: ['Project Management', 'Agile', 'Scrum', 'Leadership'],
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'We are looking for a Data Scientist to analyze complex data sets, develop predictive models, and provide actionable insights to our clients.',
      postedDate: '2024-06-15',
      skills: ['Python', 'R', 'Machine Learning', 'Data Analysis'],
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      company: 'Brand Masters',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$50,000 - $70,000',
      description: 'Join our marketing team as a Marketing Specialist, creating and implementing marketing strategies to enhance brand awareness and drive sales.',
      postedDate: '2024-06-20',
      skills: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
    },
  ]);
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '5rem',
        minHeight: '100vh',
        padding: '2rem',
        
      },
    }
    const [users, setUsers] = useState([
      { id: 1, name: 'John Doe', position: 'Developer', email: 'john.doe@example.com', joinDate: '2023-01-15', department: 'Engineering', status: 'Active', location: 'New York' },
      { id: 2, name: 'Jane Smith', position: 'Designer', email: 'jane.smith@example.com', joinDate: '2022-05-23', department: 'Design', status: 'Active', location: 'San Francisco' },
      { id: 3, name: 'Alex Johnson', position: 'Manager', email: 'alex.johnson@example.com', joinDate: '2021-08-30', department: 'Management', status: 'On Leave', location: 'Chicago' },
      { id: 4, name: 'Emily Davis', position: 'QA Engineer', email: 'emily.davis@example.com', joinDate: '2022-12-12', department: 'Quality Assurance', status: 'Active', location: 'Boston' },
      { id: 5, name: 'Michael Brown', position: 'DevOps Engineer', email: 'michael.brown@example.com', joinDate: '2023-03-19', department: 'Engineering', status: 'Active', location: 'Seattle' },
      { id: 6, name: 'Sarah Wilson', position: 'Product Owner', email: 'sarah.wilson@example.com', joinDate: '2020-11-10', department: 'Product', status: 'Active', location: 'Los Angeles' },
      { id: 7, name: 'David Lee', position: 'UI/UX Designer', email: 'david.lee@example.com', joinDate: '2021-02-22', department: 'Design', status: 'Inactive', location: 'Austin' },
      { id: 8, name: 'Laura Martinez', position: 'Scrum Master', email: 'laura.martinez@example.com', joinDate: '2019-07-15', department: 'Management', status: 'Active', location: 'Denver' },
      { id: 9, name: 'James White', position: 'Backend Developer', email: 'james.white@example.com', joinDate: '2022-11-03', department: 'Engineering', status: 'Active', location: 'Portland' },
      { id: 10, name: 'Jessica Green', position: 'Frontend Developer', email: 'jessica.green@example.com', joinDate: '2021-04-17', department: 'Engineering', status: 'Active', location: 'San Diego' },
    ]);
    const [applicants,setApplicants]=useState(
      [
        {
          "id": 1,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "contactNo": "+1-123-456-7890",
          "position": "Software Engineer",
          "resume": "https://drive.google.com/file/d/15Dr26BDssMJSZMDIEURbrCyHLxLbY9SK/view",
          "status": "New"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "email": "janesmith@example.com",
          "contactNo": "+1-234-567-8901",
          "position": "UX/UI Designer",
          "resume": "https://drive.google.com/file/d/15Dr26BDssMJSZMDIEURbrCyHLxLbY9SK/view",
          "status": "New"
        },
        {
          "id": 3,
          "name": "Michael Johnson",
          "email": "michaeljohnson@example.com",
          "contactNo": "+1-345-678-9012",
          "position": "Data Analyst",
          "resume": "https://drive.google.com/file/d/15Dr26BDssMJSZMDIEURbrCyHLxLbY9SK/view",
          "status": "New"
        }
      ])

  return (
    <ThemeContext.Provider value={{ theme, setTheme,posts,setPosts,styles,users,setUsers,applicants,setApplicants,search,setSearch,isOpen,setIsOpen}}>
      {children}
    </ThemeContext.Provider>
  );
};
