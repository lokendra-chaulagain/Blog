import React from 'react'
import Header from '../../components/header/Header'
import Postbar from '../../components/postbar/Postbar'
import Rightbar from '../../components/rightbar/Rightbar'

import "./home.scss"

function Home() {
  return (
    <>
      <Header />
      <div className='home'>
        <Postbar />
        <Rightbar />
      </div>
    </>
  )
}

export default Home