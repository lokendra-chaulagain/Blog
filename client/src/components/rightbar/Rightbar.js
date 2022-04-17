import React, { useState } from 'react'
import { useEffect } from 'react'
import "./rightbar.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'

function Rightbar() {
    const [cats, setCats] = useState([])//initial state

    useEffect(() => {
        const getCatch = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCatch()

    }, [])








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







                    {cats.map((c) => (

                        <Link to={`/?cat=${c.name}`} className="link" >
                            <li  className="rightbarListItem">  {c.name}</li>

                        </Link>

                    ))}
                    {/* <li className="rightbarListItem">Life</li> */}

                    {/* <li className="rightbarListItem">Music</li>
                    <li className="rightbarListItem">Style</li>
                    <li className="rightbarListItem">Sports</li>
                    <li className="rightbarListItem">Tech</li>
                    <li className="rightbarListItem">Cinema</li> */}
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