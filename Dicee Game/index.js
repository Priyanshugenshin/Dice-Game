var random = Math.random()*6;
randomNumber1=Math.ceil(random);
randomDiceImage="dice"+randomNumber1+".png";
randomDiceSource="images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomDiceSource);


var randomNumber2 = Math.ceil(Math.random()*6);
randomDiceSource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 won";
} else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 won";
}
else{
  document.querySelector("h1").innerHTML="Draw";

}
