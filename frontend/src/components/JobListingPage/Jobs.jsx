import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {format} from 'date-fns' 
const Jobs = ({ post }) => {
  return (
    <Link to={`${post.id}`} className="block">
      <Card className="p-4 bg-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        <Card.Body>
          <Card.Title className="text-xl font-bold mb-2">{post.title}</Card.Title>
          <Card.Text className="text-gray-700 mb-1"><strong>Company:</strong> {post.company}</Card.Text>
          <Card.Text className="text-gray-700 mb-1"><strong>Location:</strong> {post.location}</Card.Text>
          <Card.Text className="text-gray-700 mb-1"><strong>Type:</strong> {post.type}</Card.Text>
          <Card.Text className="text-gray-700 text-sm mb-1"><strong>Posted on:</strong> {format(new Date(post.postedDate),'yyyy-MM-dd')}</Card.Text>
          <Card.Text className="text-gray-700 font-semibold mb-1"><strong>Salary:</strong> {post.salary}</Card.Text>
          <Card.Text className="text-gray-700 mb-1"><strong>Description:</strong> {post.description.length<=120?post.description:`${post.description.slice(0,120)}..`}</Card.Text>
          <Card.Text className="text-gray-700 mb-1"><strong>Skills:</strong> {post.skills.join(', ')}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Jobs;
