import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import Quiz from "../../scenes/Quiz";
import { store } from "../../store";
import renderWithRouter from "../../setupTests";

afterEach(cleanup);

const mock = [
  {
    category: "Entertainment: Comics",
    type: "boolean",
    difficulty: "hard",
    question:
      "In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question:
      "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];

describe("", () => {
  it("Shold show Quiz when there is trivia", async () => {
    const { history, getByText } = renderWithRouter(
      <store.Provider value={{ state: { questions: mock } }}>
        <Quiz />
      </store.Provider>,
      { route: "/quiz" }
    );
    expect(history.location.pathname).toEqual("/quiz");
    expect(getByText("Entertainment: Comics")); // first mock question category (shown in quiz)
  });
  it("Should redirect to home page when there is no trivia data passed", async () => {
    const { history } = renderWithRouter(
      <store.Provider value={{ state: { questions: [] } }}>
        <Quiz />
      </store.Provider>,
      { route: "/quiz" }
    );
    expect(history.location.pathname).toEqual("/");
  });
});
