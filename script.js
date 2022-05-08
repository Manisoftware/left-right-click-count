var left = document.getElementById("leftclick");
var right = document.getElementById("rightclick");
var sco = document.getElementById("scorespan");
let score = 0;
left.addEventListener("click", () => {
  score--;
  document.getElementById("scorespan").innerHTML = "Your score is : " + score;
  if (score < 0) {
    scorespan.style.color = "red";
  }
  if (score == 0) {
    scorespan.style.color = "#234564";
  }
});
right.addEventListener("click", () => {
  score++;
  document.getElementById("scorespan").innerHTML = "Your score is : " + score;
  if (score > 0) {
    scorespan.style.color = "green";
  }
  if (score == 0) {
    scorespan.style.color = "#234564";
  }
});
