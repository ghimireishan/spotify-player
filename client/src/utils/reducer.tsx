import React from "react";
import { reducerCases } from "./Constants";

export const initialState = {
  token: null
};

interface ReducerProps {
  type: string;
  token?: any; 
}

const reducer: React.Reducer<typeof initialState, ReducerProps> = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    default:
      return state;
  }
};

export default reducer;