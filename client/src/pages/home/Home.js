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
      setPosts(res.data);
    };
    fetchAllPosts();
  }, []);

  //Searching posts
  const [searchresult, setSearchresult] = useState("");

  const searchData = (data) => {
    return data.filter((item) =>
      item.title
        .toLowerCase()
        .includes(
          searchresult.toLowerCase() ||
            item.desc
              .toLowerCase()
              .includes(
                searchresult.toLowerCase() ||
                  item.location
                    .toLowerCase()
                    .includes(
                      searchresult.toLowerCase() ||
                        item.username
                          .toLowerCase()
                          .includes(searchresult.toLowerCase())
                    )
              )
        )
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
            <Rightbar />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
