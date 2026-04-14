import express from "express";
import cors from "cors";
import questionsRouter from "./routes/questions.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/questions", questionsRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});