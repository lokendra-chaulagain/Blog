import React from 'react'
import SinglePost from '../../components/singlepost/SinglePost'
import "./postRead.scss"
import Rightbar from '../../components/rightbar/Rightbar'

function PostRead() {
  return (
    <div className='singlePage'>
     <SinglePost/>
     <Rightbar/>
    </div>
  )
}
export default PostRead