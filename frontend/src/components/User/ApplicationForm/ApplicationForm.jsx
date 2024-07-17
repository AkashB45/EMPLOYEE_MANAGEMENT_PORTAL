import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Form, Button, Container } from 'react-bootstrap';
import { ThemeContext } from '../../Themecontext';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    position: '',
    resume: null,
    status:'New'
  });
  
  const { applicants, setApplicants } = useContext(ThemeContext);
  
  const onDrop = (acceptedFiles) => {
    setFormData({ ...formData, resume: acceptedFiles[0] });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resumeUrl = URL.createObjectURL(formData.resume); // Create a temporary URL for the file
    const newApplicant = { ...formData, id: applicants.length + 1, resume: resumeUrl };
    setApplicants([...applicants, newApplicant]);
    navigate('/ApplicantDetails');
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
        <h2 className="text-center mb-2 text-2xl font-semibold">Application Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-4">
            <Form.Label className="text-left">Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
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

          <Form.Group controlId="formContactNo" className="mb-4">
            <Form.Label className="text-left">Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              maxLength={10}
              placeholder="Enter your contact number"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPosition" className="mb-4">
            <Form.Label className="text-left">Job Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Enter the job position you are applying for"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </Form.Group>

          <Form.Group controlId="formResume" className="mb-3">
            <Form.Label className="text-left">Upload Resume</Form.Label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-4 text-center ${
                isDragActive ? 'border-blue-500' : 'border-gray-300'
              }`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-blue-500">Drop the files here...</p>
              ) : (
                <p className="text-gray-500">Drag and drop or select a file</p>
              )}
            </div>
            {formData.resume && (
              <p className="mt-2 text-green-500">{formData.resume.name}</p>
            )}
          </Form.Group>

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            style={{ background: '#071952' }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ApplicationForm;
