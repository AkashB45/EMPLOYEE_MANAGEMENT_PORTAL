import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../Themecontext';
import { Form, Button, Container } from 'react-bootstrap';

const EditJob = () => {
  const { id } = useParams();
  const { posts, setPosts } = useContext(ThemeContext);
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({ ...post });

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
    const updatedPost = { ...formData, skills: skillsArray }; // Add skills array to updated post
    const updatedPosts = posts.map((p) => (p.id.toString() === id ? updatedPost : p));
    setPosts(updatedPosts);
    navigate(`/JobList`);
  };

  const backgroundImageStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#EBF4F6',
  };

  return (
    <div style={backgroundImageStyle}>
      <Container className="my-0 p-5 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
        <h2 className="text-center mb-4 text-2xl font-semibold">Edit Job</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle" className="mb-4">
            <Form.Label className="text-left">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter job title"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formCompany" className="mb-4">
            <Form.Label className="text-left">Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formLocation" className="mb-4">
            <Form.Label className="text-left">Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter job location"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formType" className="mb-4">
            <Form.Label className="text-left">Type</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Enter job type"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formCreatedAt" className="mb-4">
            <Form.Label className="text-left">Created At</Form.Label>
            <Form.Control
              type="date"
              name="postedDate"
              value={formData.postedDate}
              onChange={handleChange}
              placeholder="Enter created at date"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formSalary" className="mb-4">
            <Form.Label className="text-left">Salary</Form.Label>
            <Form.Control
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mb-4">
            <Form.Label className="text-left">Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter job description"
              className="border-2 border-gray-300 p-2 rounded-lg w-full h-40"
              required
            />
          </Form.Group>

          <Form.Group controlId="formSkills" className="mb-4">
            <Form.Label className="text-left">Skills</Form.Label>
            <Form.Control
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Enter skills required, separated by commas"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            style={{ background: '#071952' }}
          >
            Save Changes
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditJob;
