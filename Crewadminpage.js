import React from 'react'

function Crewadminpage() {
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            
                        <img src='https://golf.emeralddowns.com.au/_images/menu-icon.png' class=" mt-3 " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" width='30px' height='30px' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <img src='https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/add-user.png' width='30px' height='30px'/>
                            </form>
                        </div>
                    </nav>

                </div>
                <div className='row  h-100 d-flex'>
                    <div className='col-2'>



                        <div class="collapse" id="collapseExample">
                            <div class="border border-primary p-2">
                                <ul className='list-unstyled'>
                                    <li className='text-align-center btn-sm border border-primary  bg-white'>
                                        Manage Crew
                                    </li>
                                    <br></br>
                                    <li className=' btn-sm border border-primary bg-white'>
                                        Manage Crew Members
                                    </li>
                                    <br></br>
                                    <li className=' btn-sm border border-primary bg-white'>
                                        View roster
                                    </li>
                                    <br></br>
                                    <li className=' btn-sm border border-primary bg-white'>
                                        Logistics Arrangement
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>



                    <div className="col-10">
                        <table class="table  table-hover">
                            <thead className='bg-primary' >
                                <tr>
                                    <th>Flight NO</th>
                                    <th>Crew Members</th>
                                    <th>Flight Route</th>
                                    <th>Flight Date&Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

        </div >




    )
}

export default Crewadminpage