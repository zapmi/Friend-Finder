var friends = require('../data/friends.js');
var express = require("express");
var bodyParser = require("body-parser");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var scoresArray = [];
        for(var i=0; i < req.body.scores.length; i++){
            scoresArray.push( parseInt(req.body.scores[i]) )
          }
          newFriend.scores = scoresArray;
        // var userScore = req.body.scores;
        
        // var bestMatch = 0;

        var scoreComparision = [];
        for (var i = 0; i < friends.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriend.scores[j])));
            }
            scoreComparision.push(scoreDiff);

        }
        let pairedUser = 0;
        for (var i = 1; i < scoreComparision.length; i++) {
            if (scoreComparision[i] <= scoreComparision[pairedUser]) {
                pairedUser = i;
            }
        }


        let bestFriendMatch = friends[pairedUser];
        res.json(bestFriendMatch);
        friends.push(newFriend);


    });

};

