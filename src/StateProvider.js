import React, { createContext, useContext, useReducer } from 'react';

// preparing data layout
export const StateContext = createContext();

//higher order component. using this to wrap our app. 
export const StateProvider = ({
    reducer, initialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pull the data from datalayout we use useStateValue 
export const useStateValue = () => useContext(StateContext);