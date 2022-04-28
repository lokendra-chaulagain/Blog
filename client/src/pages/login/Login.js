import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { useRef, useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'



function Login() {

    const userRef = useRef()
    const passwordRef = useRef()
    const {user, isFetching, dispatch } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            window.location.replace("/")
            
        } catch (error) {
            //if error dispatch the Login_Failure action
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }
    console.log(user)



    return (
        <div className='login'>
            <div className="loginWrapper">
                <form className="formContainer" onSubmit={handleSubmit}>
                    <label className='labelText'>Username</label>
                    <input className='loginInput' type="text" required placeholder='Username' ref={userRef} />

                    <label className='labelText'>Password</label>
                    <input className='loginInput' type="password" required placeholder='Password' ref={passwordRef} />

                    <button className='loginButton' type='submit' disabled={isFetching} >LOGIN</button>
                    <span className='dontHaveAccountTxt'>Dont have an account ?</span>

                    <button className='loginButton'>
                        <Link to="/register" className='link  loginButton' >Create an Account</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login











//CLIENT ONLY===========>
// import React from 'react'
// import "./login.scss"
// import { Link } from 'react-router-dom'



// function Login() {
//     return (
//         <div className='login'>
//             <div className="loginWrapper">
//                 <form className="formContainer" >
//                     <label className='labelText'>Username</label>
//                     <input className='loginInput' type="text" required placeholder='Username' />

//                     <label className='labelText'>Password</label>
//                     <input className='loginInput' type="password" required placeholder='Password' />

//                     <button className='loginButton' type='submit'  >LOGIN</button>
//                     <span className='dontHaveAccountTxt'>Dont have an account ?</span>

//                     <button className='loginButton'>
//                         <Link to="/register" className='link  loginButton' >Create an Account</Link>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login