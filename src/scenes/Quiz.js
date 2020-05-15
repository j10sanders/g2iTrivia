import React, { useContext, useState, useEffect } from "react";
import { store } from "../store";
import { Button, Segment } from "semantic-ui-react";
import { Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";

const mock = [
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question: "Unturned originally started as a Roblox game.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "hard",
    question:
      "&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science & Nature",
    type: "boolean",
    difficulty: "hard",
    question: "Scientists can grow teeth from urine.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Film",
    type: "boolean",
    difficulty: "hard",
    question:
      "&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Entertainment: Board Games",
    type: "boolean",
    difficulty: "hard",
    question:
      "The board game Go has more possible legal positions than the number of atoms in the visible universe.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Celebrities",
    type: "boolean",
    difficulty: "hard",
    question:
      "Lady Gaga&#039;s real name is Stefani Joanne Angelina Germanotta.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "boolean",
    difficulty: "hard",
    question:
      "In the &quot;Kagerou Daze&quot; series, Shintaro Kisaragi is prominently shown with the color red.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Music",
    type: "boolean",
    difficulty: "hard",
    question:
      "The singer Billie Holiday was also known as &quot;Lady Day&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Vehicles",
    type: "boolean",
    difficulty: "hard",
    question: "The term &quot;GTO&quot; was originated by Ferrari?",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question:
      "In &quot;Minecraft&quot;, gold tools are faster than diamond tools.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];

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
  height: 35px;
`;

const QuestionNumber = styled.div`
  font-size: 20px;
`;

const QuestionCard = styled(Segment).attrs({ size: "massive" })`
  height: 200px;
  display: flex;
  align-items: center;
`;

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
  // const { questions } = useContext(store).state;
  // if (questions.length === 0) {
  //   return <Redirect to="/home" />;
  // }
  let history = useHistory();
  useEffect(() => {
    if (questionNumber >= mock.length - 1) {
      history.push("/results");
    }
  }, [questionNumber]);

  const currentQuestion = mock[questionNumber];
  const { category, question } = currentQuestion;

  const answer = (answer) => {
    const currentAnswers = [...questionsAnswered];
    const currentQuestion = mock[questionNumber];
    const newAnswer = { ...currentQuestion, userAnswer: answer };
    currentAnswers[questionNumber] = newAnswer;
    setQuestionsAnswered(currentAnswers);
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <FlexContainer>
      <Header>{category}</Header>
      <Flex1>
        <QuestionCard>{question}</QuestionCard>
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
  );
};

export default Quiz;
