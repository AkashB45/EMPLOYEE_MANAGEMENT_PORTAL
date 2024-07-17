import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Users.css'; // Assuming you have the CSS in this file

const Users = ({ user }) => {
  return (
    <Link to={`${user.id}`} className="block">
      <Card className="p-4 bg-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 fixed-size-card">
        <Card.Body>
          <Card.Title className="text-xl font-bold mb-2">{user.name}</Card.Title>
          <Card.Text className="text-gray-600 mb-1"><strong>Position:</strong> {user.position}</Card.Text>
          <Card.Text className="text-gray-600 mb-1"><strong>Email:</strong> {user.email}</Card.Text>
          <Card.Text className="text-gray-600 mb-1"><strong>Join Date:</strong> {user.joinDate}</Card.Text>
          <Card.Text className="text-gray-600 mb-1"><strong>Status:</strong> {user.status}</Card.Text>
          <Card.Text className="text-gray-600 mb-1"><strong>Location:</strong> {user.location}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Users;
