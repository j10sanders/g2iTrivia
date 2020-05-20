import React, { useContext, useState } from "react";
import { store } from "../store";
import { Button, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { FlexContainer, Flex1, Header } from "../styles";
import styled from "styled-components";
import MarkDown from "react-markdown";
import TriviaLoaded from "../components/TriviaLoaded";

const StyledTrue = styled(Button)`
  width: 128px;
`;

const QuestionNumber = styled.div`
  font-size: 20px;
`;

const QuestionCard = styled(Segment).attrs({ size: "massive" })`
  height: 240px;
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 500px) {
    width: 460px;
  }
`;

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
  const { dispatch, state } = useContext(store);
  let history = useHistory();
  const { questions } = state;

  const currentQuestion = questions[questionNumber];
  const { category, question } = currentQuestion || {};

  const answer = (answer) => {
    const currentAnswers = [...questionsAnswered];
    const currentQuestion = questions[questionNumber];
    const boolCorrect = currentQuestion.correct_answer === "True";
    const newAnswer = { ...currentQuestion, userAnswer: answer, boolCorrect };
    currentAnswers[questionNumber] = newAnswer;
    if (questionNumber + 1 === questions.length) {
      dispatch({ type: "finishedAnswers", payload: currentAnswers });
      history.push("/results");
    }
    setQuestionsAnswered(currentAnswers);
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <TriviaLoaded trivia={questions}>
      <FlexContainer>
        <Header>{category}</Header>
        <Flex1>
          <QuestionCard>
            <MarkDown source={question} />
          </QuestionCard>
          <QuestionNumber>
            {questionNumber + 1} of {questions.length}
          </QuestionNumber>
        </Flex1>
        <Button.Group size="massive">
          <StyledTrue positive onClick={() => answer(true)}>
            True
          </StyledTrue>
          <Button.Or />
          <Button negative onClick={() => answer(false)}>
            False
          </Button>
        </Button.Group>
      </FlexContainer>
    </TriviaLoaded>
  );
};

export default Quiz;
