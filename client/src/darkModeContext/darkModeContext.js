import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

//context
export const DarkModeContext = createContext(INITIAL_STATE);

//contextProvider
export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  //   //saving user in local storage
  //   useEffect(() => {
  //     localStorage.setItem("user", JSON.stringify(state.user));
  //   }, [state.user]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        dispatch,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
