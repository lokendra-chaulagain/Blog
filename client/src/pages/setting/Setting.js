import React from 'react'
import "./setting.scss"
import Rightbar from '../../components/rightbar/Rightbar'

function Setting() {
    return (
        <div className='setting'>
            <div className="settingWrapper">
                <span className="headingTxt">Update Your Account</span>
                <span className="deleteAccountTxt">Delete Account</span>
                <span className="profilePicTxt">Profile Picture</span>
                <img src="assets/person/7.jpeg" alt="" className="profileImg" />




                <div className="usernameEmailPasswordContainer">
                    <label className='labelTxt'>Username</label>
                    <input className='updateInput' type="text" placeholder='lokendra' />

                    <label className='labelTxt' >Email</label>
                    <input className='updateInput' type="email" placeholder='lokendra@gmail.com' />

                    <label className='labelTxt'>Password</label>
                    <input  className='updateInput' type="password" placeholder='********' />

                    <button className="profileUpdateButton">Update</button>


                </div>
            </div>



            <Rightbar />
        </div>
    )
}

export default Setting