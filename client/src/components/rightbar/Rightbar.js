// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import "./rightbar.scss"
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// function Rightbar() {
//     const [cats, setCat] = useState([])
//     useEffect(() => {
//         const getCats = async () => {
//             const res = await axios.get("/categories")
//             setCat(res.data)
//         }
//         getCats()
//     }, [])

//     return (
//         <div className='rightbar'>
//             <div className="rightbarItem">
//                 <hr className="lineHrTop" />
//                 <span className="rightbarTitle">ABOUT ME</span>
//                 <hr className="lineHrBottom" />
//                 <img src="assets/person/4.jpeg" alt="" className="rightbarImg" />
//                 <p className='introduction'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore, quis eveniet officia quisquam modi. Deleniti alias ad, nulla iusto praesentium cupiditate.</p>
//             </div>

//             <div className="rightbarItem">
//                 <hr className="lineHrTop" />
//                 <span className="rightbarTitle">CATEGORIES</span>
//                 <hr className="lineHrBottom" />
//                 <ul className="rightbarList">
//                     {cats.map((c) => (
//                         <Link to={`/?cat=${c.name}`} >
//                             <li className="rightbarListItem" >{c.name} </li>
//                         </Link>
//                     ))}
//                 </ul>
//             </div>

//             <div className="rightbarItem">
//                 <hr className="lineHrTop" />
//                 <span className="rightbarTitle">FOLLOW US</span>
//                 <hr className="lineHrBottom" />
//                 <div className="rightbarSocial">
//                     <i className=" rightbarIcon fa-brands fa-facebook-square"></i>
//                     <i className=" rightbarIcon fa-brands fa-twitter-square"></i>
//                     <i className=" rightbarIcon fa-brands fa-pinterest-square"></i>
//                     <i className=" rightbarIcon fa-brands fa-instagram-square"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Rightbar





// //CLIENT ONLY===========>
import "./rightbar.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'



function Rightbar() {

    //Fetching sidebar category list
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            console.log(res.data);
            setCats(res.data)
        }
        getCats()

    }, [])//at the beginning only fire this useEffect





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
                        <li className="rightbarListItem" >{c.name} </li>
                    ))}
                    
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