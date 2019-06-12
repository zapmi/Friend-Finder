var friendsData = require('../data/friends');

module.exports = function(app){
  
    app.get('/api/friends', function (req, res){
        res.json(friendsData);
    });

    $.post("/api/friends", newCharacter)
    .then(function (data) {
        console.log(data);
        alert("Adding character...");
    });

}


// // Displays a single character, or returns false
// app.get("/api/friends", function (req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < friends.length; i++) {
//         if (chosen === friends[i].routeName) {
//             return res.json(friends[i]);
//         }
//     }

//     return res.json(false);
// });


// // Create New Characters - takes in JSON input
// app.post("/api/friends", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newcharacter = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newcharacter);

//     friends.push(newcharacter);

//     res.json(newcharacter);
// });



