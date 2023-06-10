import React from "react";
// Styles
import { Wrapper, ButtonWrapper } from "./QuestionCards.styles";
// Types
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCards: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer, index) => (
        <ButtonWrapper
          correct={userAnswer ? userAnswer?.correctAnswer === answer : false}
          userClicked={userAnswer ? userAnswer?.answer === answer : false}
          key={index}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCards;
