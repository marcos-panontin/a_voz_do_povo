import { useContext } from 'react';
import PreviousAnswersContext from '../context/PreviousAnswersContext';

function QuizResults() {

  const { allAnswered, peopleWithSameAnswers } = useContext(PreviousAnswersContext);

  return (
    <>
      {allAnswered && (
              <section>
              <section>
          <p>Todas as perguntas foram respondidas!</p>
          <p>{peopleWithSameAnswers} pessoas deram as mesmas respostas que você para TODAS as perguntas!</p>
          </section>
        </section>
        )}
    </>
)
}

export default QuizResults