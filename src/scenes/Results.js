import React, { useContext } from "react";
import { store } from "../store";
import { FlexContainer, Flex1, Header } from "../styles";
import styled from "styled-components";
import { Icon, Button } from "semantic-ui-react";
import MarkDown from "react-markdown";
import { useHistory } from "react-router-dom";
import TriviaLoaded from "../components/TriviaLoaded";

const StyledMarkDown = styled(MarkDown)`
  padding-top: 3px;
  padding-left: 4px;
`;

const CorrectAnswer = styled.div`
  font-size: 22px;
  padding-top: 10px;
  display: inline-flex;
  /* color: green; */
`;

const WrongAnswer = styled.div`
  font-size: 22px;
  color: #b42e2e;
  padding-top: 10px;
  display: inline-flex;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;

const Results = () => {
  let history = useHistory();
  const { answers } = useContext(store).state;
  console.log(answers, "answers");
  // const answers = [
  //   {
  //     category: "Entertainment: Comics",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question:
  //       "In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.",
  //     correct_answer: "False",
  //     incorrect_answers: ["True"],
  //     userAnswer: true,
  //     boolCorrect: false,
  //   },
  //   {
  //     category: "Entertainment: Video Games",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question:
  //       "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
  //     correct_answer: "False",
  //     incorrect_answers: ["True"],
  //     userAnswer: true,
  //     boolCorrect: false,
  //   },
  //   {
  //     category: "General Knowledge",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question:
  //       "&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.",
  //     correct_answer: "True",
  //     incorrect_answers: ["False"],
  //     userAnswer: true,
  //     boolCorrect: true,
  //   },
  //   {
  //     category: "Entertainment: Video Games",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question:
  //       "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
  //     correct_answer: "True",
  //     incorrect_answers: ["False"],
  //     userAnswer: true,
  //     boolCorrect: true,
  //   },
  //   {
  //     category: "Science & Nature",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question: "Scientists can grow teeth from urine.",
  //     correct_answer: "True",
  //     incorrect_answers: ["False"],
  //     userAnswer: true,
  //     boolCorrect: true,
  //   },
  //   {
  //     category: "Science: Mathematics",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question:
  //       "If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.",
  //     correct_answer: "True",
  //     incorrect_answers: ["False"],
  //     userAnswer: true,
  //     boolCorrect: true,
  //   },
  //   {
  //     category: "History",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question: "The Battle of Trafalgar took place on October 23rd, 1805",
  //     correct_answer: "False",
  //     incorrect_answers: ["True"],
  //     userAnswer: true,
  //     boolCorrect: false,
  //   },
  //   {
  //     category: "Geography",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question:
  //       "Switzerland has four national languages, English being one of them.",
  //     correct_answer: "False",
  //     incorrect_answers: ["True"],
  //     userAnswer: true,
  //     boolCorrect: false,
  //   },
  //   {
  //     category: "Entertainment: Books",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question: "Harry Potter was born on July 31st, 1980.",
  //     correct_answer: "True",
  //     incorrect_answers: ["False"],
  //     userAnswer: true,
  //     boolCorrect: true,
  //   },
  //   {
  //     category: "Entertainment: Film",
  //     type: "boolean",
  //     difficulty: "hard",
  //     question:
  //       "The weapon Clint Eastwood uses in &quot;Dirty Harry&quot; was a .44 Automag.",
  //     correct_answer: "False",
  //     incorrect_answers: ["True"],
  //     userAnswer: true,
  //     boolCorrect: false,
  //   },
  // ];
  // results;
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
          {answers.map((answer) =>
            answer.userAnswer === answer.boolCorrect ? (
              <CorrectAnswer key={answer.question}>
                <Icon name="plus" />
                <StyledMarkDown source={answer.question} />
              </CorrectAnswer>
            ) : (
              <WrongAnswer key={answer.question}>
                <Icon name="minus" />
                <StyledMarkDown source={answer.question} />
              </WrongAnswer>
            )
          )}
        </div>
        <ButtonContainer>
          <Button
            content="Play Again?"
            // icon="right arrow"
            // labelPosition="right"
            size="massive"
            onClick={startOver}
          />
        </ButtonContainer>
      </FlexContainer>
    </TriviaLoaded>
  );
};

export default Results;
