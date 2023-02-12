const choises = ["rock","paper","scissors"]

let playerScore = 0
let computerScore = 0
let userChoise = prompt() 

getComputerChoice = ()=>{
    function randomItem(items){
        return items[Math.floor(Math.random()*items.length)];
    }
    return(randomItem(choises));
}

play = (playerSelection, computerSelection)=>{

    if (playerSelection === computerSelection) {
        console.log("draw")
    }else if(playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper"){
        console.log("win")
    }else{
        console.log("lose")    
    }
}

game = (play) =>{
    for (let i = 0; i < 5; i++) {       
        console.log(play(userChoise.toLocaleLowerCase(),getComputerChoice()));
    }
}

game(play);