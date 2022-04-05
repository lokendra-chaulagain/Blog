import TopBar from './components/topbar/TopBar'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import PostRead from './pages/postread/PostRead';
import Write from './pages/write/Write';
import Home from './pages/home/Home';
import Setting from './pages/setting/Setting';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






function App() {

  // sudo user for  test 
  const user = false;



  return (
    <Router>

      {/* Topbar will be in every  page */}
      <TopBar />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
          {user ? <Home /> : <Register />}
          {/* if there is a user login (true) then we will not show register page instead we will redirect to home page  */}
        </Route>

        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>


        <Route path="/setting">
         {user ? <Setting /> : <Register/>}
        </Route>

        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>


        {/* ---everyone can read and see this page so we dont need any condition -------- */}
        <Route path="/post/:postId">
          <PostRead />
        </Route>



      </Switch>










      {/* <Home/> */}
      {/* <Singlepage/> */}
      {/* <Writepage /> */}
      {/* <Setting/> */}
      {/* <Login/> */}
      {/* <Register /> */}
    </Router>
  );
}
export default App;
