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
    var stringcomments = ""
    var array = comments.val()["Answers"] 
    if (array) {
      array.forEach(function(e){
        stringcomments += "<p>"+ e + "</p>"
      }) 
    }
    
     string += "<div id = \"" + comments.key + "\"><p>"+(comments.val()["Topic"]) +
      "</p>" + stringcomments +" <input id = \"" + comments.key + 
      "input\" class = \"commentinput\"> <button type= 'button' class='btn btn-secondary' \"makeComment\" onclick=\"updateComment(\"" + comments.key + "\")\">Make a comment</button></div>"; 
  });
  $("#Questions").html(string);
});


function updateComment(id){
  var ref = database.ref("/"+id)
  ref.once("value").then(function(snapshot) {
    // Use .val() to get the data from the snapshot.
    const snapshot = snapshot.val();
    console.log(snapshot)
   });
  };
$("button.makeComment").click(function(){
  console.log("Clicked")
  var comments= $("commentsinput").val();
     databaseRef.push({
            "Topic": comments, 
            "Answers": [] 
    });
    //   // Read the data from the database and take a snapshot of that data.
    // databaseRef.once("value").then(function(snapshot) {
    //  // Use .val() to get the data from the snapshot.
    //  const directory = snapshot.val();
    // console.log(directory);
    // });
    });
  
