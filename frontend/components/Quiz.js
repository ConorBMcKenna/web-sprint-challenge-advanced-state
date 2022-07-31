import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer, postAnswer } from "../state/action-creators";

function Quiz({ quiz, fetchQuiz, selectAnswer, selected, postAnswer }) {
  useEffect(() => {
    if(quiz) return
    fetchQuiz();
  }, []);
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              {quiz.answers.map((answer) => {
                return (
                  <div
                    className={
                      answer.answer_id === selected
                        ? "answer selected"
                        : "answer"
                    }
                    onClick={() => {
                      selectAnswer(answer.answer_id);
                    }}
                  >
                    {answer.text}
                    <button>
                      {answer.answer_id === selected ? "SELECTED" : "Select"}
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              id="submitAnswerBtn"
              onClick={() => {
                postAnswer(quiz.quiz_id, selected);
              }}
              disabled={!selected}
            >
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selected: state.selectedAnswer,
  };
};

export default connect(
  mapStateToProps,
  { fetchQuiz, selectAnswer, postAnswer } // same as { updateTitle: updateTitle }
)(Quiz);
