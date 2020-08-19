import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to="/" className="navbar-brand mb-0 h1"><i className="fas fa-briefcase"></i>  EmployeeApp</Link>
            {/* <ul className="navbar-nav mr-auto">
                <li className="nav-item ml-3">
                    <Link to="/new" style={{textDecoration: "none"}}>Input New Employee</Link>
                </li>
            </ul> */}
        </nav>
    )
}