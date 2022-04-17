import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="formContainer">

                    <label className='labelText'>Username</label>
                    <input className='loginInput' type="text" placeholder='Username' />

                    <label className='labelText'>Password</label>
                    <input className='loginInput' type="password" placeholder='Password' />

                    <button className='loginButton'>LOGIN</button>
                    <span className='dontHaveAccountTxt'>Dont have an account ?</span>

                    <button className='loginButton'>
                        <Link to="/register" className='link' >Create an Account</Link>
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Login