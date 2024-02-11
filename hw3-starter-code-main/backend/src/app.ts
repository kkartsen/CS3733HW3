import express from 'express';
import example from "./routes/example";
import languageRequest from "./routes/languageRequest";

const app = express();

app.use(express.json());

app.use("/api/request", languageRequest);

app.listen(3001, () => {
    console.log("started");
});

export default app;