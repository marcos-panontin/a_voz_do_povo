import { useEffect, useState } from 'react';
import PreviousAnswersContext from './context/PreviousAnswersContext';
import './App.css';
import { fetchAllAnswers } from './API/fetchFunctions';
import { questions } from './data/questions';
import Question from './components/Question';
import getUserToken from './services/getUserToken';
import getUserAnswersOnPageLoad from './services/getUserAnswersOnPageLoad';
import QuizResults from './components/QuizResults';
import checkIfAllQuestionsAreAnswered from './services/checkIfAllQuestionsAreAnswered';
import findPeopleWithSameAnswers from './services/findPeopleWithSameAnswers';

function App() {

  const [previousAnswers, setPreviousAnswers] = useState([]);
  const [allAnswered, setAllAnswered] = useState(checkIfAllQuestionsAreAnswered() || false);
  const [peopleWithSameAnswers, setPeopleWithSameAnswers] = useState(findPeopleWithSameAnswers(previousAnswers) || 0);

  useEffect(() => {

    const initialFetch = async () => {
      const answersData = await fetchAllAnswers();
      setPreviousAnswers(answersData)
    }

    initialFetch();
    getUserToken();
    getUserAnswersOnPageLoad();
  }, [])

  return (
    <main className='flex flex-col items-center'>
      <PreviousAnswersContext.Provider value={{ previousAnswers, allAnswered, setAllAnswered, peopleWithSameAnswers, setPeopleWithSameAnswers  }}>
        <h1 className='text-5xl text-blue-800'>A Voz Do Povo</h1>
        {questions.map((question) => 
          (<Question key={question.question} question={question} />))}
        <QuizResults />
      </PreviousAnswersContext.Provider>
    </main>
  )
}

export default App
