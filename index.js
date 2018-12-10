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
     string += "<div id = \"" + comments.key + "\"><p>"+(comments.val()["Topic"])+ "</p> </div>";
      
  });
  $("#Questions").html(string);
});
  