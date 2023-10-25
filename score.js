// Iteration 8: Making scoreboard functional
var totalScore = document.getElementById("score-board");

totalScore.textContent = localStorage.getItem("score");

var playAgainButton = document.getElementById("play-again-button");

playAgainButton.addEventListener("click", e=>{
    location.href = "./game.html"
})