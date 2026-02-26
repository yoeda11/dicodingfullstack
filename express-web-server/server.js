import express from "express";

const app = express();
const port = 3000;
const host = "localhost";

app.listen(port, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})



