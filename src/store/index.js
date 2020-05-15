import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

/*
Example usage:
import {useContext} from 'react'
import { store } from '../store'

const globalState = useContext(store)
const { dispatch, state } = globalState
const { tabViewing } = state

return(
  <button onClick={() => dispatch({ type: 'tabViewing', data: 'idk'})}>Name of tab: {tabViewing}</button>
)
*/

/* We may want to consider using 'immer' and 'useImmer' */

const initialState = {
  loading: false,
  questions: [],
  answers: [],
};
const store = createContext(initialState);
const { Provider } = store;
console.log(store, "STOR");

const reducer = (state, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "fetchData":
      return { ...state, loading: true };
    case "fetchDataSuccess":
      console.log("paylod", action.payload, "HUI");
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case "fetchDataFailure":
      return { ...state, error: action.payload, loading: false };
    default:
      throw new Error();
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { store, StateProvider };
