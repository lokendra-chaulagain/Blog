import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { useRef, useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'

function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res =await axios.post("/auth/login",{
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }
    





    return (
        <div className='login'>
            <div className="loginWrapper">

                <form className="formContainer" onSubmit={handleSubmit}>
                    <label className='labelText'>Username</label>
                    <input className='loginInput' type="text" placeholder='Username' ref={userRef} />

                    <label className='labelText'>Password</label>
                    <input className='loginInput' type="password" placeholder='Password' ref={passwordRef} />

                    <button className='loginButton' type='submit' disabled={isFetching} >LOGIN</button>
                    <span className='dontHaveAccountTxt'>Dont have an account ?</span>

                    <button className='loginButton'>
                        <Link to="/register" className='link' >Create an Account</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login









// import axios from "axios";
// import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./login.scss";

//  function Login() {
//   const userRef = useRef();
//   const passwordRef = useRef();
//   const {user, dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/login", {
//         username: userRef.current.value,
//         password: passwordRef.current.value,
//       });
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };
//   console.log(user)