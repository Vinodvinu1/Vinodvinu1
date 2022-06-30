import React from 'react'
import { Link } from 'react-router-dom'

function Usereditpage() {
    const myStyle = {
        backgroundImage:
            "url('')",
        height: '100vh',


        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    }
    return (
        <div>
            <div style={myStyle}>
                <div className='container-fluid'>
                    <div className='container w-50 bg-primary '>
                    <input type="search" className='float-end w-25 mt-3'/>
                        <div className="row w-100">
                            
                            <div className='col w-50 mt-2'>
                                <form className='form-control bg-light'>
                                    <div className='row '>
                                        <div className='col mt-4'>
                                            <label>User Id</label>
                                            <input type='text' className='form-control' name='firstname'  />
                                        </div>
                                        <div className='col mt-4'>
                                            <label>User Name</label>
                                            <input type='text' className='form-control'  />
                                        </div>

                                    </div >

                                    <div className='row  '>
                                        <div className='col mt-4'>
                                          <label >Email</label>
                                            
                                            <input type='email' className='form-control' name='email' />
                                        </div>
                                        <div className='col mt-4  '>
                                            <label>Role</label>
                                            <select className='form-control' >
                                                <option >select admin</option>
                                                <option >crew admin</option>
                                                <option>transport admin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row '>
                                        <div className='col mt-4  m-3'>
                                            <label>Status</label>
                                            <select className='form-control'>
                                                <option >Active</option>
                                                <option >Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col mt-4  m-1'>
                                            <label>User acess lifespan</label>
                                            
                                  <input className='form-control border-1' type='date'  value='From'/>
                                            
                                        </div>

                                    </div>
                                    <div className='row d-flex justify-content-center m-4 '>
                                            <div className='col-6' float-end>
                                            <Link to='/loginpage'> <input type="submit" value="save edits" className='btn btn-success text-whitemt-3' /></Link>
                                            </div>
                                    
                                       <div className='col-6 float-start'>
                                            <Link to='/tablepage'> <input type="submit" value="cancel" className=' btn btn-success' /></Link>

                                            </div>

                                    </div >
                                </form>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usereditpage