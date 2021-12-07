import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center">
      <h4>MFE for Auth</h4>
      <Link to='/signin' className="btn btn-link">Sign In</Link>
      <Link to='/signup' className="btn btn-link">Sign Up</Link>
    </div>
  )
}

export default Home
