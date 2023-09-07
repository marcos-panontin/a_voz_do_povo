import { useContext } from 'react';
import PreviousAnswersContext from '../context/PreviousAnswersContext';

function QuizResults() {

  const { allAnswered, peopleWithSameAnswers } = useContext(PreviousAnswersContext);

  return (
    <section>QuizResults

          {allAnswered && (
            <section>
        <p>Todas as perguntas foram respondidas!</p>
        <p>{peopleWithSameAnswers} pessoas responderam TODAS as perguntas igual a você!</p>
        </section>
      )}
      </section>
  )
}

export default QuizResults