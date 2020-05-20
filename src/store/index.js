import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

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

const theme = {
  trueButton: "#55ec98",
  falseButton: "#ff684e",
  correct: "#005696",
  incorrect: "#8e1414",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

Provider.propTypes = {
  value: PropTypes.shape({
    state: PropTypes.shape({
      loading: PropTypes.string.bool,
      questions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      answers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }),
};

export { store, StateProvider, Theme };
