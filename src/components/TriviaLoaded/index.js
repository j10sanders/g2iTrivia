import React from "react";
import { Redirect } from "react-router-dom";

const TriviaLoaded = ({ trivia, children }) => {
  if (trivia.length === 0) {
    return <Redirect to="/home" />;
  } else {
    return children;
  }
};

export default TriviaLoaded;
