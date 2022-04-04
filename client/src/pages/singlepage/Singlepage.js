import React from 'react'
import Singlepost from '../../components/singlepost/Singlepost'
import "./singlepage.scss"
import Rightbar from '../../components/rightbar/Rightbar'



function Singlepage() {
  return (
    <div className='singlePage'>
     <Singlepost/>
     <Rightbar/>
    
    </div>
  )
}

export default Singlepage