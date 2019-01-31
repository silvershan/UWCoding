var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var counter = 30;
var timerCountdown = document.getElementById("countdown");
var displayResults = document.getElementById("quiz__results");
var displayQuestions = document.getElementById("quiz__questions");

displayResults.style.display = "none";

function showResults() {
  displayQuestions.style.display = "none";
  displayResults.style.display  = "block";
}

// Set Timer
var timer = setTimeout(function() {
  showResults();
}, counter * 1000);

// Set Countdown
var countdown = setInterval(function() {
  counter--;
  timerCountdown.innerHTML = counter;
  if (counter === 0) {
    stopCountdown();
    for (var i = 0; i < form.children.length; i++) {
        var found = "";
    
        for (var j = 0; j < form["group" + i].length; j++) {
          if (form["group" + i][j].checked) {
            found = form["group" + i][j].value;
          }
        }
    
        if (found === correctAnsArr[i]) {
          correctAns += 1;
          found = "";
        } else if (found === "") {
          unanswered += 1;
        } else {
          incorrectAns += 1;      
        }
      }
    
      document.getElementById("correct").innerHTML = correctAns;
      document.getElementById("incorrect").innerHTML = incorrectAns;
      document.getElementById("unanswered").innerHTML = unanswered;
    
      showResults();   
    showResults();
  }
}, 1000);

function stopCountdown() {
  clearInterval(countdown);
}

var questions = [
  {
    question: "How old is Belle in Beauty and the Beast?",
    answers: [
      "18",
      "24",
      "21",
      "16"
    ]
  },
  {
    question: "What is Sleeping Beauty's real name?",
    answers: [
      "Tiana",
      "Ariel",
      "Aurora",
      "Merida"
    ]
  },
  {
    question: "What song was almost cut from the Little Mermaid?",
    answers: [
      "Under the Sea",
      "Part of Your World",
      "Kiss the Girl",
      "Tale as Old as Time"
    ]
  },
  {
    question: "Who is the only Disney princess to have a child?",
    answers: [
      "Ariel",
      "Rapunzel",
      "Belle",
      "Anna"
    ]
  },
  {
    question: "How many spots are in 101 Dalmatians?",
    answers: [
      "1,304,903",
      "987,590,309",
      "1,907,902",
      "6,469,952"
    ]
  },
  
];

var correctAnsArr = [
  "16",
  "Aurora",
  "Part of Your World",
  "Ariel",
  "6,469,952"
];

// Display question and answers
for (var i = 0; i < questions.length; i++) {
  var question = questions[i];

  var sec = document.createElement("section");
  sec.className = "quiz__questions--question q" + i;
  sec.innerHTML = `<p>${question.question}</p>`;
  document.getElementById("form").appendChild(sec);

  for (var j = 0; j < question.answers.length; j++) {
    // console.log(question.answers[j]);
    var answer = question.answers[j];

    var div = document.createElement("div");
    var radioBtn = `<input type="radio" name="group${i}" value="${answer}">`
    div.innerHTML = radioBtn + " " + answer;
    // div.setAttribute("id", "answer");
    document.querySelector(".q" + i).appendChild(div);
  }
}

var form = document.forms["form"];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  stopCountdown();

  for (var i = 0; i < form.children.length; i++) {
    var found = "";

    for (var j = 0; j < form["group" + i].length; j++) {
      if (form["group" + i][j].checked) {
        found = form["group" + i][j].value;
      }
    }

    if (found === correctAnsArr[i]) {
      correctAns += 1;
      found = "";
    } else if (found === "") {
      unanswered += 1;
    } else {
      incorrectAns += 1;      
    }
  }

  document.getElementById("correct").innerHTML = correctAns;
  document.getElementById("incorrect").innerHTML = incorrectAns;
  document.getElementById("unanswered").innerHTML = unanswered;

  showResults();
});

