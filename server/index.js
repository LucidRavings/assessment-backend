const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getCompliment, getFortune, postFortune, putFortune, deleteFortune, listFortune } = require('./controller')
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.post("/api/fortune", postFortune);
app.put("/api/fortune", putFortune)
app.delete("/api/fortune", deleteFortune)
app.get("/api/listFortune", listFortune)

app.listen(4000, () => console.log("Server running on 4000"));
