var getYourAnswerBtn = document.querySelector(".get-answer-button");
var eightBallAnswers = document.querySelector(".display-answer-section");
var eightBallImg = document.querySelector(".magic-eight-ball");
var eightBallAnswer = document.querySelector(".the-answer");
var questionInput = document.querySelector(".question-input-field");
var askedQuestion = document.querySelector(".the-question-asked");

var answers = ["It is certain.",
"It is decidedly so.",
"Without a doubt",
"Yes - definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy, try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
 "Concentrate and ask again",
 "Don't count on it",
 "My reply is no",
 "My sources say no",
 "Outlook not so good",
 "Very doubtful"]


getYourAnswerBtn.addEventListener("click", theMagicEightBallAnswers);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function theMagicEightBallAnswers() {
  askedQuestion.innerText = questionInput.value;
  eightBallAnswer.innerText = answers[getRandomIndex(answers)];
  displayAnswer();
}

function displayAnswer(){
  questionInput.value = "";
  eightBallImg.classList.add("hidden");
  eightBallAnswer.classList.remove("hidden");
}
