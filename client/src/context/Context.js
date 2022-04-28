import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,  //fetching user from local storage
    isFetching: false,
    error: false,
};


//context
export const Context = createContext(INITIAL_STATE);


//contextProvider
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    
    //saving user in local storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]) //whenever state.user changes fire this useEffect//whenever user changes save that user in local storage


    return (
        <Context.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </Context.Provider>
    )
}