import { useEffect, useState } from 'react'
import './App.css'
import { fetchAllQuestions, fetchAllAnswers } from './API/fetchFunctions'
import Question from './components/Question';

function App() {

  const [questions, setQuestions] = useState([]);
  const [previousAnswers, setPreviousAnswers] = useState([]);

  useEffect(() => {

    const initialFetch = async () => {
      const questionsData = await fetchAllQuestions();
      const answersData = await fetchAllAnswers();
      setQuestions(questionsData);
      setPreviousAnswers(answersData)
    }

    initialFetch();
  }, [])

  return (
    <>
      <h1>A Voz Do Povo</h1>
      {questions.map((question) => 
      (<Question key={question.question_id} question={question} />))}
    </>
  )
}

export default App
