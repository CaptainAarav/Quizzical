import { Router } from 'express'
import he from 'he'

const router = Router()

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

router.get("/", async (req, res) => {
    const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    const data = await response.json()

    if (data.response_code !== 0) {
        return res.status(503).json({ error: "Failed to fetch questions, try again shortly" })
    }

    const questions = data.results.map(dataSection => {
        return {
            question: he.decode(dataSection.question),
            options: shuffle([...dataSection.incorrect_answers, dataSection.correct_answer].map(he.decode)),
            correctAnswer: he.decode(dataSection.correct_answer),
        }
    })

    res.end(JSON.stringify(questions))
})

export default router