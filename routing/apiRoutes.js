var friendData = require("../app/data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
        // console.log(friendData);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        var userResponses = newFriend.scores;

        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        for (var i = 0; i < friendData.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                console.log(diff += Math.abs(friendData[i].scores[j] - userResponses[j]));
            }
            scoresArray.push(diff);
        }

    for (var i = 0; i < scoresArray.length; i++) {
        if (scoresArray[i] <= scoresArray[bestMatch]) {
            bestMatch = i;
        }
    }

friendData.push(newFriend);
var bff = friendData[bestMatch];
console.log(bff);
res.json(bff);
    });


}