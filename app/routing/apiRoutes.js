var friends = require('../data/friends');
var express = require("express");
var bodyParser = require("body-parser");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // var newcharacter = req.body;
        // console.log(newcharacter);
        var bestMatch = {
            name: "",
            photo: "",
            difference: 1000

        };
        var totalDiff = 0;

        var userData = req.body;
        console.log(userData);

        var userScores = userData.scores;
        console.log(userScores);
        var userName = userData.name;
        console.log(userName);
        var userPicture = userData.photo;
        console.log(userPicture);

var stringScore = userScores.map(function(item) {
    return parseInt(item, 10);
});

userData = {
    "name": req.body.name,
    "photo": req.body.photo,
    "score": stringScore
}

var sum = stringScore.reduce((a,b) => a +b, 0);

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDiff = 0;

            var friendsScore = friends[i].scores.reduce((a,b) => a +b, 0);
            totalDiff += Math.abs(sum - friendsScore);

                if (totalDiff <= bestMatch.difference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = totalDiff;
                }
            
        }


        friends.push(userData);

        res.json(bestMatch);


    });

};

