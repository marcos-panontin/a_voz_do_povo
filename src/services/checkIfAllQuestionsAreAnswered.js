
function checkIfAllQuestionsAreAnswered() {
  const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
return userAnswers.every((question) => question.answered === true);
}

export default checkIfAllQuestionsAreAnswered;