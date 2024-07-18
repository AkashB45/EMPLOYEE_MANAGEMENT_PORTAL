import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {format} from 'date-fns' 
const Jobs = ({ job }) => {
  return (
    <Link to={`${job._id}`} className="block">
      <Card className="p-4 bg-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        <Card.Body>
          <Card.Title className="text-xl font-bold mb-2">{job.title}</Card.Title>
          <Card.Text className="text-gray-700 mb-1"><strong>Location:</strong> {job.location}</Card.Text>
          <Card.Text className="text-gray-700 mb-1"><strong>Type:</strong> {job.type}</Card.Text>
          <Card.Text className="text-gray-700 text-sm mb-1"><strong>Posted on:</strong> {format(new Date(job.postedDate),'yyyy-MM-dd')}</Card.Text>
          <Card.Text className="text-gray-700 font-semibold mb-1"><strong>Salary:</strong> {job.salary}</Card.Text>
          <Card.Text className="text-gray-700 mb-1"><strong>Description:</strong> {job.description.length<=50?job.description:`${job.description.slice(0,50)}..`}</Card.Text>
          <Card.Text className="text-gray-700 mb-1"><strong>Skills:</strong> {job.skills.join(', ')}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Jobs;
