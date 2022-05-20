import "./home.scss";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../../components/topbar/TopBar";
import SearchResult from "../../components/searchedResult/SearchResult";

function Home() {
  //Fetching all posts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      const res = await axios.get("/posts/getAll");
      // console.log(res.data);
      setPosts(res.data);
    };
    fetchAllPosts();
  }, []);
  ///Searching
  // const [searchQuery, setSearchQuery] = useState("");
  // posts.filter((post) =>
  //   post.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // console.log(searchQuery);
  const [searchresult, setSearchresult] = useState("");
  const keys = ["title"];

  const searchData = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchresult))
    );
  };

  return (
    <>
      <TopBar setSearchresult={setSearchresult} />
      <Header />
      {searchresult ? (
        <SearchResult data={searchData(posts)} />
      ) : (
        <>
          <div className="home">
            <Posts posts={posts} />
            <input type="text" />
            <Rightbar />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
