   // ===============================================================================
   // LOAD DATA
   // ===============================================================================

   var friends = require("../data/friends.js");

   var friendsArray = exports.friendsArray;

   // ===============================================================================
   // ROUTING
   // ===============================================================================

   module.exports = function(app) {
     // API GET Requests
     // Below code handles when users "visit" a page.
     // In each of the below cases when a user visits a link
     // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
     // ---------------------------------------------------------------------------

     app.get("/api/data/friends", function(req, res) {
       res.json(friendsArray);
     });

     app.post("/api/data/friends", function(req, res) {
       var bestMatch = {
         name: "",
         photo: "",
         bestDiff : 1000
       };

       var userData = req.body;
       var userScores = userData.scores;

       var totalDifference;

       for (var i = 0; i < friends.length; i++) {
         var currentFriend = friends[i];
         var totalDifference = 0;

         console.log(currentFriend.name);

         for (var k = 0; k < currentFriend.scores.length; k++) {
           var currentFriendScore = currentFriend.scores[k];
           var currentUserScore = userScore[k];


           totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
         }

         if (totalDifference <= bestMatch.frientDifference) {
           bestMatch.name = currentFriend.name;
           bestMatch.photo = currentFriend.photo;
           bestMatch.friendDifference = totalDifference;
         }
       }
       friends.push(userData);


       // respond back with the best match
       res.json(bestMatch);
     });
   };
