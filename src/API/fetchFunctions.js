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
console.log('entrou na send');
  const requisitionBody = {
    questionId,
    optionSelected,
    userId: 'marcos'
}
  
  const data = await fetch(`${BASE_URL}/answers`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requisitionBody),
  });
  console.log(data);
  const response = await data.json();
  console.log(response);
}