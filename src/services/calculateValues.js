function calculateValues(previousAnswers, questionId, optionSelected = -1) {
  const filteredAnswersOption0 = previousAnswers.filter((answer) => (answer.question_id === questionId && answer.option_selected === 0)).length;
  const filteredAnswersOption1 = previousAnswers.filter((answer) => (answer.question_id === questionId && answer.option_selected === 1)).length;
  if (optionSelected === 0) {
    return { option0: filteredAnswersOption0 + 1, option1: filteredAnswersOption1 }
  }
  if (optionSelected === 1) {
    return { option0: filteredAnswersOption0, option1: filteredAnswersOption1 + 1 }
  }
  return { option0: filteredAnswersOption0, option1: filteredAnswersOption1}

}

export default calculateValues;