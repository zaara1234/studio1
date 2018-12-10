// Write your JS here
// import test from './script2.js';
var database = firebase.database();
var databaseRef = database.ref("/");

$("#askquestions").click(function(){
var questions= $("#questioninput").val();
  console.log(questions)
  databaseRef.push({
          "Topic": questions, 
          "Answers": [] 
    });
    databaseRef.once("value").then(function(snapshot) {
      var string = ""
      snapshot.forEach(function(comments) {
         string += "<div id = \"" + comments.key + "\"><p>"+(comments.val()["Topic"])+ "</p> </div>";
          
      });
      $("#Questions").html(string);
    });
  });

databaseRef.once("value").then(function(snapshot) {
  var string = ""
  snapshot.forEach(function(comments) {
     string += "<div id = \"" + comments.key + "\"><p>"+(comments.val()["Topic"])+ "</p> <input class = \"commentinput\"><button class= \"makeComment\">Make a comment</button></div>"; 
  });
  $("#Questions").html(string);
});

$("button").click(function(){
  console.log("Clicked")
  var comments= $("commentsinput").val();
    console.log(comments)
    console.log($(".makeComment"))
    // databaseRef.push({
    //         "Topic": comments, 
    //         "Answers": [] 
    //   });
    //   // Read the data from the database and take a snapshot of that data.
    // databaseRef.once("value").then(function(snapshot) {
    //  // Use .val() to get the data from the snapshot.
    //  const directory = snapshot.val();
    // console.log(directory);
    // });
    });
  
