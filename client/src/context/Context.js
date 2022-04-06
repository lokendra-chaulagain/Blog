//we are using context for the state management instead of redux
import { createContext } from 'react';
import Reducer from './Reducer';
import { useReducer } from 'react';



//At initial state user is not login so these are the default values for nonLogin user
//after login successful INITIAL_STATE will be updated where user have object like user : {username : '', email : '',password : ''}.
//Then we can use this user object anywhere in our application.
const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
}

export const Context = createContext(INITIAL_STATE);

//so how i am gonna reach inside this user from any component
//create a context-provider component and pass the value of user to it.

export const contextProvider = ({ children }) => {//children means our all components

    const [state, dispatch] =  (Reducer, INITIAL_STATE)

    return <Context.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
    }}>

        {children}
    </Context.Provider>

}