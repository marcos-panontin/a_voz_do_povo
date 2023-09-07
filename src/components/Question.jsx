import { useState, useContext } from 'react'
import { sendAnswerToDB } from '../API/fetchFunctions';
import PreviousAnswersContext from '../context/PreviousAnswersContext';
import calculateValues from '../services/calculateValues';

function Question({ question }) {

  const { previousAnswers } = useContext(PreviousAnswersContext);
  console.log(previousAnswers);

  const [answered, setAnswered] = useState(false);
  const [option0Quantity, setOption0Quantity] = useState(0);
  const [option1Quantity, setOption1Quantity] = useState(0);

  const questionId = question.id;
  
  const handleClick = async (optionSelected) => {

    const { option0, option1 } = calculateValues(previousAnswers, questionId, optionSelected);
    setOption0Quantity(option0);
    setOption1Quantity(option1);
    setAnswered(true);

    await sendAnswerToDB(optionSelected, questionId)

  }

  return (
    <article>
      <h2>{question.question}</h2>
      {!answered &&
      <section>
        <button disabled={previousAnswers.length === 0 ? true : false} onClick={() => handleClick(0)}>{question.option0}</button>
        <button disabled={previousAnswers.length === 0 ? true : false} onClick={() => handleClick(1)}>{question.option1}</button>
      </section>
    }

      {answered && (
        <>
        <section className='flex'>
        <p>{question.option0} { option0Quantity }</p>
        <p>{question.option1} { option1Quantity }</p>
        </section>
        <p>Total de respostas: { option0Quantity + option1Quantity }</p>
        </>

      )}
    </article>
  )
}

export default Question;