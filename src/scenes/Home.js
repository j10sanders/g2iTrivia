import React, { useContext, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { store } from "../store";
import { useHistory } from "react-router-dom";
import { FlexContainer, Flex1, Header } from "../styles";

const Home = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  let history = useHistory();

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
        console.log(typeof response);
        //JSON.parse(obj.question))
        dispatch({ type: "fetchDataSuccess", payload: response.results });
      } catch (e) {
        console.warn(e);
        dispatch({ type: "fetchDataFailure", payload: e });
      }
    };
    fetchTrivia();
  }, [dispatch]);
  console.log(state, "State");

  const goToQuiz = () => {
    history.push("/quiz");
  };

  return (
    <FlexContainer>
      <Header>Welcome to the Trivia Challenge!</Header>
      <Flex1>
        <Flex1>You will be presented with 10 True or False questions.</Flex1>
        <Flex1>Can you score 100%?</Flex1>
      </Flex1>
      <Button
        loading={state.loading}
        content="Begin"
        icon="right arrow"
        labelPosition="right"
        size="massive"
        onClick={goToQuiz}
      />
    </FlexContainer>
  );
};

export default Home;
