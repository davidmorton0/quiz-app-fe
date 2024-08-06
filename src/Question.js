import { useState } from "react";


export default function Question({ questionText, answers, questionNumber }) {
  const [answered, setAnswered] = useState(false);
  function handleClick() {
    setAnswered(true)
  }

  return (
    <section>
      <fieldset>
        <legend>Question {questionNumber}: {questionText}:</legend>

        {answers.map((answer) => (
          <div>
            <input
              type="radio"
              id={answer}
              name={`question${questionNumber}`}
              value={answer}
              disabled={answered}
            />
            <label for={answer}>{answer}</label>
          </div>
        ))}
      </fieldset>
      <button onClick={handleClick}>Answer</button>
    </section>
  );
}