import React from 'react'
import "./setting.scss"
import Rightbar from '../../components/rightbar/Rightbar'

import { Context } from '../../context/Context';
import { useContext } from 'react';
import { useState } from 'react'
import axios from 'axios'



function Setting() {
    const { user } = useContext(Context)

    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        }


        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename
            try {
                await axios.post("/upload", data)

            } catch (error) {

            }
        }
        try {
            await axios.put("/users/" + user._id, updatedUser)
            setSuccess(true)
            window.location.reload()
        } catch (error) {

        }
    }















    return (
        <div className='setting'>
            <div className="settingWrapper"   >
                <span className="headingTxt">Update Your Account</span>
                <span className="deleteAccountTxt">Delete Account</span>

                <form className="profileUpdateform" onSubmit={handleSubmit}>



                    <label className="profilePicTxt">Profile Picture</label>







                    {/* <img src={file ? URL.createObjectURL(file) : user.profilePic} alt="" className="profileImg" /> */}
                    <img src={user.profilePic} alt="" className="profileImg" />



                    <label htmlFor="fileInput">
                        <i class="settingProfileUploadIcon fa-regular fa-image" ></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />



                    <div className="usernameEmailPasswordContainer">
                        <label className='labelTxt'>Username</label>
                        <input className='updateInput' type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />

                        <label className='labelTxt' >Email</label>
                        <input className='updateInput' type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />

                        <label className='labelTxt'>Password</label>
                        <input className='updateInput' type="password" placeholder='********' onChange={e => setPassword(e.target.value)} />

                        <button className="profileUpdateButton" type='submit'>Update</button>

                        {
                            success && (<div className="successMsg" style={{ color: 'green' }}      >Profile has been updated</div>)
                        }
                    </div>
                </form>


            </div>
            <Rightbar />
        </div>
    )
}


export default Setting