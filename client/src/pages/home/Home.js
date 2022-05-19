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
      const res = await axios.get("/posts/getAll");
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