import React from 'react'
import "./register.scss"

function Register() {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="formContainer">
                    <span className='heading'>Enter Your Credentials For Register</span>

                    <label className='labelText'>Username</label>
                    <input className='loginInput' type="email" placeholder='Create Username' />

                    <label className='labelText'>Email</label>
                    <input className='loginInput' type="email" placeholder='Email' />

                    <label className='labelText'>Password</label>
                    <input className='loginInput' type="password" placeholder='Create Password' />

                    
                    <button className='signUpButton'>SignUP</button>
                    <span className='dontHaveAccountTxt'>Already have an account ?</span>
                    <button className='signUpButton'>SignIn</button>



                </div>

            </div>


        </div>
    )
}

export default Register