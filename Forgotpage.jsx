import React from 'react'
import { Link, } from 'react-router-dom'


function Forgotpage() {
    const myStyle = {
        backgroundImage:

            "url('https://img.freepik.com/free-vector/vector-night-airport-with-plane-helicopter_1441-2828.jpg?t=st=1656567115~exp=1656567715~hmac=ea290ca81841cfcd8652f001f7e3bc45ee5f35b553dc9b827c5f6f6bd845dde3&w=826')",
        height: '100vh',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    }
    
    return (
        <div className='container-fluid' style={myStyle} >
            <div className="row h-100 align-items-center ">
                <div className='col-md-9'>

                </div>

                <div className='col-md-3 m-auto'>
                    <form className='form-control  bg-white text-primary '>
                        <div class=" mb-3">
                            <label >Username</label>
                            <input
                                type="text"
                                className='form-control'
                                aria-describedby="input1"
                            />
                        </div>
                        <div><p></p></div>
                        <div class=" mb-3">
                            <label >Email</label>
                            <input
                                type="email"
                                class="form-control"
                                
                            />
                        </div>
                        <div>
                            <input type='submit' value="Reset password"className='form-control btn-primary text-white'/>

                        </div>
                        
                        <div className='mt-5'>
                            <p className='text-black'>Changepassword later?<Link to='/signpage'><a className='text-primary'>Signin</a></Link></p>

                        

                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Forgotpage