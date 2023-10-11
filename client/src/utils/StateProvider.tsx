// @ts-nocheck

import React, {createContext, useContext, useReducer} from "react";
import reducer from "./reducer";

export const StateContext = createContext();

interface StateProviderProps {
    children: React.ReactNode
    initialState: any
    reducer: any
}

export const StateProvider: React.FC<StateProviderProps> = ({children, reducer, initialState }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateProvider = () => useContext(StateContext);