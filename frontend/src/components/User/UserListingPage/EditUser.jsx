import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useHistory, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { ThemeContext } from '../../../Themecontext';

const EditUser = () => {
  const { id } = useParams();
  const { users, setUsers } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    joinDate: '',
    department: '',
    status: '',
    location: ''
  });

  useEffect(() => {
    const currentUser = users.find(user => user.id.toString() === id);
    if (currentUser) {
      setFormData({
        name: currentUser.name,
        position: currentUser.position,
        email: currentUser.email,
        joinDate: currentUser.joinDate,
        department: currentUser.department,
        status: currentUser.status,
        location: currentUser.location
      });
    }
  }, [id, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user =>
      user.id.toString() === id ? { ...formData, id: user.id } : user
    );
    setUsers(updatedUsers);
    navigate('/userList');
  };

  return (
    <Container className="my-0 p-5 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-center mb-4 text-2xl font-semibold">Edit User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPosition" className="mb-4">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Enter position"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formJoinDate" className="mb-4">
          <Form.Label>Join Date</Form.Label>
          <Form.Control
            type="date"
            name="joinDate"
            value={formData.joinDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDepartment" className="mb-4">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter department"
            required
          />
        </Form.Group>

        <Form.Group controlId="formStatus" className="mb-4">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Enter status"
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
            placeholder="Enter location"
            required
          />
        </Form.Group>

        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Save Changes
        </Button>
        <Link to={`/userList`} className="ml-4 text-gray-600">Cancel</Link>
      </Form>
    </Container>
  );
};

export default EditUser;
