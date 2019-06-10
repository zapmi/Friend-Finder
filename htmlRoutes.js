const express = require('express');
const path = require('path');
const http = require("http");
const app = express();

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


app.listen(8080);