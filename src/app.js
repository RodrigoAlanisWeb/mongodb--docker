const express = require("express");
const app = express();

const db = require("./db");

app.set("port", process.env.PORT || 3000);

app.get("/",(req,res) => {
    res.json({"msg":"app docker compose"})
});

app.listen(app.get("port"),() => {
    console.log(`Server On Port ${app.get("port")}`);
})