const BASE_URL = 'https://a-voz-do-povo-api.onrender.com'

export const fetchAllQuestions = async () => {
  const data = await fetch(`${BASE_URL}/questions`);
  const questions = await data.json();
  return questions;
}

export const fetchAllAnswers = async () => {
  const data = await fetch(`${BASE_URL}/answers`);
  const response = await data.json();
  return response;
}

export const fetchAllAnswersById = async (id) => {
  const data = await fetch(`${BASE_URL}/answers/${id}`);
  const response = await data.json();
  return response;
}

export const sendAnswerToDB = async (optionSelected, questionId) => {

  const userToken = localStorage.getItem('userToken');

  const requisitionBody = {
    questionId,
    optionSelected,
    userId: userToken
}
  
  const data = await fetch(`${BASE_URL}/answers`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requisitionBody),
  });
  const response = await data.json();
  console.log(response);
}