import React, { useContext, useState, useEffect } from "react";
import { store } from "../store";
import { Button, Segment } from "semantic-ui-react";
import { Redirect, useHistory } from "react-router-dom";
import { FlexContainer, Flex1, Header } from "../styles";
import styled from "styled-components";
import mockQ from "../mock";
import MarkDown from "react-markdown";
import TriviaLoaded from "../components/TriviaLoaded";

// const mockQ = {
//   response_code: 0,
//   results: [
//     {
//       category: "Entertainment: Comics",
//       type: "boolean",
//       difficulty: "hard",
//       question:
//         "In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.",
//       correct_answer: "False",
//       incorrect_answers: ["True"],
//     },
//     {
//       category: "Entertainment: Video Games",
//       type: "boolean",
//       difficulty: "hard",
//       question:
//         "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
//       correct_answer: "False",
//       incorrect_answers: ["True"],
//     },
//     {
//       category: "General Knowledge",
//       type: "boolean",
//       difficulty: "hard",
//       question:
//         "&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.",
//       correct_answer: "True",
//       incorrect_answers: ["False"],
//     },
//     {
//       category: "Entertainment: Video Games",
//       type: "boolean",
//       difficulty: "hard",
//       question:
//         "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
//       correct_answer: "True",
//       incorrect_answers: ["False"],
//     },
//     {
//       category: "Science & Nature",
//       type: "boolean",
//       difficulty: "hard",
//       question: "Scientists can grow teeth from urine.",
//       correct_answer: "True",
//       incorrect_answers: ["False"],
//     },
//     {
//       category: "Science: Mathematics",
//       type: "boolean",
//       difficulty: "hard",
//       question:
//         "If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.",
//       correct_answer: "True",
//       incorrect_answers: ["False"],
//     },
//     {
//       category: "History",
//       type: "boolean",
//       difficulty: "hard",
//       question: "The Battle of Trafalgar took place on October 23rd, 1805",
//       correct_answer: "False",
//       incorrect_answers: ["True"],
//     },
//     {
//       category: "Geography",
//       type: "boolean",
//       difficulty: "hard",
//       question:
//         "Switzerland has four national languages, English being one of them.",
//       correct_answer: "False",
//       incorrect_answers: ["True"],
//     },
//     {
//       category: "Entertainment: Books",
//       type: "boolean",
//       difficulty: "hard",
//       question: "Harry Potter was born on July 31st, 1980.",
//       correct_answer: "True",
//       incorrect_answers: ["False"],
//     },
//     {
//       category: "Entertainment: Film",
//       type: "boolean",
//       difficulty: "hard",
//       question:
//         "The weapon Clint Eastwood uses in &quot;Dirty Harry&quot; was a .44 Automag.",
//       correct_answer: "False",
//       incorrect_answers: ["True"],
//     },
//   ],
// };

const QuestionNumber = styled.div`
  font-size: 20px;
`;

const QuestionCard = styled(Segment).attrs({ size: "massive" })`
  height: 200px;
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

  console.log(mockQ);
  const mock = mockQ.results;
  console.log(mock, "mock");
  // const j = JSON.stringify(mock);
  // const r = JSON.parse(j.replace(/(&quot\;)/g, '"'));
  // console.log(r, "R");
  // if (questions.length === 0) {
  //   return <Redirect to="/home" />;
  // }
  // useEffect(() => {
  //   if (questionNumber >= mock.length) {

  //   }
  // }, [questionNumber]);
  const currentQuestion = questions[questionNumber];
  // const currentQuestion = mock[questionNumber];
  const { category, question } = currentQuestion || {};

  const answer = (answer) => {
    const currentAnswers = [...questionsAnswered];
    const currentQuestion = questions[questionNumber];
    const boolCorrect = currentQuestion.correct_answer === "True";
    const newAnswer = { ...currentQuestion, userAnswer: answer, boolCorrect };
    currentAnswers[questionNumber] = newAnswer;
    if (questionNumber + 1 === mock.length) {
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
            {questionNumber + 1} of {mock.length}
          </QuestionNumber>
        </Flex1>
        <Button.Group size="massive">
          <Button onClick={() => answer(false)}>False</Button>
          <Button.Or />
          <Button positive onClick={() => answer(true)}>
            True
          </Button>
        </Button.Group>
      </FlexContainer>
    </TriviaLoaded>
  );
};

export default Quiz;
