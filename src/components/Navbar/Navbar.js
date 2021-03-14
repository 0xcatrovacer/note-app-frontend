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
        }).then(async () => {
            const isTokenExists = await localStorage.getItem('token');
            if (isTokenExists) {
                localStorage.removeItem('token');
                history.push('/');
            }
        })
    }

    const handleDeleteAcc = () => {
        const token = localStorage.getItem('token')

        axios({
            url: 'http://localhost:8000/users/delete',
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            console.log('User Account deleted')
            localStorage.removeItem('token')
            history.push('/')
        })
    }

    return (
        <div className="Navbar">
            <div className="NavTitle">
                <Link className="NavTitle" to='/dashboard'>
                    <h1 className="Titletext">Noter</h1>
                </Link>
            </div>
            <div className="NavRouters">
                <Link className="NavRouters routes" to='/dashboard'>
                    <span className="routes">Dashboard</span>
                </Link>
            </div>
            <div className="NavBtns">
                <button className="CreateNote" onClick={handleSignOut} >Sign Out</button>
                <button className="CreateNote DelAccountBtn" onClick={handleDeleteAcc} >Delete Account</button>
            </div>
        </div>
    )
}

export default Navbar
