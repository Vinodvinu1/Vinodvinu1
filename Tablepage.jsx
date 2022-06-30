import React from 'react'
import { Link } from 'react-router-dom'

function Tablepage() {
    return (
        <div>
            <div className='display-6 text-center text-primary border-bottom'>
                <table-caption>User Details</table-caption>
            </div>
            <table className='table-primary table-striped w-100 align-items-center'>

                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Last Edited</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Rohith</td>
                        <td>Active</td>
                        <td>select role</td>
                        <td>30/6/22</td>

                        <td><Link to='/editpage'><button className='btn btn-success mt-auto'>Edit </button></Link> <button className='btn btn-danger'>Delte</button></td>
                   </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tablepage