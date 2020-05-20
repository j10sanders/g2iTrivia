import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  loading: false,
  questions: [],
  answers: [],
};
const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchData":
      return { ...state, loading: true };
    case "fetchQuestionsSuccess":
      return {
        answers: [],
        questions: action.payload,
        loading: false,
      };
    case "fetchDataFailure":
      return { ...state, error: action.payload, loading: false };
    case "finishedAnswers":
      return { ...state, answers: action.payload };
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
