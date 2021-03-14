import axios from 'axios'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

    const history = useHistory();

    const handleSignOut = () => {

        const token = localStorage.getItem('token')

        axios({
            url: 'http://localhost:8000/users/logout',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            history.push('/signin')
            localStorage.setItem('token', '')
        })
    }

    return (
        <div className="Navbar">
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
            <div className="NavBtns">
                <button className="CreateNote" onClick={handleSignOut} >Sign Out</button>
                <button className="CreateNote DelAccountBtn">Delete Account</button>
            </div>
        </div>
    )
}

export default Navbar
