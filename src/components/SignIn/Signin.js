import React from 'react'
import './Signin.css'

const Signin = () => {
    return (
        <div className="Signin">
            <h1 className="SigninHead">Noter</h1>
            <div className="SigninForm">
                <form>
                    <div className="FormUsername">
                        <span className="FormLabel">Username</span>
                        <input type="text"
                            className="FormInput" required />
                    </div>
                    <div className="FormPassword">
                        <span className="FormLabel">Password</span>
                        <input type="password" className="FormInput" />
                    </div>
                    <div className="FormBtns">
                        <button className="Btns">Sign In</button>
                        <button className="Btns"> Create Account </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin
