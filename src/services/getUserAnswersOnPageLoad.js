import { questions } from "../data/questions"

function getUserAnswersOnPageLoad() {
  const userAnswers = JSON.parse(localStorage.getItem('userAnswers'))
  if (!userAnswers) {
    localStorage.setItem('userAnswers', JSON.stringify(questions))
  } 
}

export default getUserAnswersOnPageLoad;