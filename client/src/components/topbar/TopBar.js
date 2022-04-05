import React from 'react'
import { Link } from 'react-router-dom';
import "./topBar.scss"

function TopBar() {
    //sudo user for test
    const user = false;
    //

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
                    <li className="topListItems">
                        <Link to="/" className='link' >HOME</Link>
                    </li>

                    <li className="topListItems">
                        <Link to="/" className='link' >ABOUT</Link>

                    </li>
                    <li className="topListItems">
                        <Link to="/" className='link' >CONTACT</Link>
                    </li>
                    <li className="topListItems">
                        <Link to="/write" className='link' >WRITE</Link>
                    </li>
                    <li className="topListItems">
                        {user && "LOGOUT"}
                        {/* if user is login then only show logout otherwise dont show  */}
                        {/* <Link to="/" className='link' >LOGOUT</Link> */}
                    </li>
                </ul>
            </div>


            <div className="topRight">

                {
                    user ? (<img className='topImg' src="assets/person/1.jpeg" alt="profilepic" />
                    ) : (
                        <ul className="topList" >
                            <li className="topListItems">
                                <Link to="/login" className='link' >LOGIN</Link>
                            </li>

                            <li className="topListItems">
                                <Link to="/register" className='link' >REGISTER</Link>
                            </li>
                        </ul>



                    )
                }





                <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}

export default TopBar