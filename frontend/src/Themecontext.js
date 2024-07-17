import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const[search,setSearch]  = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [companies,setCompanies] = useState(
    [
      {
        "_id": "60c72b2f9b1d4e1b6c8b4567",
        "companyName": "Tech Solutions",
        "legalEntityType": "LLC",
        "industry": "Software",
        "companyWebsite": "www.techsolutions.com",
        "companyAddress": "123 Tech Street",
        "country": "USA",
        "state": "California",
        "city": "San Francisco",
        "zipCode": 94107,
        "phoneNumber": 1234567890,
        "companyEmail": "info@techsolutions.com",
        "primaryContact": {
          "fullName": "John Doe",
          "jobTitle": "CEO",
          "emailAddress": "john.doe@techsolutions.com",
          "phoneNumber": 1234567890
        },
        "adminDetails": [
          "60c72b2f9b1d4e1b6c8b4568",
          "60c72b2f9b1d4e1b6c8b4569"
        ],
        "department": [
          "60c72b2f9b1d4e1b6c8b4570",
          "60c72b2f9b1d4e1b6c8b4578"
        ]
      }
    ]
    
  )
  const [departments,setDepartments] = useState(
    [
      {
        "_id": "60c72b2f9b1d4e1b6c8b4570",
        "name": "Engineering",
        "description": "Handles all engineering tasks",
        "users": [
          "60c72b2f9b1d4e1b6c8b4571",
          "60c72b2f9b1d4e1b6c8b4572"
        ],
        "jobs": [
          "60c72b2f9b1d4e1b6c8b4573",
          "60c72b2f9b1d4e1b6c8b4576"
        ]
      },
      {
        "_id": "60c72b2f9b1d4e1b6c8b4578",
        "name": "Marketing",
        "description": "Handles all marketing tasks",
        "users": [
          "60c72b2f9b1d4e1b6c8b4579"
        ],
        "jobs": [
          "60c72b2f9b1d4e1b6c8b4580"
        ]
      }
    ]
    
  );
  const [jobs,setJobs] = useState(
    [
      {
        "_id": "60c72b2f9b1d4e1b6c8b4573",
        "title": "Frontend Developer",
        "description": "Develop and maintain web applications",
        "type": "Full-Time",
        "salary": "$120,000",
        "postedDate": "2023-06-01",
        "location": "San Francisco",
        "qualification": "Bachelor's in Computer Science",
        "experience": "3 years",
        "skills": ["React", "JavaScript", "CSS"],
        "vacancy": 3,
        "selected": 1,
        "rejected": 2,
        "inprogress": 0,
        "applicants": [
          "60c72b2f9b1d4e1b6c8b4574",
          "60c72b2f9b1d4e1b6c8b4575"
        ]
      },
      {
        "_id": "60c72b2f9b1d4e1b6c8b4576",
        "title": "Backend Developer",
        "description": "Develop and maintain server-side applications",
        "type": "Full-Time",
        "salary": "$130,000",
        "postedDate": "2023-07-01",
        "location": "San Francisco",
        "qualification": "Bachelor's in Computer Science",
        "experience": "4 years",
        "skills": ["Node.js", "JavaScript", "MongoDB"],
        "vacancy": 2,
        "selected": 1,
        "rejected": 1,
        "inprogress": 0,
        "applicants": [
          "60c72b2f9b1d4e1b6c8b4577"
        ]
      },
      {
        "_id": "60c72b2f9b1d4e1b6c8b4580",
        "title": "Digital Marketer",
        "description": "Develop and execute marketing strategies",
        "type": "Full-Time",
        "salary": "$90,000",
        "postedDate": "2023-06-15",
        "location": "San Francisco",
        "qualification": "Bachelor's in Marketing",
        "experience": "2 years",
        "skills": ["SEO", "Google Analytics", "Content Marketing"],
        "vacancy": 1,
        "selected": 0,
        "rejected": 1,
        "inprogress": 0,
        "applicants": [
          "60c72b2f9b1d4e1b6c8b4581"
        ]
      }
    ]  
  );
  
    const [users, setUsers] = useState(
      [
        {
          "_id": "60c72b2f9b1d4e1b6c8b4571",
          "name": "Alice Johnson",
          "position": "Software Engineer",
          "email": "alice.johnson@techsolutions.com",
          "password": "hashedpassword",
          "joinDate": "2021-05-10",
          "status": "Active",
          "location": "San Francisco"
        },
        {
          "_id": "60c72b2f9b1d4e1b6c8b4572",
          "name": "Bob Martin",
          "position": "DevOps Engineer",
          "email": "bob.martin@techsolutions.com",
          "password": "hashedpassword",
          "joinDate": "2022-01-15",
          "status": "Active",
          "location": "San Francisco"
        },
        {
          "_id": "60c72b2f9b1d4e1b6c8b4579",
          "name": "Eve Black",
          "position": "Marketing Manager",
          "email": "eve.black@techsolutions.com",
          "password": "hashedpassword",
          "joinDate": "2020-03-12",
          "status": "Active",
          "location": "San Francisco"
        }
      ]
      
    );
    const [applicants,setApplicants]=useState(
      [
        {
          "_id": "60c72b2f9b1d4e1b6c8b4574",
          "name": "Bob Brown",
          "email": "bob.brown@example.com",
          "contactNo": 9876543210,
          "position": "Frontend Developer",
          "department": "Engineering",
          "resume": "https://drive.google.com/file/d/15Dr26BDssMJSZMDIEURbrCyHLxLbY9SK/view",
          "qualification": "Bachelor's in Computer Science",
          "experience": "2 years",
          "skills": ["React", "JavaScript", "CSS"],
          "status": "New"
        },
        {
          "_id": "60c72b2f9b1d4e1b6c8b4575",
          "name": "Sara White",
          "email": "sara.white@example.com",
          "contactNo": 1234567891,
          "position": "Frontend Developer",
          "department": "Engineering",
          "resume": "https://drive.google.com/file/d/15Dr26BDssMJSZMDIEURbrCyHLxLbY9SK/view",
          "qualification": "Master's in Computer Science",
          "experience": "4 years",
          "skills": ["React", "JavaScript", "HTML"],
          "status": "Interview"
        },
        {
          "_id": "60c72b2f9b1d4e1b6c8b4577",
          "name": "Tom Harris",
          "email": "tom.harris@example.com",
          "contactNo": 9876543211,
          "position": "Backend Developer",
          "department": "Engineering",
          "resume": "https://drive.google.com/file/d/15Dr26BDssMJSZMDIEURbrCyHLxLbY9SK/view",
          "qualification": "Bachelor's in Computer Science",
          "experience": "3 years",
          "skills": ["Node.js", "JavaScript", "MongoDB"],
          "status": "Accepted"
        },
        {
          "_id": "60c72b2f9b1d4e1b6c8b4581",
          "name": "Linda Green",
          "email": "linda.green@example.com",
          "contactNo": 1234567892,
          "position": "Digital Marketer",
          "department": "Marketing",
          "resume": "https://drive.google.com/file/d/15Dr26BDssMJSZMDIEURbrCyHLxLbY9SK/view",
          "qualification": "Bachelor's in Marketing",
          "experience": "1 year",
          "skills": ["SEO", "Google Analytics", "Content Marketing"],
          "status": "Rejected"
        }
      ]
      
    )
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
    <ThemeContext.Provider value={{ theme, setTheme,styles,users,setUsers,applicants,setApplicants,search,setSearch,isOpen,setIsOpen,jobs,setJobs,departments,setDepartments,companies,setCompanies}}>
      {children}
    </ThemeContext.Provider>
  );
};
