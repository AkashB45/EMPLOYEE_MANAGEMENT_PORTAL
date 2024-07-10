import React from 'react'
import { Link } from 'react-router-dom'

const Jobs = ({post}) => {
  return (
    <Link to={`${post.id}`}>
    <div>
        
        <h2>{post.title}</h2>
        <p>{post.company}</p>
        <p>{post.location}</p>
        <p>{post.type}</p>
        <p>{post.created_at}</p>
        <p>{post.salary}</p>
        <p>{post.description}</p>
        <p>{post.skills}</p>

    </div>
    </Link>
    
  )
}

export default Jobs