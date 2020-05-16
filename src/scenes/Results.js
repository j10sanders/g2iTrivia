import React, { useContext } from "react";
import { store } from "../store";

const Results = () => {
  const { answers } = useContext(store).state;
  console.log(answers, "answers");
  return <div>Results</div>;
};

export default Results;
