
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
  return (
    <Router>

      {/* Topbar will be in every  page */}
      <TopBar />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>


        <Route path="/write">
          <Write/>
        </Route>


        <Route path="/postRead">
          <PostRead/>
        </Route>

        <Route path="/setting">
          <Setting/>
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
