// Creating Random Numbers for Dice from 1 to 6

var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;


// Finding a Dice Face Randomly

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var randomImage2 = "images/dice" + randomNumber2 + ".png";


// Changing Dice Face in the Website Randomly After Every Refresh

document.querySelector(".dice img.img1").setAttribute("src", randomImage1);

document.querySelector(".dice img.img2").setAttribute("src", randomImage2);


// Which Player Wins?

if(randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = "🚩Player1 Wins!!";

else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = "Player2 Wins!!🚩";

else document.querySelector("h1").textContent = "Draw!!";