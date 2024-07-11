import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../Themecontext';
import { Form, Button, Container } from 'react-bootstrap';

const NewJobForm = () => {
  const { posts, setPosts } = useContext(ThemeContext);
  const navigate = useNavigate();
  
  // Initial empty form data
  const initialFormData = {
    title: '',
    company: '',
    location: '',
    type: '',
    created_at: '',
    salary: '',
    description: '',
    skills: '',
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
    const newPost = { ...formData, id: posts.length + 1 }; // Generate a new id (replace with your own logic)
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    navigate('/JobList');
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

          <Form.Group controlId="formCompany" className="mb-4">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
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

          <Form.Group controlId="formCreatedAt" className="mb-4">
            <Form.Label>Created At</Form.Label>
            <Form.Control
              type="date"
              name="created_at"
              value={formData.created_at}
              onChange={handleChange}
              placeholder="Enter created at date"
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
              placeholder="Enter skills required"
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