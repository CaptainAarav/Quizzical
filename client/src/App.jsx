import React from 'react'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'

export default function App() {
    const [page, setPage] = React.useState("startPage")
    const [selected, setSelected] = React.useState({
        questionOne: "",
        questionTwo: "",
        questionThree: "",
        questionFour: "",
        questionFive: "",
    })

    function startQuiz()  {
        setPage("quizPage")
    }

    return (
        <>
            {page === "startPage" ? <StartPage startQuiz={startQuiz} /> : page === "quizPage" ? <QuizPage selected={selected} setSelected={setSelected} /> : <ResultsPage selected={selected} setSelected={setSelected} />}
        </>
    )
}