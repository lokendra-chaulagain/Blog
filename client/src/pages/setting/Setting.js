import React from 'react'
import "./setting.scss"
import Rightbar from '../../components/rightbar/Rightbar'
import { Context } from '../../context/Context';
import { useContext } from 'react';
import { useState } from 'react'
import axios from 'axios'


 function Setting() {
    const { user } = useContext(Context)

    // const [file, setFile] = useState(null)
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")



    // const handleUpdate = async (e) => {
    //     e.preventDefault()
    //     const updatedUser = {
    //         userId: user._id,
    //         username,
    //         email,
    //         password,
    //     }
    // }

    // if (file) {
    //     const data = new FormData()
    //     const filename = Date.now() + file.name;
    //     data.append("name", filename)
    //     data.append("file", file)
    //     updatedUser.profilePic = filename
    //     try {
    //         await axios.post("/upload", data)
    //     } catch (error) {
    //     }
    // }
    // try {
    //   await  axios.put("/users" + user._id, updatedUser)


    // } catch (error) {

    // }














    return (
        <div className='setting'>
            <div className="settingWrapper">
                <span className="headingTxt">Update Your Account</span>
                <span className="deleteAccountTxt">Delete Account</span>
                <span className="profilePicTxt">Profile Picture</span>
                <img src={user.profilePic} alt="" className="profileImg" />

                <div className="usernameEmailPasswordContainer">
                    <label className='labelTxt'>Username</label>
                    <input className='updateInput' type="text" placeholder='lokendra' />

                    <label className='labelTxt' >Email</label>
                    <input className='updateInput' type="email" placeholder='lokendra@gmail.com' />

                    <label className='labelTxt'>Password</label>
                    <input className='updateInput' type="password" placeholder='********' />

                    <button className="profileUpdateButton">Update</button>
                </div>
            </div>
            <Rightbar />
        </div>
    )
}

export default Setting