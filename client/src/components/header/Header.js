import React from 'react'
import "./header.scss"

function Header() {
    return (
        <div className='header'>


            <div className="headerTitles">
                <span className='headerTitleSmall'>React and Nodes </span>
                <span className='headerTitleBig'>BLOG </span>
            </div>

            <img className='headerImg' src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />


        </div>
    )
}

export default Header