import React from 'react'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'

export default async function App() {
    const [page, setPage] = React.useState("startPage")
    const [selected, setSelected] = React.useState({})

    const response = await fetch("http://localhost:3000/questions")
    const data = await response.json()

    function startQuiz()  {
        setPage("quizPage")
    }

    return (
        <>
            {page === "startPage" ? <StartPage startQuiz={startQuiz} /> : page === "quizPage" ? <QuizPage data={data} setPage={setPage} selected={selected} setSelected={setSelected} /> : <ResultsPage data={data} selected={selected} setSelected={setSelected} />}
        </>
    )
}