// Write your JS here
// import test from './script2.js';
var database = firebase.database();
var databaseRef = database.ref("/");

function updateHtml(){
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
        "input\" class = \"commentinput\"> <button type= 'button' class='btn btn-secondary' \"makeComment\" onclick=\"updateComment('" + comments.key + "')\">Make a comment</button></div>"; 
    });
    $("#Questions").html(string);
  });
}

updateHtml();

$("#askquestions").click(function(){
var questions= $("#questioninput").val();
  console.log(questions)
  databaseRef.push({
          "Topic": questions, 
          "Answers": [] 
    });
    updateHtml();
    $("#questioninput").val("");
  });

var commentSnapshot;
function updateComment(id){
  var ref = database.ref("/"+id)
  ref.once("value").then(function(snapshot) {
    // Use .val() to get the data from the snapshot.
    commentSnapshot = snapshot.val();
    var comment= $("#" + id + "input").val();
    if (commentSnapshot.Answers) {
      var commentArray = commentSnapshot.Answers
      commentArray.push(comment)
    }
    else {
      var commentArray = [comment]
    }
    ref.set({
            "Topic": commentSnapshot.Topic, 
            "Answers": commentArray
    });
    updateHtml();
   });
};

  
