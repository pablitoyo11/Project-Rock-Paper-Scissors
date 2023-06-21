 
let computerSelection="null";
let playerSelection="null"

function getComputerChoice() {
   let result = Math.floor(Math.random()*3);
   let choice = null;
   switch(result){
    case 0:  choice = "rock";break;
    case 1:  choice = 'paper'; break;
    case 2:  choice = "scissors"; break;
   }
   console.log("console.log for testing, la pc ");
   console.log(choice);

return choice;}


function getUserChoice() {
    let choice = prompt("Please enter rock, paper or scissors");
    choicelowercase=choice.toLowerCase();
    console.log("console.log for testing, el paero ");
    console.log(choicelowercase);
    return choicelowercase;
}

function playRound (playerSelection,computerSelection){
computerSelection=getComputerChoice();
playerSelection=getUserChoice();
    switch (playerSelection){
        case "rock":{
            switch (computerSelection){
                case "rock": {console.log("Draw"); return "draw";} break;
                case "paper": {console.log("Computer WIN"); return "pcwin";} break;
                case "scissors": {console.log("You Win"); return "userwin";} break;
            }
            break;
        }

        case "paper":{
            switch (computerSelection){
               case "rock": {console.log("You Win"); return "userwin"; break;}
               case "paper": {console.log("Draw"); return "draw"; break;}
               case "scissors": {console.log("Computer WIN"); return "pcwin"; break;}
            }
            break;
        }
       

        case "scissors":{
            switch (computerSelection){
                case "rock": console.log("Computer WIN"); return "pcwin"; break;
                case "paper": console.log("You Win"); return "userwin"; break;
                case "scissors": console.log("Draw"); return "draw"; break;
            }
            break;
        }
        

    }

}

function game() {
    let userwincount=0;
    let pcwincount=0;
    let drawcount=0;
    for (let rounds = 0; rounds < 5; rounds++) {
         let contador=playRound(playerSelection, computerSelection);
        switch (contador) {
            case "userwin": {userwincount++;} break;
            case "pcwin": {pcwincount++;} break;
            case "draw": {drawcount++;} break;
            default:
                break;

            }
    }
    console.log("draws");
    console.log(drawcount);
    console.log("userwins");
    console.log(userwincount);
    console.log("pcwins");
    console.log(pcwincount);
}