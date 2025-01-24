import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <Link to="/">Home</Link>|
        <Link to="/sp-about_us">About</Link>
    </>
  )
}

export default Navbar