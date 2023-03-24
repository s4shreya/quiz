import { useState } from "react";

import styles from './DisplayedQuestion.module.css';

const DisplayedQuestion = (props) => {
    const [ optionSelected, setOptionSelected ] = useState("");

  const question = props.displayQuestion;

  const nextQuestion = () => {
    props.handleNextQuestion();
  };
  const previousQuestion = () => {
    props.handlePreviousQuestion();
  };
  const handleSubmitQuiz = () => {
    props.submitQuiz();
  };
  const handleOptionSelection = (e) => {
    setOptionSelected(question.options[e.target.value].answer)
    props.optionSelected(question.no, e.target.value);
  };

  return (
    <div>
      <p>
        Q.{question.no} {question.text}
      </p>
      <ol>
        {question.options.map((option, i) => {
            console.log("answers submitted" + props.answersSubmitted);
          return (
            <li key={i} className={props.answersSubmitted && option.correct ? styles.selected : styles.option}
            >
              <label htmlFor={option.answer}>
              {option.answer}</label>
              <input
                type="radio"
                id={option.answer}
                value={i}
                name={question.no}
                checked={optionSelected === option.answer}
                onChange={handleOptionSelection}
              />
            </li>
          );
        })}
        {props.currentQuestion > 0 ? (
          <button onClick={previousQuestion}>Previous</button>
        ) : (
          ""
        )}
        {props.currentQuestion !== 4 ? (
          <button onClick={nextQuestion}>Next</button>
        ) : (
          <button onClick={handleSubmitQuiz}>Submit</button>
        )}
      </ol>
    </div>
  );
};

export default DisplayedQuestion;
