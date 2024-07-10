import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../Themecontext'
const Job = () => {
    const {id} = useParams();
    console.log(id+"hello");
    console.log(typeof(id));
    const {posts,setPosts}=useContext(ThemeContext)
    const post = posts.find(post => post.id.toString()===id)
  return (
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
  )
}

export default Job