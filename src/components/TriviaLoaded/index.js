import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const TriviaLoaded = ({ trivia, children }) => {
  if (trivia.length === 0) {
    return <Redirect to="/" />;
  } else {
    return children;
  }
};

TriviaLoaded.propTypes = {
  trivia: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  children: PropTypes.node.isRequired,
};
export default TriviaLoaded;
