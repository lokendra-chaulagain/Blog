// import React from 'react'
// import "./home.scss"
// import Header from '../../components/header/Header'
// import Posts from '../../components/posts/Posts'
// import Rightbar from '../../components/rightbar/Rightbar'
// import axios from 'axios'
// import { useLocation } from 'react-router-dom'
// import { useState, useEffect } from 'react'


// function Home() {
//   const { search } = useLocation()

//   const [posts, setPosts] = useState([])
//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("/posts" + search)
//       setPosts(res.data)
//     }
//     fetchPosts()
//   }, [search])


//   return (
//     <>
//       <Header />
//       <div className='home'>
//         <Posts posts={posts} />
//         <Rightbar />
//       </div>
//     </>
//   )
// }
// export default Home



//=======================================>
import "./home.scss"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Rightbar from '../../components/rightbar/Rightbar'
import { useState, useEffect } from "react"
import axios from 'axios'



function Home() {

  //fetching posts
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      // console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  }, [])//fire this use effect whenever home page is rendered



  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Rightbar />
      </div>
    </>
  )
}

export default Home



























//CLIENT ONLY===========>
// import React from 'react'
// import "./home.scss"
// import Header from '../../components/header/Header'
// import Posts from '../../components/posts/Posts'
// import Rightbar from '../../components/rightbar/Rightbar'


// function Home() {
//   return (
//     <>
//       <Header />
//       <div className='home'>
//         <Posts />
//         <Posts />
//         <Posts />
//         <Rightbar />
//       </div>
//     </>
//   )
// }

// export default Home