import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [posts,setPosts] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Innovators',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing and maintaining web applications using React.js and other modern web technologies.',
      postedDate: '2024-06-01',
      companyLogo: 'https://example.com/logos/tech-innovators.png',
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
      companyLogo: 'https://example.com/logos/data-solutions.png',
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
      companyLogo: 'https://example.com/logos/creative-minds.png',
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
      companyLogo: 'https://example.com/logos/business-corp.png',
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
      companyLogo: 'https://example.com/logos/analytics-pro.png',
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
      companyLogo: 'https://example.com/logos/brand-masters.png',
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme,posts,setPosts,styles }}>
      {children}
    </ThemeContext.Provider>
  );
};
