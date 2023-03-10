const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getCompliment, getFortune } = require('./controller')
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
// const { getFortune } = require('./controller')


app.listen(4000, () => console.log("Server running on 4000"));
