import React from 'react'
import "./topBar.scss"

function TopBar() {
    return (
        <div className='topBarCon'>


            <div className="topLeft">
                <i className=" topIcon fa-brands fa-facebook-square"></i>
                <i className=" topIcon fa-brands fa-twitter-square"></i>
                <i className=" topIcon fa-brands fa-pinterest-square"></i>
                <i className=" topIcon fa-brands fa-instagram-square"></i>
            </div>


            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItems">HOME</li>
                    <li className="topListItems">ABOUT</li>
                    <li className="topListItems">CONTACT</li>
                    <li className="topListItems">WRITE</li>
                    <li className="topListItems">LOGOUT</li>
                </ul>
            </div>


            <div className="topRight">
                <img className='topImg' src="assets/person/1.jpeg" alt="profilepic" />
                <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}

export default TopBar