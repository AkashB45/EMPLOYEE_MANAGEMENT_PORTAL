import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    jobDesignation: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic here
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
        <h2 className="text-center mb-2 text-2xl font-semibold">User Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-4">
            <Form.Label className="text-left">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-4">
            <Form.Label className="text-left">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formJobDesignation" className="mb-4">
            <Form.Label className="text-left">Job Designation</Form.Label>
            <Form.Control
              type="text"
              name="jobDesignation"
              value={formData.jobDesignation}
              onChange={handleChange}
              placeholder="Enter your job designation"
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
              placeholder="Enter your location"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            style={{ background: '#071952' }}
          >
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserRegistration;
