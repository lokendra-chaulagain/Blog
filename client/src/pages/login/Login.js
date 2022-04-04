import React from 'react'
import "./login.scss"

function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="formContainer">
                    <label className='labelText'>Email</label>
                    <input className='loginInput' type="email" placeholder='Email' />
                    <label className='labelText'>Password</label>
                    <input className='loginInput' type="password" placeholder='Password' />
                    <button className='loginButton'>Login</button>
                    <span className='dontHaveAccountTxt'>Dont have an account ?</span>
                    <button className='loginButton'>Create an Account</button>


                </div>

            </div>

        </div>
    )
}

export default Login