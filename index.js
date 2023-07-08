function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var userScore = 0;
    var computerScore = 0;
  
    for (var i = 0; i < 5; i++) {
      var userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
      if (!choices.includes(userChoice)) {
        console.log("Invalid choice. Please try again.");
        i--; // Decrement the counter to allow the user to re-enter their choice.
        continue;
      }
  
      var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
      console.log("You chose: " + userChoice);
      console.log("Computer chose: " + computerChoice);
  
      if (userChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log("You win!");
        userScore++;
      } else {
        console.log("You lose!");
        computerScore++;
      }
    }
  
    console.log("Game over!");
    console.log("Your score: " + userScore);
    console.log("Computer's score: " + computerScore);
  }
  
  getComputerChoice();
  