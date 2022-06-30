import React from 'react'
import {Link} from 'react-router-dom'

function Homepage() {
  return (
    <div>
       <center>
     <h1 className='display-3 text-primary'>welcome to login portal</h1>
     <Link to='signuppage'><button className='btn btn-primary text-white'> logout </button></Link>
     </center>
    </div>
  )
}

export default Homepage