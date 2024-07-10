import React, { useContext, useState } from 'react'
import Jobs from './Jobs'
import { ThemeContext } from '../../Themecontext'

const JobListingPage = () => {
  const {posts,setPosts,styles}=useContext(ThemeContext)
  return (
    <div style={styles.container}>
      {posts.map((post)=>(<Jobs key={post.id} post={post}/>))}
      </div>
  )
}

export default JobListingPage