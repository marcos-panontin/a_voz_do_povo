function sendAnswerToLocalStorage(questionId, optionSelected) {
  const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
  const questionIndex = userAnswers.findIndex((question) => question.id === questionId);
  userAnswers[questionIndex].answered = true;
  userAnswers[questionIndex].answeredOption = optionSelected;
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}

export default sendAnswerToLocalStorage;