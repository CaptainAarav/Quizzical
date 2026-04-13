import { Router } from 'express'

const router = Router()

router.get("/", (req, res) => {
    res.send("Questions")
})

export default router