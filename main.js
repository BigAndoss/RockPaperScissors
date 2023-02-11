const choises = ["rock","paper","scissors"]

let userChoise = prompt() 

let playerScore = 0;
let computerScore = 0;

getComputerChoice = ()=>{

    function randomItem(items){
        return items[Math.floor(Math.random()*items.length)];
    }

    return(randomItem(choises));

}

let computerSelection = getComputerChoice();


game =(playerSelection) => {

if (playerSelection === "rock" && computerSelection === "scissors"){
    console.log("win");
    playerScore++;

}else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("win");
    playerScore++;

}else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("win");
    playerScore++;

}else if (playerSelection === computerSelection ) {
    console.log("draw")
}else {
    console.log("lost")
    computerScore++;
} 
console.log(playerScore)
console.log(computerScore)


}