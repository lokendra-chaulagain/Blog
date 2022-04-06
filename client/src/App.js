import TopBar from './components/topbar/TopBar'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import PostRead from './pages/postread/PostRead';
import Write from './pages/write/Write';
import Home from './pages/home/Home';
import Setting from './pages/setting/Setting';

import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";






function App() {

  // sudo user for  test 
  const user = false;



  return (
    // <Router>
    <>
      {/* Topbar will be in every  page */}
      <TopBar />
      <Routes>


        <Route exact path="/" element={<Home />} />
        {/* </Route> */}

        <Route path="/register" element={user ? <Home /> : <Register />} />


        <Route path="/login" element={user ? <Home /> : <Login />} />
        {/* {}
        </Route> */}


        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        {/* {}
        </Route> */}

        <Route path="/write" element={user ? <Write /> : <Register />} />
        {/* {}
        </Route> */}


        {/* ---everyone can read and see this page so we dont need any condition -------- */}
        <Route path="/post/:postId" element={<PostRead />} />
        {/*           
        </Route> */}

      </Routes>











    </>





  );
}
export default App;
