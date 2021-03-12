import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div class="Navbar">
            <div className="NavTitle">
                <h1 className="Titletext">Noter</h1>
            </div>
            <div className="NavRouters">
                <span className="routes">Dashboard</span>
                <span className="routes">About</span>
            </div>
            <button className="CreateNote">Sign In</button>
        </div>
    )
}

export default Navbar
