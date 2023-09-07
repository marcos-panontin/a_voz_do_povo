
function findPeopleWithSameAnswers(previousAnswers) {
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));

  if (!userAnswers) return;
  const peopleWithSameAnswers = userAnswers.filter((user) => {
    const userAnswers = user.answers;
    const userAnswersLength = userAnswers.length;
    let sameAnswers = 0;
    for (let index = 0; index < userAnswersLength; index += 1) {
      if (userAnswers[index].answeredOption === previousAnswers[index].answeredOption) {
        sameAnswers += 1;
      }
    }
    return sameAnswers === userAnswersLength;
  });
  return peopleWithSameAnswers;
}

export default findPeopleWithSameAnswers