export default function ResultsPage({ setNewGame, data, selected, setPage }) {
    console.log(data)
    console.log(selected)

    const isCorrect = []
    let score = 0

    for (let i = 0; i < data.length; i++) {
        if (selected["question-" + (i + 1)] === data[i].correctAnswer) {
            score++
            isCorrect.push(true)
        }
        else {
            isCorrect.push(false)
        }
    }

    function restartGame() {
        setNewGame(prev => !prev)
        setPage("quizPage")
    }

    function getAnswerClass(option, selectedAnswer, correctAnswer) {
        if (option === correctAnswer) {
            return "correct"
        }

        if (option === selectedAnswer && option !== correctAnswer) {
            return "incorrect"
        }

        return "irrelevant"
    }

    return (
        <>
            <div className="blob blob-top-quiz"></div>
            <div className="blob blob-bottom-quiz"></div>
            <div className="quiz-page-content">
                <div className="quiz-page-questions">
                    {data.map((question, index) => {
                        const questionNumber = index + 1
                        const questionKey = "question-" + questionNumber
                        const selectedAnswer = selected[questionKey]
                        const correctAnswer = question.correctAnswer

                        return (
                            <section key={index} className="question-section">
                                <h2 className="question-text">{question.question}</h2>
                                <form className="question-form">

                                    <input
                                        disabled
                                        className="answer-input"
                                        type="radio"
                                        id={"question-" + questionNumber + "-a"}
                                        name={"question-" + questionNumber}
                                        value={question.options[0]}
                                        readOnly
                                    />

                                    <label
                                        className={"answer-label " + getAnswerClass(question.options[0], selectedAnswer, correctAnswer)}
                                        htmlFor={"question-" + questionNumber + "-a"}
                                    >
                                        {question.options[0]}
                                    </label>

                                    <input
                                        disabled
                                        className="answer-input"
                                        type="radio"
                                        id={"question-" + questionNumber + "-b"}
                                        name={"question-" + questionNumber}
                                        value={question.options[1]}
                                        readOnly
                                    />

                                    <label
                                        className={"answer-label " + getAnswerClass(question.options[1], selectedAnswer, correctAnswer)}
                                        htmlFor={"question-" + questionNumber + "-b"}
                                    >
                                        {question.options[1]}
                                    </label>

                                    <input
                                        disabled
                                        className="answer-input"
                                        type="radio"
                                        id={"question-" + questionNumber + "-c"}
                                        name={"question-" + questionNumber}
                                        value={question.options[2]}
                                        readOnly
                                    />

                                    <label
                                        className={"answer-label " + getAnswerClass(question.options[2], selectedAnswer, correctAnswer)}
                                        htmlFor={"question-" + questionNumber + "-c"}
                                    >
                                        {question.options[2]}
                                    </label>

                                    <input
                                        disabled
                                        className="answer-input"
                                        type="radio"
                                        id={"question-" + questionNumber + "-d"}
                                        name={"question-" + questionNumber}
                                        value={question.options[3]}
                                        readOnly
                                    />

                                    <label
                                        className={"answer-label " + getAnswerClass(question.options[3], selectedAnswer, correctAnswer)}
                                        htmlFor={"question-" + questionNumber + "-d"}
                                    >
                                        {question.options[3]}
                                    </label>

                                </form>
                            </section>
                        )
                    })}
                </div>
                <p>{`You scored ${score}/5 correct answers`}</p>
                <button onClick={restartGame} className="submit-btn">Play again</button>
            </div>
        </>
    )
}