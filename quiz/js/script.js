var quesIndex;
var gameTimer;
var timeAllotted = 59; //seconds
document.getElementById("memo").innerHTML = "1 Min";


var questionBank = [
 {
   question:"When was Vigro Deep Born?",
   answers:[
     {ansID: 1, answer:"1999"},
     {ansID: 2, answer:"2001"},
     {ansID: 3, answer:"2003"},
     {ansID: 4, answer:"2004"},
   ],
   correct: 2,
   selected: null,
   reason: "DJ Vigro Deep was born on September 6, 2001, and grew up in Atteridgeville, South Africa"
 },
 {
   question:"When Did vigro deep Began His Music Career?",
   answers:[
     {ansID: 4, answer:"2010"},
     {ansID: 5, answer:"2013"},
     {ansID: 6, answer:"2015"},
     {ansID: 7, answer:"2017"},
   ],
   correct: 7,
   selected: null,
   reason: "Vigro Dee began his long-life musical career in 2017 by becoming a beat and song producer. He chose the amapiano genre and executed it in his own dialect."
 },
 {
   question:"Which combination of Songs Gave Vigro Deep Sa the opportunity To Be international?",
   answers:[
     {ansID: 8, answer:"Untold Story & Bundle of Joy"},
     {ansID: 9, answer:"Ghost Producer & Ama International"},
     {ansID: 10, answer:"Dream Team & Ke Star"},
     {ansID: 11, answer:"Blue Monday & Africa Rise"},
   ],
   correct: 8,
   selected: null,
   reason: "Untold Story and Bundle of Joy are two revolutionary songs by Vigro Deep that paved the path for his opportunity to perform in the United Kingdom and the United States of America, and also performed in countries like Botswana and Mozambique."
 },     
 {
   question:"Which Pose Does vigro deep likes,refer from the emojis",
   answers:[
     {ansID: 12, answer:"✌️"},
     {ansID: 13, answer:"🤘"},
     {ansID: 14, answer:"🤟"},
     {ansID: 15, answer:"🤙"},
   ],
   correct: 13,
   selected: null,
   reason: "vigro deep likes using this pose 🤘."
 },  
 {
   question: "On his Documentary Welcome to My world CPT.1,he He mentioned a kind of piano he does ,What is it?",
   answers:[
     {ansID: 16, answer:"Tech Piano"},
     {ansID: 17, answer:"Dark Piano"},
     {ansID: 18, answer:"Afro Piano"},
     {ansID: 19, answer:"None"},
   ],
   correct: 17,
   selected: null,
   reason: "He mentioned Dark Piano." 
 },
    {
    question: "Vigro Deep Recently released a new mix,how much is the production percentage of vigro deep on the Mix",
    answers:[
    {ansID: 18, answer:"0 %"},
    {ansID: 19, answer:"25 %"},
    {ansID: 20, answer:"100 %"},
    {ansID: 21, answer:"5 0%"},
    ],
    correct: 20,
    selected: null,
    reason: "The mix title is name Vigro Deep - Uphoria Mix 100% production" 
    },
];

function populateQuestionDetails() {
  $("#answer-response").hide();
  
  $("#question-container").empty();
  $("#answers-container").empty();
  $("#answer-response").empty();
  
  $("#question-container").html(questionBank[quesIndex].question);
  
  var quesAnswers = questionBank[quesIndex].answers;
  
  for (var i=0; i < quesAnswers.length; i++) {
    $("#answers-container").append('<button onclick="dire()" class="answer" data-content="' + quesAnswers[i].ansID + '" >' + quesAnswers[i].answer + '</button>' + '<br> <br>');
  }
  
  renderQuesControls();
}



function dire() {
  setTimeout(getNextQuestion, 3000);
}



var clicks = 0;
var maxClicks =6;

function me() {
  clicks++;
  var progress = clicks + "/" + maxClicks;
  document.getElementById("memo").textContent = progress;
  
  // Your code or function call here
  
  if (clicks === maxClicks) {
    // Disable the button or perform any other action when the maximum number of clicks is reached
    document.querySelector("button").disabled = true;
  }
}





