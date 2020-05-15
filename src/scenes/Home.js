import React, { useContext, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { store } from "../store";
import styled from "styled-components";

const FlexContainer = styled.div`
  min-height: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-height: 800px;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
`;

const Flex1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-weight: 700;
  align-items: center;
`;

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
      />
    </FlexContainer>
  );
};

export default Home;
