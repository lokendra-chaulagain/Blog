import React from 'react'
import "./rightbar.scss"

function Rightbar() {
    return (
        <div className='rightbar'>


            <div className="rightbarItem">
                <hr className="lineHrTop" />
                <span className="rightbarTitle">ABOUT ME</span>
                <hr className="lineHrBottom" />
                <img src="assets/person/4.jpeg" alt="" className="rightbarImg" />
                <p className='introduction'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore, quis eveniet officia quisquam modi. Deleniti alias ad, nulla iusto praesentium cupiditate.</p>
            </div>


            <div className="rightbarItem">
                <hr className="lineHrTop" />
                <span className="rightbarTitle">CATEGORIES</span>
                <hr className="lineHrBottom" />
                <ul className="rightbarList">
                    <li className="rightbarListItem">Life</li>
                    <li className="rightbarListItem">Music</li>
                    <li className="rightbarListItem">Style</li>
                    <li className="rightbarListItem">Sports</li>
                    <li className="rightbarListItem">Tech</li>
                    <li className="rightbarListItem">Cinema</li>
                </ul>
            </div>


            <div className="rightbarItem">
                <hr className="lineHrTop" />
                <span className="rightbarTitle">FOLLOW US</span>
                <hr className="lineHrBottom" />
                <div className="rightbarSocial">
                    <i className=" rightbarIcon fa-brands fa-facebook-square"></i>
                    <i className=" rightbarIcon fa-brands fa-twitter-square"></i>
                    <i className=" rightbarIcon fa-brands fa-pinterest-square"></i>
                    <i className=" rightbarIcon fa-brands fa-instagram-square"></i>

                </div>


            </div>



        </div>
    )
}

export default Rightbar