// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import { ContextProvider } from "./context/Context";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(
//   <Router>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </Router>
// );




// //CLIENT ONLY===========>
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);
