import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
        <Link to="/postpage/1">Post1</Link><br />
        <Link to="/postpage/2">Post2</Link><br />
        <Link to="/postpage/3">Post3</Link><br />
        <Link to="/postpage/newpost">New Post</Link><br />
        <Outlet/>
    </>
  )
}

export default PostLayout