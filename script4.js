//Chapter 4: Control Flow

// Given player1 and player2's choice, print winner or draw
function getWinner(player1, player2) {
  if (player1 === player2) {
    console.log("Draw");
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    console.log("Player 1 wins");
  } else {
    console.log("Player 2 wins");
  }
}

getWinner("rock", "paper");   // Player 1 wins
getWinner("paper", "rock");      // Player 1 wins
getWinner("scissors", "scissors"); // Draw
getWinner("scissors", "rock");   // Player 2 wins

console.log("");

// Show different messages based on combination
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {
  console.log("Welcome Admin!");
} else if (isLoggedIn && !isAdmin) {
  console.log("Welcome User!");
} else {
  console.log("Please log in.");
}

// Use switch-case to print what to wear
let weather = "rainy";
switch(weather){
    case "rainy":
        console.log("Wear a rain coat");
        break;
    case "Sunny":
        console.log("Wear cotton cloth");
        break;
    default : 
        console.log("Can't say");
}



