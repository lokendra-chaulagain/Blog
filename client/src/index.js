// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//import ContextProvider










// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  BrowserRouter as Router,

} from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    
    <App /> 
    
    
  </Router>


);

