const express = require('express');
const path = require('path');
const http = require("http");
const app = express();


module.exports = function(app){

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    // app.listen(8080);

};