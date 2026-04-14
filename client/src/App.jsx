import React from 'react'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'

export default function App() {
    const [page, setPage] = React.useState("startPage")
    const [selected, setSelected] = React.useState({})
    const [data, setData] = React.useState([])
    const [newGame, setNewGame] = React.useState(false)

    React.useEffect(() => {
        setSelected({})
        fetch("http://localhost:3000/questions")
            .then(res => res.json())
            .then(json => setData(json))
    }, [newGame])

    function startQuiz()  {
        setPage("quizPage")
    }

    return (
        <>
            {page === "startPage" ? <StartPage startQuiz={startQuiz} /> : page === "quizPage" ? <QuizPage data={data} setPage={setPage} selected={selected} setSelected={setSelected} /> : <ResultsPage setNewGame={setNewGame} data={data} selected={selected} setPage={setPage} />}
        </>
    )
}