import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { ThemeContext } from '../../../Themecontext';
import { useNavigate, Link } from 'react-router-dom';

const AddDepartmentForm = () => {
  const { companies, setCompanies, departments, setDepartments, users } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    selectedUsers: [],
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserChange = (e) => {
    const selectedUserIds = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, selectedUsers: selectedUserIds });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDepartment = {
      _id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      description: formData.description,
      users: formData.selectedUsers,
      jobs: [],
    };

    const updatedCompanies = companies.map((company) => {
      if (company._id === "60c72b2f9b1d4e1b6c8b4567") {
        return { ...company, department: [...company.department, newDepartment._id] };
      }
      return company;
    });

    const updatedDepartments = [...departments, newDepartment];
    setCompanies(updatedCompanies);
    setDepartments(updatedDepartments);

    setFormData({
      name: '',
      description: '',
      selectedUsers: [],
    });

    navigate('/DepartmentListUsers');
  };

  return (
    <Container className="my-0 p-5 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-center mb-2 text-2xl font-semibold">Add Department</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDepartmentName" className="mb-4">
          <Form.Label className="text-left">Department Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter department name"
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
            placeholder="Enter description"
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            required
          />
        </Form.Group>

        <Form.Group controlId="formUsers" className="mb-4">
          <Form.Label className="text-left">Add Users</Form.Label>
          <Form.Control
            as="select"
            multiple
            value={formData.selectedUsers}
            onChange={handleUserChange}
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            style={{ height: '200px' }}
          >
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full mb-3"
          style={{ background: '#071952' }}
        >
          Add Department
        </Button>

        <Link to="/DepartmentListUsers/UserRegisteration">
          <Button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Create New User
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default AddDepartmentForm;