function renderQuesControls() {
  if (quesIndex === 0) {
    $("#previousQ").hide();
    $("#nextQ").show();
  } else if (quesIndex === questionBank.length-1) {
    $("#previousQ").show();
    $("#nextQ").hide();     
    $("#finish").show();
  } else {
    $("#previousQ").show();
    $("#nextQ").show();    
  }
  // console.log("quesIndex: " + quesIndex + " length: " + questionBank.length);
clicks++;
var progress = clicks + "/" + maxClicks;
document.getElementById("memo").textContent = progress;

}

function getPreviousQuestion() {
  quesIndex--;
  populateQuestionDetails();
}

function getNextQuestion() {
  quesIndex++;
  populateQuestionDetails();
}

function processAnswer() {
  var selectedAnsID = parseInt($(this).attr("data-content"));
  var correctAnsID = questionBank[quesIndex].correct;
  
  if (selectedAnsID === correctAnsID) {
      $("#answer-response").html("<h4>Correct!</h4>");
  } else {
      $("#answer-response").html("<h4>Sorry that's not right.</h4>");
  }
  
  $("#answer-response").append(questionBank[quesIndex].reason);
  $("#answer-response").show();
  
  //save the answer the user selected in the questionBank
  questionBank[quesIndex].selected = selectedAnsID;
  
  console.log(questionBank[quesIndex].selected);
}

$(document).ready(function () {
  //pre init routine
  $("#main-game").hide();
  $("#results-display").hide();
  $("#previousQ").hide();
  $("#nextQ").hide();
  $("#finish").hide();
});

function updateClock() {
  timeAllotted--;
  $("#game-timer").html(timeAllotted);
  if (timeAllotted === 0) {
    clearInterval(gameTimer);
    endGame();
  }
}

$("#start").on("click", function () {
  $("#splash-screen").hide();
  $("#main-game").show();

  gameTimer = setInterval(updateClock, 1000);
  
  quesIndex = 0;
  populateQuestionDetails(quesIndex);
});

/*
Here's a neat trick: for elements that are dynamically created existing handlers pointed to that type of element (via class or id, whichever) will not be automatically bound. Instead of $("[.|#]identifier").on("click", function) bind it to the document for it's id/class as shown below.
*/
$(document).on("click", ".answer", processAnswer);

$("#previousQ").on("click", getPreviousQuestion);

$("#nextQ").on("click", getNextQuestion);

$("#finish").on("click", endGame);

function endGame() {
  $("#main-game").hide();
  processResults();
  $("#results-display").show();
}

$("#restart").on("click", function () {
  console.log("reload the game.");
  window.location.reload()
});

function processResults() {
  var status;
  var correct = 0;
  var incorrect = 0;
  var score = 0;
  
  for (var i=0; i < questionBank.length; i++) {
    if (questionBank[i].correct === questionBank[i].selected) {
      correct++;
      status = "Correct!";
    } else {
      incorrect++;
      status = "Incorrect!";
    }
    
    //sorry the below is verbose. I know :( I could only see so far ahead. If I had more time I'd refactor it to end cleaner.
    
    if (questionBank[i].selected !== null) {
      //get selected text
      var selectedText = "NA";
      for (var j=0; j < questionBank[i].answers.length; j++) {
        if (questionBank[i].answers[j].ansID === questionBank[i].selected) {
          selectedText = questionBank[i].answers[j].answer;
          break;
        }
      }
    } else {
      selectedText = "--";
    }         
    //get correct ans text
    var correctText = "NA";
    for (var k=0; k < questionBank[i].answers.length; k++) {
      if (questionBank[i].answers[k].ansID === questionBank[i].correct) {
        correctText = questionBank[i].answers[k].answer;
        break;
      }
    }
    
    $("#result-rows").append("<tr><td>" + questionBank[i].question + "</td><td>" + selectedText + "</td><td>" + correctText + "</td><td>" + status +  "</td></tr>");
  }
  
  
}