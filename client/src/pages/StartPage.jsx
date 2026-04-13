export default function StartPage(props) {
    return (
        <section className="start-page-content">
            <div className="blob blob-top"></div>
            <div className="blob blob-bottom"></div>
            <h1 className="main-title">Quizzical</h1>
            <p className="main-subheading">Test your knowledge!</p>
            <button onClick={props.startQuiz} className="start-button">Start Quiz</button>
        </section>
    )
}