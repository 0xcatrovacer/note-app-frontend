import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <div class="Navbar">
            <div className="NavTitle">
                <Link className="NavTitle" to='/'>
                    <h1 className="Titletext">Noter</h1>
                </Link>
            </div>
            <div className="NavRouters">
                <Link className="NavRouters routes" to='/'>
                    <span className="routes">Dashboard</span>
                </Link>
            </div>
            <button className="CreateNote">Sign Out</button>
        </div>
    )
}

export default Navbar
