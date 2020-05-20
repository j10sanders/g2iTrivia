import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../scenes/Home";
import Quiz from "../scenes/Quiz";
import Results from "../scenes/Results";
import { BrowserRouter as Router } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default Routes;
