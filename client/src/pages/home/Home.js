// import "./home.scss";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Rightbar from "../../components/rightbar/Rightbar";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// function Home() {
//   //FETCHING POSTS OF A PARTICULAR AUTHOR ONLY-------------
//   //fetching post according user/ i.e with user query //localhost:3000/posts?user=loki
//   // const location = useLocation()
//   // console.log(location)
//   const { search } = useLocation();

//   //FETCHING POSTS----------------------
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("/posts" + search);
//       console.log(res.data);
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, [search]); //run this useEffect only when the home page is rendered

//   return (
//     <>
//       <Header />
//       <div className="home">
//         <Posts posts={posts} /> {/* passing posts as props */}
//         <Rightbar />
//       </div>
//     </>
//   );
// }

// export default Home;

///////////////
import "./home.scss";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  //Fetching all posts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchAllPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
