export default function QuizPage({ data, setPage, selected, setSelected }) {
    const allSelected = Object.keys(selected).length === 5

    function handleFormSubmit() {
        if (allSelected === false) return
        setPage("resultsPage")
    }

    return (
        <>
        <div className="blob blob-top-quiz"></div>
        <div className="blob blob-bottom-quiz"></div>
        <div className="quiz-page-content">
            <div className="quiz-page-questions">
                {data.map((question, index) => {
                    const questionNumber = index + 1
                    return (
                        <section key={index} className="question-section">
                            <h2 className="question-text">{question.question}</h2>
                            <form className="question-form">

                                <input className="answer-input" type="radio" id={"question-" + questionNumber + "-a"} name={"question-" + questionNumber} value={question.options[0]} onChange={(e) => setSelected(prev => ({ ...prev, ["question-" + questionNumber]: e.target.value }))}/>
                                <label className="answer-label" htmlFor={"question-" + questionNumber + "-a"}>{question.options[0]}</label>

                                <input className="answer-input" type="radio" id={"question-" + questionNumber + "-b"} name={"question-" + questionNumber} value={question.options[1]} onChange={(e) => setSelected(prev => ({ ...prev, ["question-" + questionNumber]: e.target.value }))}/>
                                <label className="answer-label" htmlFor={"question-" + questionNumber + "-b"}>{question.options[1]}</label>

                                <input className="answer-input" type="radio" id={"question-" + questionNumber + "-c"} name={"question-" + questionNumber} value={question.options[2]} onChange={(e) => setSelected(prev => ({ ...prev, ["question-" + questionNumber]: e.target.value }))}/>
                                <label className="answer-label" htmlFor={"question-" + questionNumber + "-c"}>{question.options[2]}</label>

                                <input className="answer-input" type="radio" id={"question-" + questionNumber + "-d"} name={"question-" + questionNumber} value={question.options[3]} onChange={(e) => setSelected(prev => ({ ...prev, ["question-" + questionNumber]: e.target.value }))}/>
                                <label className="answer-label" htmlFor={"question-" + questionNumber + "-d"}>{question.options[3]}</label>

                            </form>
                        </section>
                    )
                })}
            </div>
            <button onClick={handleFormSubmit} disabled={!allSelected} className={"submit-btn" + (allSelected ? "" : " disabled")}>Check Answers</button>
        </div>
        </>
    )
}