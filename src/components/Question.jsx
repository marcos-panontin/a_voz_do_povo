import { useState } from 'react'
import { fetchAllAnswersById, sendAnswerToDB } from '../API/fetchFunctions';

function Question({ question }) {

  const [answered, setAnswered] = useState(false);
  const [option0Quantity, setOption0Quantity] = useState(0);
  const [option1Quantity, setOption1Quantity] = useState(0);

  const questionId = question.question_id;

  
  const handleClick = async (optionSelected) => {

    // await sendAnswerToDB(optionSelected, questionId)
    const response = await fetchAllAnswersById(questionId);
    setAnswered(true);
    const { count_option_0, count_option_1 } = response.message;
    setOption0Quantity(count_option_0);
    setOption1Quantity(count_option_1);
  }

  return (
    <article>
      <h2>{question.question}</h2>
      {!answered &&
      <section>
        <button onClick={() => handleClick(0)}>{question.option0}</button>
        <button onClick={() => handleClick(1)}>{question.option1}</button>
      </section>
    }

      {answered && (
        <>
        <section className='flex'>
        <p>{question.option0} { option0Quantity }</p>
        <p>{question.option1} { option1Quantity }</p>
        </section>
        <p>Total de respostas: { Number(option0Quantity) + Number(option1Quantity) }</p>
        </>

      )}
    </article>
  )
}

export default Question;