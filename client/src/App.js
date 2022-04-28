import TopBar from './components/topbar/TopBar'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import PostRead from './pages/postread/PostRead';
import Write from './pages/write/Write';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Setting from './pages/setting/Setting';
import { Context } from './context/Context';
import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";



function App() {
  const { user } = useContext(Context);
  return (
    <>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<PostRead />} />
        <Route path="/about" element={user ? <About /> : <Register />} />
        <Route path="/contact" element={user ? <Contact /> : <Register />} />
      </Routes>
    </>
  );
}
export default App;





//CLIENT ONLY===========>
// import TopBar from './components/topbar/TopBar'
// import Register from './pages/register/Register';
// import Login from './pages/login/Login';
// import PostRead from './pages/postread/PostRead';
// import Write from './pages/write/Write';
// import Home from './pages/home/Home';
// import About from './pages/about/About';
// import Contact from './pages/contact/Contact';
// import Setting from './pages/setting/Setting';
// import { Routes, Route } from "react-router-dom";


// function App() {
//   return (
//     <>
//       <TopBar />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/setting" element={<Setting />} />
//         <Route path="/write" element={<Write />} />
//         <Route path="/post/:postId" element={<PostRead />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

