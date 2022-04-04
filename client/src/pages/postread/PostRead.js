import React from 'react'
import Singlepost from '../../components/singlepost/Singlepost'
import "./postRead.scss"
import Rightbar from '../../components/rightbar/Rightbar'



function PostRead() {
  return (
    <div className='singlePage'>
     <Singlepost/>
     <Rightbar/>
    
    </div>
  )
}

export default PostRead