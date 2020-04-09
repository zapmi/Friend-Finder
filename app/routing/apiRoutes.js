var friends = require('../data/friends');
var express = require("express");
var bodyParser = require("body-parser");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let userScore = req.body.scores;
        let scoresArray = [];
        let bestMatch = 0;


        for (var i = 0; i < friends.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff += parseInt((Math.abs(friends[i].scores[j]) - userScore));
            }
            scoresArray.push(scoreDiff);
        }


        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        let pairedUser = friends[bestMatch];
        res.json(pairedUser);
        friends.push(req.body);


    });

};

