
   var friends = require("../data/friends");

   // ===============================================================================
   // ROUTING
   // ===============================================================================

   module.exports = function(app) {
     // API GET Requests
     // Below code handles when users "visit" a page.
     // In each of the below cases when a user visits a link
     // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
     // ---------------------------------------------------------------------------

     app.get("/api/friends", function(req, res) {
       res.json(friends);
     });

     app.post("/api/friends", function(req, res) {

       var bestMatch = {
         name: "",
         photo: "",
         bestDiff: 1000

       };
       var userData = req.body;
       var userScores = userData.scores;
       var totalDifference = 0;

       for (var i = 0; i < friends.length; i++) {
         var currentFriend = friends[i];
         totalDifference = 0;

         console.log(currentFriend.name);


         for (var k = 0; k < currentFriend.scores.length; k++) {
           var currentFriendScore = currentFriend.scores[k];
           var currentUserScore = userScores[k]
           totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
         }

         if (totalDifference <= bestMatch.bestDiff) {
           bestMatch.name = currentFriend.name;
           bestMatch.photo = currentFriend.photo;
           bestMatch.bestDiff = totalDifference;
         }
       }
       friends.push(userData);


       // respond back with the best match
       res.json(bestMatch);
     });
   }
