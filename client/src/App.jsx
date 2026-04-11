import React from 'react'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'

export default function App() {
    const [page, setPage] = React.useState("startPage")

    return (
        <>
            {page === "startPage" ? <StartPage /> : page === "quizPage" ? <QuizPage /> : <ResultsPage />}
        </>
    )
}