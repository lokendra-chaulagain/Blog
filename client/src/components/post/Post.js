import React from 'react'
import "./post.scss"

function Post() {
    return (
        <div className='post'>
            <span className="postTitle">House Decorartion</span>
            <img className='postImg' src="assets/post/5.jpeg" alt="" />
            <div className='timeLocationRow'>
                <span className='postTime'>43 mins ago</span>
                <i class="locationIcon fa-solid fa-location-dot"></i>
                <span className="locationText">Kathmandu Nepal</span>
                <p className='postDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis accusantium sint laudantium ab nesciunt, provident repudiandae. Natus, ullam suscipit rem id molestiae odionobis voluptatum dolor quos  soluta!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloribus deserunt corrupti corporis odio repudiandae odit quis quo cupiditate ut. In aliquam quisquam necessitatibus perspiciatis dolores maiores quo fugiat animi sunt voluptates ab dolorem, quidem earum, officia sit laudantium explicabo voluptate doloribus nam? Veritatis praesentium excepturi nam rem. Fugit, illo!
                </p>
            </div>


        </div>
    )
}

export default Post