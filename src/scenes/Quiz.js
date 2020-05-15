import React, { useContext } from "react";
import { store } from "../store";
import { Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const Quiz = () => {
  const { state } = useContext(store);
  if (state.questions.length === 0) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <Button.Group>
        <Button>False</Button>
        <Button.Or />
        <Button positive>True</Button>
      </Button.Group>
    </div>
  );
};

export default Quiz;
