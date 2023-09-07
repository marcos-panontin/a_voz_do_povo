import { useEffect, useState } from 'react';
import PreviousAnswersContext from './context/PreviousAnswersContext';
import './App.css';
import { fetchAllAnswers } from './API/fetchFunctions';
import { questions } from './data/questions';
import Question from './components/Question';
import getUserToken from './services/getUserToken';

function App() {

  const [previousAnswers, setPreviousAnswers] = useState([]);

  useEffect(() => {

    const initialFetch = async () => {
      const answersData = await fetchAllAnswers();
      setPreviousAnswers(answersData)
    }

    initialFetch();
    getUserToken();
  }, [])

  return (
    <>
      <PreviousAnswersContext.Provider value={{ previousAnswers }}>
        <h1>A Voz Do Povo</h1>
        {questions.map((question) => 
        (<Question key={question.question} question={question} />))}
      </PreviousAnswersContext.Provider>
    </>
  )
}

export default App
