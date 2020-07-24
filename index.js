var getYourAnswerBtn = document.querySelector(".get-answer-button");
var eightBallAnswers = document.querySelector(".display answer section");
var eightBallImgDiv = document.querySelector(".magic-eight-ball-image");
var eightBallAnswerDisplay = document.querySelector(".the-answer");
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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

getYourAnswerBtn.addEventListener("click", theMagicEightBallAnswers);


function theMagicEightBallAnswers() {
var shake = answers[getRandomIndex(answers)]

eightBallImgDiv.classList.add("hidden");
eightBallAnswerDisplay.classList.remove("hidden");

}
