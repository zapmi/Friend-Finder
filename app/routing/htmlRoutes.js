let express = require('express');
let path = require('path');
let http = require("http");
let app = express();


module.exports = function(app){

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    // app.listen(8080);

};