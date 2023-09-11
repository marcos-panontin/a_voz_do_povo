import ProgressBar2D from './ProgressBar2D';
import Counter from './Counter';
import propTypes from 'prop-types';

function QuestionResult({ option0Quantity, option1Quantity, question }) {
  
  const progressPercentage = option0Quantity > option1Quantity ? option0Quantity / (option0Quantity + option1Quantity) * 100 : option1Quantity / (option0Quantity + option1Quantity) * 100;

  const winningOption = option0Quantity > option1Quantity ? 'option0' : 'option1';

  return (
    <article className='flex flex-col items-center'>

      <p>A voz do povo diz:</p>
      <p>{ question[`${winningOption}Text`] }</p>
      
        <p>
          <Counter n={isNaN(progressPercentage) ? 0 : progressPercentage} />
        %
        </p>
          <ProgressBar2D 
            winningOption={winningOption} 
            progressPercentage={progressPercentage} />
          <p className='text-xs'>
            <Counter n={option0Quantity + option1Quantity} />
            <span> pessoas responderam</span>
          </p>
        </article>
  )
}

QuestionResult.propTypes = {
  option0Quantity: propTypes.number.isRequired,
  option1Quantity: propTypes.number.isRequired,
  question: propTypes.shape({
    id: propTypes.number.isRequired,
    question: propTypes.string.isRequired,
    option0: propTypes.string.isRequired,
    option1: propTypes.string.isRequired,
    answered: propTypes.bool.isRequired,
  }).isRequired,
}

export default QuestionResult;