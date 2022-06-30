import React from 'react'
import { Link } from 'react-router-dom'
function Loginpage() {
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/vector-night-airport-with-plane-helicopter_1441-2828.jpg?t=st=1656567115~exp=1656567715~hmac=ea290ca81841cfcd8652f001f7e3bc45ee5f35b553dc9b827c5f6f6bd845dde3&w=826')",
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className='container mt-5' style={myStyle} >
      <div className="row h-100 align-items-center m-5">
        <div className='col-md-8'>

        </div>

        <div className='col-md-4  align-items-center bg-light '>
          <form className='form-group m-3 width-100% '>
            <div class=" mb-5">
              <label>username</label>
              <input
                type="text"
                className='form-control'
                aria-label="Username"
                aria-describedby="input1"
              />
            </div>
            <div class=" mb-3">
              <label>password</label>
              <input
                type="password"
                class="form-control"
                aria-label="Username"
                aria-describedby="input1"
              />
            </div>
            <div>
              <input type='submit' value='login' className='btn-primary form-control' />
              <a className='float-end'><Link to='/forgotpage'>Forgot password </Link>
              </a>
            </div>
            <div >

            <span> <input type='radio' />rememberme</span>
            </div>
            <div><br/>
            <h6>New user?</h6><br />
            </div><br/>
            <div>
             <Link to='/signuppage'> <input type='submit'value='Create an account' className='form-control btn btn-primary text-white text-center'/></Link>
            </div>
              
              
            

          </form>
        </div>
      </div>

    </div>
  )
}

export default Loginpage