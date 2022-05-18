import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
import { DarkModeContextProvider } from "./darkModeContext/darkModeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <ContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </ContextProvider>
  </Router>
);
