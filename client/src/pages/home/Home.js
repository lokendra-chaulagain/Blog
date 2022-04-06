import React from 'react'
import Header from '../../components/header/Header'
import Postbar from '../../components/postbar/Postbar'
import Rightbar from '../../components/rightbar/Rightbar'
import "./home.scss"
import axios from 'axios'




function Home() {









  //useState Hook
  const [posts, setPosts] = React.useState([])//empty array for initial state we have not fetched data yet

  //lets fetch data
  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      // console.log(res.data);
      setPosts(res.data)
    }
    fetchPosts()

  }, [])//empty array pass .it means fire this just at the beginning














  return (
    <>
      <Header />
      <div className='home'>



        {/* mathi ko posts as a props pass garey ko postbar ma */}
        <Postbar posts={posts} />





        <Rightbar />
      </div>
    </>
  )
}

export default Home