import React from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signuppage() {



  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/vector-night-airport-with-plane-helicopter_1441-2828.jpg?t=st=1656567115~exp=1656567715~hmac=ea290ca81841cfcd8652f001f7e3bc45ee5f35b553dc9b827c5f6f6bd845dde3&w=826')",
    height: '100vh',


    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  }
  return (
    <div style={myStyle} className="m-auto">
      <div className="container  ">
        <div className="row ">
          <div className="col-8"></div>
          <div className="col-4 align-items-center bg-light  mt-5">
            <form className='form-group m-lg-1 mt-4'>
              <div className='row '>
                <div className='col mt-4'>
                  <label >FirstName</label>
                  <input type='text' className='form-control' name='firstname' />
                </div>
                <div className='col mt-4'>
                  <label >LastName</label>
                  <input type='text' className='form-control' />
                </div>

              </div >
              <div className='row '>
                <div >
                  <label >UserName</label>
                  <input type='text' className='form-control' name='firstname' />
                </div>
                <div>
                  <label >Email</label>
                  <input type='email' className='form-control' />
                </div>



                <div>
                  <label >Password</label>
                  <input type='password' className='form-control' name='password' />
                </div>
                <div>
                  <label >ConformPassword</label>
                  <input type='text' className='form-control' name='conformpassword' />
                </div>

                <div className='form-control mt-5' >
                  <Link to='/tablepage'> <input type="submit" value="Create an account" className=' btn-info form-control ' /></Link>
                </div>
                <div className='form-control float-none'>
                  <p>Already have an a account?<a><Link to='/loginpage'>Signin</Link></a></p>




                </div>
                </div>
            </form>


          </div>
        </div>
      </div>
    </div>


  )
}

export default Signuppage