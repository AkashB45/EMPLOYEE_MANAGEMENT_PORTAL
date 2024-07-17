import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../Themecontext';
import { Form, Button, Container } from 'react-bootstrap';
import { Link ,useLocation} from 'react-router-dom';

const AddUserToDepartment = () => {
  const { departments, users, setDepartments } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const endpoint = location.pathname.split('/');
  const departmentId = endpoint[endpoint.length - 2];
  console.log(departmentId);
  // Find the department using the departmentId from URL
  const department = departments.find(dep => dep._id === departmentId);

  // Filter users who are not in the current department
  const availableUsers = users.filter(user => !department.users.includes(user._id));

  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const handleUserChange = (e) => {
    const selectedUserIds = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedUserIds(selectedUserIds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the department's user list
    const updatedDepartment = {
      ...department,
      users: [...department.users, ...selectedUserIds],
    };

    // Update departments state
    const updatedDepartments = departments.map(dep =>
      dep._id === departmentId ? updatedDepartment : dep
    );

    setDepartments(updatedDepartments);

    // Navigate back to department list or another relevant page
    navigate('/DepartmentListUsers');
  };

  return (
    <Container className="my-5 p-5 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-center mb-4 text-2xl font-semibold">Add Users to {department.name}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsers" className="mb-4">
          <Form.Label className="text-left">Select Users</Form.Label>
          <Form.Control
            as="select"
            multiple
            value={selectedUserIds}
            onChange={handleUserChange}
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            style={{ height: '200px' }}
          >
            {availableUsers.map((user) => (
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
          Add Users
        </Button>

        <Link to="UserRegisterationforDepartment">
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

export default AddUserToDepartment;
