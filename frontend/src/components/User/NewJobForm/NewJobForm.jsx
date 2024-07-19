import React, { useState, useContext } from 'react';
import { useNavigate, useParams,useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../Themecontext';
import { Form, Button, Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

const NewJobForm = () => {
  const { jobs, setJobs, setDepartments, departments } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const endpoint = location.pathname.split('/');
  const departmentId = endpoint[endpoint.length - 1]; // Get department ID from URL
  // Initial empty form data
  const initialFormData = {
    _id: '',
    title: '',
    description: '',
    location: '',
    type: '',
    qualification: '',
    experience: '',
    postedDate: format(new Date(), 'yyyy-MM-dd'),
    salary: '',
    skills: '',
    vacancy: 0,
    selected: 0,
    rejected: 0,
    inprogress: 0,
    applicants: []
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const skillsArray = formData.skills.split(',').map(skill => skill.trim()); // Split and trim the skills string
    const newJob = { ...formData, _id: uuidv4(), skills: skillsArray }; // Generate unique ID for new job

    // Update jobs state
    setJobs(prevJobs => [...prevJobs, newJob]);

    // Find the department and update its jobs array
    setDepartments(prevDepartments =>
      prevDepartments.map(department =>
        department._id === departmentId
          ? { ...department, jobs: [...department.jobs, newJob._id] }
          : department
      )
    );
    navigate('/AddJobList/');
  };

  const formContainerStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#EBF4F6',
    paddingTop: '50px',
    paddingBottom: '50px',
  };

  return (
    <div style={formContainerStyle}>
      <Container className="p-5 bg-white shadow-lg rounded-lg max-w-lg">
        <h2 className="text-center mb-4 text-2xl font-semibold">Create New Job</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle" className="mb-4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter job title"
              className="border-2 border-gray-300 p-2 rounded-lg"
              required
            />
          </Form.Group>

          <Form.Group controlId="formLocation" className="mb-4">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter job location"
              className="border-2 border-gray-300 p-2 rounded-lg"
              required
            />
          </Form.Group>

          <Form.Group controlId="formType" className="mb-4">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Enter job type"
              className="border-2 border-gray-300 p-2 rounded-lg"
              required
            />
          </Form.Group>

          <Form.Group controlId="formSalary" className="mb-4">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              className="border-2 border-gray-300 p-2 rounded-lg"
              required
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter job description"
              className="border-2 border-gray-300 p-2 rounded-lg h-40"
              required
            />
          </Form.Group>

          <Form.Group controlId="formSkills" className="mb-4">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Enter skills required, separated by commas"
              className="border-2 border-gray-300 p-2 rounded-lg"
              required
            />
          </Form.Group>

          <Form.Group controlId="formQualification" className="mb-4">
            <Form.Label>Qualification</Form.Label>
            <Form.Control
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Enter qualification required"
              className="border-2 border-gray-300 p-2 rounded-lg"
              required
            />
          </Form.Group>

          <Form.Group controlId="formExperience" className="mb-4">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter experience required"
              className="border-2 border-gray-300 p-2 rounded-lg"
              required
            />
          </Form.Group>

          <Form.Group controlId="formVacancy" className="mb-4">
            <Form.Label>Vacancy</Form.Label>
            <Form.Control
              type="number"
              name="vacancy"
              value={formData.vacancy}
              onChange={handleChange}
              placeholder="Enter number of vacancies"
              className="border-2 border-gray-300 p-2 rounded-lg"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            style={{ background: '#071952' }}
          >
            Create Job
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default NewJobForm;
