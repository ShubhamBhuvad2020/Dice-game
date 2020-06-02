let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let i = " images/dice" + randomNumber1 + ".png";
let j = " images/dice" + randomNumber2 + ".png";
// document.querySelector(".img1").setAttribute("");

// document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// document.querySelector(".img2").setAttribute("src", "images/dice2.png");
// console.log(randomNumber1);
// console.log(randomNumber2);

var img1 = document.querySelector(".img1").setAttribute("src", i);
var img2 = document.querySelector(".img2").setAttribute("src", j);

if (i > j) {
  document.querySelector(".heading").innerHTML = "🚩Player 1 Wins!";
} else if (j > i) {
  document.querySelector(".heading").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
