// Write your JS here
// import test from './script2.js';
var database = firebase.database();
var databaseRef = database.ref("/");


$("#makeQuestion").click(function(){
databaseRef.push({
        "Topic": "Snowy or sunny", 
        "Answers": ["Sunny","blizzard"] 
  });
  // Read the data from the database and take a snapshot of that data.
databaseRef.once("value").then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const directory = snapshot.val();
console.log(directory);
});
});


$("#askquestions").click(function(){
var questions= $("#questioninput").val();
  console.log(questions)
  databaseRef.push({
          "Topic": questions, 
          "Answers": [] 
    });
    // Read the data from the database and take a snapshot of that data.
  databaseRef.once("value").then(function(snapshot) {
   // Use .val() to get the data from the snapshot.
   const directory = snapshot.val();
  console.log(directory);
  });
  });
ref.once("#comments").then(function(snapshot) {
  snapshot.forEach(function(comments) {
      console.log(comments.val());
  });
});
  