import React, { useContext } from "react";
import { store } from "../store";
import { FlexContainer, Header } from "../styles";
import styled from "styled-components";
import { Icon, Button } from "semantic-ui-react";
import MarkDown from "react-markdown";
import { useHistory } from "react-router-dom";
import TriviaLoaded from "../components/TriviaLoaded";

const StyledMarkDown = styled(MarkDown)`
  padding-top: 3px;
  padding-left: 4px;
`;

const Answer = styled.div`
  font-size: 22px;
  padding-top: 10px;
  display: inline-flex;
  color: ${({ correct, theme }) => (correct ? theme.correct : theme.incorrect)};
`;

const ButtonContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`;

const Results = () => {
  let history = useHistory();
  const { answers } = useContext(store).state;
  const correctAnswers = answers.filter(
    (answer) => answer.userAnswer === answer.boolCorrect
  );

  const startOver = () => {
    history.push("/home");
  };

  return (
    <TriviaLoaded trivia={answers}>
      <FlexContainer>
        <Header>
          <div>You scored</div>
          <div>
            {correctAnswers.length} / {answers.length}
          </div>
        </Header>
        <div
          style={{ textAlign: "left", maxWidth: "600px", paddingTop: "30px" }}
        >
          {answers.map((answer) => {
            const correct = answer.boolCorrect === answer.userAnswer;
            return (
              <Answer key={answer.question} correct={correct}>
                <Icon name={correct ? "plus" : "minus"} />
                <StyledMarkDown source={answer.question} />
              </Answer>
            );
          })}
        </div>
        <ButtonContainer>
          <Button animated size="massive" primary onClick={startOver}>
            <Button.Content content="Play Again?" visible />
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </ButtonContainer>
      </FlexContainer>
    </TriviaLoaded>
  );
};

export default Results;
