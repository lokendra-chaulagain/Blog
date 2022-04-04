import React from 'react'
import "./login.scss"

function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="formContainer">
                    <label>Email</label>
                    <input type="email" placeholder='Email' />
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                    <button>Login</button>
                    <span>Dont have an account</span>
                    <button>Create an Account</button>


                </div>

            </div>

        </div>
    )
}

export default Login