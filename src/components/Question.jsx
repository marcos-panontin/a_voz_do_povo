import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { sendAnswerToDB } from '../API/fetchFunctions';
import PreviousAnswersContext from '../context/PreviousAnswersContext';
import calculateValues from '../services/calculateValues';
import sendAnswerToLocalStorage from '../services/sendAnswerToLocalStorage';
import findQuestionInLocalStorage from '../services/findQuestionInLocalStorage';
import checkIfAllQuestionsAreAnswered from '../services/checkIfAllQuestionsAreAnswered';
import findPeopleWithSameAnswers from '../services/findPeopleWithSameAnswers';
import Counter from './Counter';
import ProgressBar2D from './ProgressBar2D';

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
  const [buttonClicked, setButtonClicked] = useState(
    questionInLocalStorage?.answeredOption !== undefined ? questionInLocalStorage.answeredOption : null
  );

  // Function to handle button click and update state and data
  const handleClick = async (optionSelected) => {
    if (buttonClicked === null) {
      const { option0, option1 } = calculateValues(previousAnswers, questionId, optionSelected);
      setOption0Quantity(option0);
      setOption1Quantity(option1);
      setAnswered(true);
      setButtonClicked(optionSelected);

      // Store answer in local storage
      sendAnswerToLocalStorage(questionId, optionSelected);

      // Check if all questions are answered
      if (checkIfAllQuestionsAreAnswered()) {
        setAllAnswered(true);
        setPeopleWithSameAnswers(findPeopleWithSameAnswers(previousAnswers));
      }

      // Send answer to the database
      await sendAnswerToDB(optionSelected, questionId);
    }
  };

  return (
    <article>
      {/* Display the question */}
      <h2 className="mt-10 mb-2">{question.question}</h2>

      <section className="flex items-center justify-center gap-4">
        <button
          className={`button w-40 h-10 bg-blue-500 rounded-lg select-none text-white font-bold border-b-[1px] border-blue-400
            ${
              buttonClicked === 0
                ? 'bg-blue-600 translate-y-2 transition-all duration-150'
                : '[box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] '
            }`}
          disabled={previousAnswers.length === 0 || buttonClicked !== null}
          onClick={() => handleClick(0)}
        >
          {question.option0}
        </button>

        <button
          className={`button w-40 h-10 bg-blue-500 rounded-lg select-none text-white font-bold border-b-[1px] border-blue-400
            ${
              buttonClicked === 1
                ? 'bg-blue-600 translate-y-2 transition-all duration-150 border-b-[1px] [box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]'
                : '[box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] '
            }`}
          disabled={previousAnswers.length === 0 || buttonClicked !== null}
          onClick={() => handleClick(1)}
        >
          {question.option0}
        </button>
      </section>
    </article>
  );
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
