   // ===============================================================================
   // LOAD DATA
   // ===============================================================================

   var friends = require("../data/friends.js");
   var path = require("path");

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
       var bestMatch = 0;
       var bestDiff = 1000;

       for (var i = friendsArray.length - 1; i >= 0; i++) {
         console.log("comparing with" + friendsArray[i].name);
         var totalDifference = 0;

         for (var k = 0; k < 2; k++) {
           totalDifference = totalDifference + Math.abs(friendsData[i].scores[k] - req.body.scores[k]);
         }
         if (totalDifference < bestDiff) {
           bestDiff = totalDifference;
           bestMatch = i;
         }
         console.log("total difference for " + friendsArray[i].name + "is " + totalDifference);
       }
       console.log("=============================");
       console.log("best person is " + friendsData[bestMatch].name + " and best score is " + bestDiff);
       console.log("=============================");

       // push in the user input into the friendArray
      //  friendsData.push(req.body);
       var friendData = [];

       if (friendData.length < 5) {
         friendData.push(req.body);
         res.json(true);

       //  else {
       //    waitListData.push(req.body);
       //    res.json(false);
       //  }
       };
       // respond back with the best match
       res.json({
         name: friendsData[bestMatch].name,
         photo: friendsData[bestMatch].photo
       }); // KEY LINE

     });

   }

   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
   //this will calculate compatibility and send the corresponding friend to the modal


   // ---------------------------------------------------------------------------
   // I added this below code so you could clear out the table while working with the functionality.
   // Don"t worry about it!

  //  app.post("/api/clear", function() {
  //    // Empty out the arrays of data
  //    tableData = [];
  //    waitListData = [];
   //
  //    console.log(tableData);
  //  });

   //displays all possible friends
