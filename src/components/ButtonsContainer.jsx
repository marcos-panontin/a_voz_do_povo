import propTypes from 'prop-types'

function ButtonsContainer({buttonClicked, previousAnswers, question, handleClick}) {
  return (
      <section className="flex items-center justify-center gap-4 mb-10">
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
          {question.option1}
        </button>
      </section>
  )
}

ButtonsContainer.propTypes = {
  buttonClicked: propTypes.number.isRequired,
  previousAnswers: propTypes.array.isRequired,
  question: propTypes.shape({
    id: propTypes.number.isRequired,
    question: propTypes.string.isRequired,
    option0: propTypes.string.isRequired,
    option1: propTypes.string.isRequired,
    answered: propTypes.bool.isRequired,
  }).isRequired,
  handleClick: propTypes.func.isRequired,
}

export default ButtonsContainer