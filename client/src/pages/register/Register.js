import "./register.scss"
import { useState } from "react"
import axios from "axios";
import { Link } from 'react-router-dom'


function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("/auth/register", { username, email, password })
            //if user registered successfully and we have data then redirect to login page
            res.data && window.location.replace("/login")
        } catch (error) {
            //if error then set error to true
            setError(true)
        }
    }


    return (
        <div className='register'>
            <div className="registerWrapper" >
                <form className="formContainer" onSubmit={handleSubmit}  >
                    <span className='heading'>Enter Your Credentials For Register</span>

                    <label className='labelText'>Username</label>
                    <input className='loginInput' type="text" placeholder='Create Username' onChange={e => setUsername(e.target.value)} />

                    <label className='labelText'>Email</label>
                    <input className='loginInput' type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />

                    <label className='labelText'>Password</label>
                    <input className='loginInput' type="password" placeholder='Create Password' onChange={e => setPassword(e.target.value)} />
                    
                    <button className='signUpButton' type='submit' >Register</button>

                    {/* If error show this span */}
                    {error && <span style={{ color: "red", marginTop: "2px", marginBottom: "5px", textAlign: "center" }} >Something went Wrong</span>}

                    <span className='dontHaveAccountTxt'>Already have an account ?</span>
                    <Link to={"/login"}>
                        <button className='signUpButton'>SignIn</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}
export default Register







// //CLIENT ONLY=======================>
// import "./register.scss"
// import { Link } from 'react-router-dom'


// function Register() {
//     return (
//         <div className='register'>
//             <div className="registerWrapper" >
//                 <form className="formContainer"  >
//                     <span className='heading'>Enter Your Credentials For Register</span>

//                     <label className='labelText'>Username</label>
//                     <input className='loginInput' type="text" placeholder='Create Username' />

//                     <label className='labelText'>Email</label>
//                     <input className='loginInput' type="email" placeholder='Email' />

//                     <label className='labelText'>Password</label>
//                     <input className='loginInput' type="password" placeholder='Create Password' />

//                     <button className='signUpButton' type='submit' >Register</button>
//                     <span style={{ color: "red", marginTop: "2px", marginBottom: "5px", textAlign: "center" }} >Something went Wrong</span>

//                     <span className='dontHaveAccountTxt'>Already have an account ?</span>
//                     <Link to={"/login"}>
//                         <button className='signUpButton'>SignIn</button>
//                     </Link>

//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Register