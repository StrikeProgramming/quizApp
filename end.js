const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

/*==================== INITIAL SETUP ====================*/

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

/*==================== FUNCTIONS ====================*/

const saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  //Add score
  highScores.push(score);
  //Sort highest to lowest
  highScores.sort((a, b) => b.score - a.score);
  //Max 5 scores saved
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};

/*==================== EVENT LISTENERS ====================*/

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});
