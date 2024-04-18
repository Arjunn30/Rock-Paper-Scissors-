const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay =document.getElementById("playerScoreDisplay");
const computerScoreDisplay =document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playersChoice) {
    // Convert player's choice to uppercase
    playersChoice = playersChoice.toUpperCase();
    
    const computersChoiceIndex = Math.floor(Math.random() * 3);
    const computersChoice = choices[computersChoiceIndex];
    let result = "";

    if (playersChoice === computersChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playersChoice) {
            case "ROCK":
                result = (computersChoice === "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "PAPER":
                result = (computersChoice === "ROCK") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "SCISSORS":
                result = (computersChoice === "PAPER") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerChoice.textContent = `PLAYER : ${playersChoice}`;
    computerChoice.textContent = `COMPUTER : ${computersChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText" , "redText")

    switch(result){
        case "YOU WIN!":
            playerScore++;
            playerScoreDisplay.textContent=playerScore;

            resultDisplay.classList.add("greenText")
            break;

            case "YOU LOSE!":
                computerScore++;
                computerScoreDisplay.textContent=computerScore;
            resultDisplay.classList.add("redText")
            break;

            

    }
}
