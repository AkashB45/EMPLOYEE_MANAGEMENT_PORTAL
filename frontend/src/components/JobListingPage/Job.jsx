import React from 'react';
import {useParams, Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../Themecontext';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Job = () => {
  const { id } = useParams();
  const { posts,setPosts} = useContext(ThemeContext);
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate(); 

  const handleEdit = () => {
    // Implement edit functionality here
    console.log("Edit clicked for", post.id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    const updatedPosts = posts.map((p) => (p.id.toString() !== id ? p:null));
    setPosts(updatedPosts);
    navigate(`/JobList`);
    console.log("Delete clicked for", post.id);
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
        <h2 className="text-center mb-4 text-2xl font-semibold">{post.title}</h2>
        <p className="text-gray-600 mb-2"><strong>Company:</strong> {post.company}</p>
        <p className="text-gray-600 mb-2"><strong>Location:</strong> {post.location}</p>
        <p className="text-gray-600 mb-2"><strong>Type:</strong> {post.type}</p>
        <p className="text-gray-500 text-sm mb-2"><strong>Posted on:</strong> {new Date(post.created_at).toLocaleDateString()}</p>
        <p className="text-gray-700 font-semibold mb-2"><strong>Salary:</strong> {post.salary}</p>
        <p className="text-gray-700 mb-2"><strong>Description:</strong> {post.description}</p>
        <p className="text-gray-700 mb-4"><strong>Skills:</strong> {post.skills}</p>

        <div className="flex justify-between space-x-4">
          <Link to={`/JobList/edit/${post.id}`}>
          <Button 
            onClick={handleEdit} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            style={{background:'#071952'}}
          >
            Edit
          </Button>
          </Link>
          <Button 
            onClick={()=>handleDelete(post.id)} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            style={{background:'#d9534f'}}
          >
            Delete
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Job;
