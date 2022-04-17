import React, { useState } from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            })
            res.data && window.location.replace("/login")
        } catch (error) {
            setError(true)
        }
    }

    return (
        <div className='register'>
            <div className="registerWrapper" >
                <form className="formContainer" onSubmit={handleSubmit}>
                    <span className='heading'>Enter Your Credentials For Register</span>

                    {/* username */}
                    <label className='labelText'>Username</label>
                    <input className='loginInput' type="text" placeholder='Create Username'
                        onChange={e => setUsername(e.target.value)}
                    />

                    {/* Email */}
                    <label className='labelText'>Email</label>
                    <input className='loginInput' type="email" placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label className='labelText'>Password</label>
                    <input className='loginInput' type="password" placeholder='Create Password'
                        onChange={e => setPassword(e.target.value)}
                    />

                    {/* SignUp button */}
                    <button className='signUpButton' type='submit' >Register</button>
                
                    {/* if error use this span */}
                    {error && <span align="center " style={{ color: "red" }}>Something went wrong </span>}

                    <span className='dontHaveAccountTxt'>Already have an account ?</span>
                    <button className='signUpButton'>
                        <Link to="/login" className='link' >SignIn</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Register