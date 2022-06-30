
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbarpage() {
    return (
        <div>
            <nav className='navbar  bg-dark justify-content-center'>
            <li className='nav-link'>
                    <NavLink to='/home' className='nav-link' activeClassName='btn btn-primary'>
                        Homepage
                    </NavLink>
                </li>

                <li className='nav-link'>
                    <NavLink to='/loginpage' className='nav-link' activeClassName='btn btn-primary'>
                        loginpage
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/signuppage' className='nav-link' activeClassName='btn btn-success '>
                        signuppage
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/forgotpage' className='nav-link' activeClassName='btn btn-success '>
                        forgotpage
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/tablepage' className='nav-link' activeClassName='btn btn-secondary '>
                        tablepage
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/editpage' className='nav-link' activeClassName='btn btn-secondary '>
                        usereditpage
                    </NavLink>
                </li>
            </nav >
        </div>



    )
}

export default Navbarpage