import propTypes from 'prop-types'

function ButtonsContainer({buttonClicked, previousAnswers, question, handleClick}) {
  return (
    <section className="flex items-center justify-center gap-4 mb-10">
        <button
          className={`button w-40 h-10 bg-blue-500 rounded-lg select-none text-white font-bold border-b-[1px] border-blue-400
            ${
              buttonClicked === 0
                ? 'translate-y-2 transition-all duration-150 glow'
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
                ? 'translate-y-2 transition-all duration-150 glow'
                : '[box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] '
            }`}
          disabled={previousAnswers.length === 0 || buttonClicked !== null}
          onClick={() => handleClick(1)}
        >
          {question.option1}
      </button>

     
  {/* <div className="max-w-7xl mx-auto">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <div className="space-y-2">
          <p className="text-slate-800">Learn</p>
        </div>
      </div>
    </div>
      </div> */}



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