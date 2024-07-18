import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
import { ThemeContext } from '../../../Themecontext';

const User = () => {
  const { users, setUsers } = useContext(ThemeContext);
  const { id } = useParams();
  const user = users.find((user) => user.id.toString() === id);
  const navigate = useNavigate();
  const handleDelete = async () => {
    // Implement delete functionality here
    const updatedUsers = users.filter((user) => user.id.toString() !== id);
    await setUsers(updatedUsers);
    // Redirect or perform any other action after deletion
    console.log("Deleted user:", id);
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
        <h2 className="text-center mb-4 text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-600 mb-2"><strong>Position:</strong> {user.position}</p>
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-600 mb-2"><strong>Join Date:</strong> {user.joinDate}</p>
        <p className="text-gray-600 mb-2"><strong>Department:</strong> {user.department}</p>
        <p className="text-gray-600 mb-2"><strong>Status:</strong> {user.status}</p>
        <p className="text-gray-600 mb-2"><strong>Location:</strong> {user.location}</p>

        <div className="flex justify-between space-x-4 mt-4">
          <Link to={`/UserList/edit/${user.id}`}>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" style={{ background: '#071952' }}>
              Edit
            </Button>
          </Link>
          <Link to={"/UserList"}>
          <Button onClick={()=>handleDelete()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" style={{ background: '#d9534f' }}>
            Delete
          </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default User;
