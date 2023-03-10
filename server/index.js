const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let database = []

const { getCompliment, getFortune } = require('./controller')
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.post('/fortunes', (req, res) => {
    fortunes.push(req.body)
    res.sendStatus(200)
})


app.listen(4000, () => console.log("Server running on 4000"));
