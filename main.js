const choises = ["rock","paper","scissors"]

let userChoise = prompt("aaa" , "") //.toLocaleLowerCase;

getComputerChoice = ()=>{

    function randomItem(items){
        return items[Math.floor(Math.random()*items.length)];
    }

    return(randomItem(choises));

}

let computerSelection = getComputerChoice();

// console.log(computerSelection);

game =(playerSelection) => {

if (playerSelection === "rock" && computerSelection === "scissors"){
    console.log("win");
}else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("win");
}else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("win");
}else if (playerSelection === computerSelection ) {
    console.log("draw")
}else {
    console.log("lost")
} 

// if(playerSelection === computerSelection){
//     "Draw"
// }else if(playerSelection === "rock" && computerSelection === "paper"){
//     console.log("win");
// }else if

}

game(userChoise.toLocaleLowerCase());


