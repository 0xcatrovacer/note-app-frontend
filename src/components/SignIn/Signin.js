import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './Signin.css'

const Signin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleSignin = (e) => {
        e.preventDefault();
        const user = { username, password }

        axios({
            method: 'POST',
            url: 'http://localhost:8000/users/login',
            headers: {
                "Content-Type": "application/json",
            },
            data: user
        }).then((res) => {
            console.log('User logged in')
            localStorage.setItem('token', res.data.token)
            history.push('/')
        }).catch((err) => {
            alert('Authentication failed')
            setUsername('')
            setPassword('')
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const user = { username, password }

        axios({
            method: 'POST',
            url: 'http://localhost:8000/users/',
            headers: {
                "Content-Type": "application/json",
            },
            data: user
        }).then((res) => {
            console.log('New User created')
            localStorage.setItem('token', res.data.token)
            history.push('/')
        }).catch((err) => {
            alert(err)
            setUsername('')
            setPassword('')
        })

    }

    return (
        <div className="Signin">
            <h1 className="SigninHead">Noter</h1>
            <div className="SigninForm">
                <form>
                    <div className="FormUsername">
                        <span className="FormLabel">Username</span>
                        <input type="text"
                            className="FormInput"
                            required
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                    </div>
                    <div className="FormPassword">
                        <span className="FormLabel">Password</span>
                        <input
                            type="password"
                            className="FormInput"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div className="FormBtns">
                        <button className="Btns" onClick={handleSignin} >Sign In</button>
                        <button className="Btns" onClick={handleRegister} > Create Account </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin
