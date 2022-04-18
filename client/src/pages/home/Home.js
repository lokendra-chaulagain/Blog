import React from 'react'
import "./home.scss"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Home() {
  const { search } = useLocation()

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])


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

















//useState Hook
  // const [posts, setPosts] = React.useState([])//empty array for initial state we have not fetched data yet

  // const { search } = useLocation();

  // //lets fetch data
  // React.useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts" + search)
  //     // console.log(res.data);
  //     setPosts(res.data)
  //   }
  //   fetchPosts()

  // }, [search])//empty array pass .it means fire this just at the beginning

  // -------------