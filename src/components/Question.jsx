import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { sendAnswerToDB } from '../API/fetchFunctions';
import PreviousAnswersContext from '../context/PreviousAnswersContext';
import calculateValues from '../services/calculateValues';
import sendAnswerToLocalStorage from '../services/sendAnswerToLocalStorage';
import findQuestionInLocalStorage from '../services/findQuestionInLocalStorage';
import checkIfAllQuestionsAreAnswered from '../services/checkIfAllQuestionsAreAnswered';
import findPeopleWithSameAnswers from '../services/findPeopleWithSameAnswers';

function Question({ question }) {
  // State variables for option quantities and question ID
  const [option0Quantity, setOption0Quantity] = useState(0);
  const [option1Quantity, setOption1Quantity] = useState(0);
  const questionId = question.id;

  // Find question data in local storage
  const questionInLocalStorage = findQuestionInLocalStorage(question.id);

  // Get previous answers from context
  const { previousAnswers, setAllAnswered, setPeopleWithSameAnswers } = useContext(PreviousAnswersContext);

  // Effect to update quantities when `questionInLocalStorage.answered` changes
  useEffect(() => {

    // Only run the effect when `questionInLocalStorage.answered` changes
    if (questionInLocalStorage && questionInLocalStorage.answered) {
      const { option0, option1 } = calculateValues(previousAnswers, questionId);
      setOption0Quantity(option0);
      setOption1Quantity(option1);
    }
  }, [questionInLocalStorage, previousAnswers, questionId]);

  // State variable for tracking if the question is answered
  const [answered, setAnswered] = useState(questionInLocalStorage?.answered || false);


  // Function to handle button click and update state and data
  const handleClick = async (optionSelected) => {
    const { option0, option1 } = calculateValues(previousAnswers, questionId, optionSelected);
    setOption0Quantity(option0);
    setOption1Quantity(option1);
    setAnswered(true);

    // Store answer in local storage
    sendAnswerToLocalStorage(questionId, optionSelected);

    // Check if all questions are answered
    if (checkIfAllQuestionsAreAnswered()) {
      setAllAnswered(true);
      setPeopleWithSameAnswers(findPeopleWithSameAnswers(previousAnswers)) ;
    }

    // Send answer to the database
    await sendAnswerToDB(optionSelected, questionId);
  }

  return (
    <article>
      {/* Display the question */}
      <h2>{question.question}</h2>
      
      {!answered && (
        // Display buttons for answering if the question is not answered
        <section>
          <button disabled={previousAnswers.length === 0 ? true : false} onClick={() => handleClick(0)}>{question.option0}</button>
          <button disabled={previousAnswers.length === 0 ? true : false} onClick={() => handleClick(1)}>{question.option1}</button>
        </section>
      )}

      {answered && (
        // Display answer results if the question is answered
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

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    option0: PropTypes.string.isRequired,
    option1: PropTypes.string.isRequired,
    answered: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Question;
