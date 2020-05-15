import React, { useContext, useEffect } from "react";
import { store } from "../store";

const Home = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  useEffect(() => {
    const fetchTrivia = async () => {
      dispatch({
        type: "fetchData",
      });
      try {
        const response = await (
          await fetch(
            "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
          )
        ).json();
        dispatch({ type: "fetchDataSuccess", payload: response.results });
      } catch (e) {
        console.alert(e);
        dispatch({ type: "fetchDataFailure", payload: e });
      }
    };
    fetchTrivia();
  }, [dispatch]);
  console.log(state, "State");
  return <div>Home</div>;
};

export default Home;
