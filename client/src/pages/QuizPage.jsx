

export default function QuizPage({ setPage, selected, setSelected }) {
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
                <section className="question-section">
                    <h2 className="question-text">How would one say goodbye in Spanish?</h2>
                    <form className="question-form">

                        <input className="answer-input" type="radio" id="question-one-a" name="question-one" value="Adiós" onChange={(e) => setSelected(prev => ({ ...prev, "question-one": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-one-a">Adiós</label>

                        <input className="answer-input" type="radio" id="question-one-b" name="question-one" value="Hola" onChange={(e) => setSelected(prev => ({ ...prev, "question-one": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-one-b">Hola</label>

                        <input className="answer-input" type="radio" id="question-one-c" name="question-one" value="Au Revoir" onChange={(e) => setSelected(prev => ({ ...prev, "question-one": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-one-c">Au Revoir</label>

                        <input className="answer-input" type="radio" id="question-one-d" name="question-one" value="Salir" onChange={(e) => setSelected(prev => ({ ...prev, "question-one": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-one-d">Salir</label>

                    </form>
                </section>
                <section className="question-section">
                    <h2 className="question-text">Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h2>
                    <form className="question-form">

                        <input className="answer-input" type="radio" id="question-two-a" name="question-two" value="Adiós" onChange={(e) => setSelected(prev => ({ ...prev, "question-two": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-two-a">Adiós</label>

                        <input className="answer-input" type="radio" id="question-two-b" name="question-two" value="Hola" onChange={(e) => setSelected(prev => ({ ...prev, "question-two": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-two-b">Hola</label>

                        <input className="answer-input" type="radio" id="question-two-c" name="question-two" value="Au Revoir" onChange={(e) => setSelected(prev => ({ ...prev, "question-two": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-two-c">Au Revoir</label>

                        <input className="answer-input" type="radio" id="question-two-d" name="question-two" value="Salir" onChange={(e) => setSelected(prev => ({ ...prev, "question-two": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-two-d">Salir</label>

                    </form>
                </section>
                <section className="question-section">
                    <h2 className="question-text">What is the hottest planet in our Solar System?</h2>
                    <form className="question-form">

                        <input className="answer-input" type="radio" id="question-three-a" name="question-three" value="Adiós" onChange={(e) => setSelected(prev => ({ ...prev, "question-three": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-three-a">Adiós</label>

                        <input className="answer-input" type="radio" id="question-three-b" name="question-three" value="Hola" onChange={(e) => setSelected(prev => ({ ...prev, "question-three": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-three-b">Hola</label>

                        <input className="answer-input" type="radio" id="question-three-c" name="question-three" value="Au Revoir" onChange={(e) => setSelected(prev => ({ ...prev, "question-three": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-three-c">Au Revoir</label>

                        <input className="answer-input" type="radio" id="question-three-d" name="question-three" value="Salir" onChange={(e) => setSelected(prev => ({ ...prev, "question-three": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-three-d">Salir</label>

                    </form>
                </section>
                <section className="question-section">
                    <h2 className="question-text">In which country was the caesar salad invented?</h2>
                    <form className="question-form">

                        <input className="answer-input" type="radio" id="question-four-a" name="question-four" value="Adiós" onChange={(e) => setSelected(prev => ({ ...prev, "question-four": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-four-a">Adiós</label>

                        <input className="answer-input" type="radio" id="question-four-b" name="question-four" value="Hola" onChange={(e) => setSelected(prev => ({ ...prev, "question-four": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-four-b">Hola</label>

                        <input className="answer-input" type="radio" id="question-four-c" name="question-four" value="Au Revoir" onChange={(e) => setSelected(prev => ({ ...prev, "question-four": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-four-c">Au Revoir</label>

                        <input className="answer-input" type="radio" id="question-four-d" name="question-four" value="Salir" onChange={(e) => setSelected(prev => ({ ...prev, "question-four": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-four-d">Salir</label>

                    </form>
                </section>
                <section className="question-section">
                    <h2 className="question-text">How Many Hearts Does An Octopus Have?</h2>
                    <form className="question-form">

                        <input className="answer-input" type="radio" id="question-five-a" name="question-five" value="Adiós" onChange={(e) => setSelected(prev => ({ ...prev, "question-five": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-five-a">Adiós</label>

                        <input className="answer-input" type="radio" id="question-five-b" name="question-five" value="Hola" onChange={(e) => setSelected(prev => ({ ...prev, "question-five": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-five-b">Hola</label>

                        <input className="answer-input" type="radio" id="question-five-c" name="question-five" value="Au Revoir" onChange={(e) => setSelected(prev => ({ ...prev, "question-five": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-five-c">Au Revoir</label>

                        <input className="answer-input" type="radio" id="question-five-d" name="question-five" value="Salir" onChange={(e) => setSelected(prev => ({ ...prev, "question-five": e.target.value }))}/>
                        <label className="answer-label" htmlFor="question-five-d">Salir</label>

                    </form>
                </section>
            </div>
            <button onClick={handleFormSubmit} disabled={!allSelected} className={"submit-btn" +  (allSelected ? "" : " disabled")}>Check Answers</button>
        </div>
        </>
    )
}