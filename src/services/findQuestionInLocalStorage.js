
function findQuestionInLocalStorage(id) {
  const userAnswers = JSON.parse(localStorage.getItem('userAnswers'))
  if (!userAnswers) return;
  const question = userAnswers.find(question => question.id === id)
  return question
}

export default findQuestionInLocalStorage