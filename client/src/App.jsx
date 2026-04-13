import React from 'react'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'

export default function App() {
    const [page, setPage] = React.useState("startPage")

    function startQuiz()  {
        setPage("quizPage")
    }

    return (
        <>
            {page === "startPage" ? <StartPage startQuiz={startQuiz} /> : page === "quizPage" ? <QuizPage /> : <ResultsPage />}
        </>
    )
}