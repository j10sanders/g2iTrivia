import React, { useContext, useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";
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
        dispatch({ type: "fetchQuestionsSuccess", payload: response.results });
      } catch (e) {
        console.warn(e);
        dispatch({ type: "fetchDataFailure", payload: e });
      }
    };
    fetchTrivia();
  }, [dispatch]);

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
        animated
        size="massive"
        loading={state.loading}
        primary
        onClick={goToQuiz}
      >
        <Button.Content content="Begin" visible />
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </FlexContainer>
  );
};

export default Home;
