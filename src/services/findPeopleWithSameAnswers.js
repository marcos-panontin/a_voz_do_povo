
function findPeopleWithSameAnswers(previousAnswers) {
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));

  if (!userAnswers) return;

  const groupedAnswers = {};
  for (const answer of previousAnswers) {
    const userId = answer.user_id;
    if (!groupedAnswers[userId]) {
      groupedAnswers[userId] = [];
    }
    groupedAnswers[userId].push(answer);
  }

  let peopleWithSameAnswers = 0;
  for (const userId in groupedAnswers) {
    const answers = groupedAnswers[userId];
    const allAnswersMatch = answers.every(answer => {
      const question = userAnswers.find(question => question.id === answer.question_id);
      return question.answer === answer.answer;
    });
    if (allAnswersMatch) {
      peopleWithSameAnswers += 1;
    }
  }
  return peopleWithSameAnswers;
}

export default findPeopleWithSameAnswers