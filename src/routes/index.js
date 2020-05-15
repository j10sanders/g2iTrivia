import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../scenes/Home";
import Quiz from "../scenes/Quiz";
import Results from "../scenes/Results";

const Routes = () => {
  return (
    <Switch>
      <Route path="/quiz">
        <Quiz />
      </Route>
      <Route path="/results">
        <Results />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
