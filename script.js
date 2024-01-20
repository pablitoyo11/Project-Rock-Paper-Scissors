 
let computerSelection="null";
let playerSelection="null"

let userwincount=0;
let userlosecount=0;
let userdrawcount=0;

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


function playRound (event){
    computerSelection=getComputerChoice();
    console.log("esto",this.id)
    playerSelection=this.id;
        switch (playerSelection){
    
            case "rock":{   
                switch (computerSelection){
                    case "rock": {console.log("Draw"); userdrawcount++; DrawScoreboard.textContent=userdrawcount; break;}
                    case "paper": {console.log("Computer WIN"); userlosecount++; LoseScoreboard.textContent=userlosecount; break;}
                    //case "scissors": {console.log("You Win"); return "userwin";} break;
                    case "scissors": {console.log("You Win"); userwincount++; WinScoreboard.textContent=userwincount; break;}

                }
            break;
            }

            case "paper":{  
                switch (computerSelection){
                //case "rock": {console.log("You Win"); return "userwin"; break;}
                case "rock": {console.log("You Win"); userwincount++; WinScoreboard.textContent=userwincount; break;}
                case "paper": {console.log("Draw"); userdrawcount++; DrawScoreboard.textContent=userdrawcount; break;}
                case "scissors": {console.log("Computer WIN"); userlosecount++; LoseScoreboard.textContent=userlosecount; break;}
                }
            break;
            }
        

            case "scissors":{
                switch (computerSelection){
                    case "rock": {console.log("Computer WIN"); userlosecount++; LoseScoreboard.textContent=userlosecount; break;}
                    //case "paper": console.log("You Win"); return "userwin"; break;
                    case "paper": {console.log("You Win"); userwincount++; WinScoreboard.textContent=userwincount; break;}
                    case "scissors": {console.log("Draw"); userdrawcount++; DrawScoreboard.textContent=userdrawcount; break;}
                }
            break;
            }
        break;
        }

    if(userwincount==5){
        alert("You Win!");
        userwincount=userdrawcount=userlosecount=0;
        WinScoreboard.textContent=userwincount;
        DrawScoreboard.textContent=userdrawcount; 
        LoseScoreboard.textContent=userlosecount;
    }
    if(userlosecount==5){
        alert("Computer Win!");
        userwincount=userdrawcount=userlosecount=0;
        WinScoreboard.textContent=userwincount;
        DrawScoreboard.textContent=userdrawcount; 
        LoseScoreboard.textContent=userlosecount;
    }

}

/* this plays 5 rounds, uses old version with count score function (each commented line in playround works with this old version function)
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
    scoreBoard.textContent=pcwincount;

}
*/


/* useless function now, made the count to work inside the play round function
function countscore(winner){

switch (winner){
case "draw": {drawcount++} break;
case "userwin": {userwincount++} break;
case "pcwin": {pcwincount++} break;
}

console.log("---draws");
console.log(drawcount);
console.log("---userwins");
console.log(userwincount);
console.log("---pcwins");
console.log(pcwincount);

scoreBoard.textContent=userwincount;

}
*/
/* old version 
let result;
function takeselection(event) {
    console.log(this.id);
    playerSelection=this.id;
    result=countscore(playRound(playerSelection));
    console.log(result);
}
*/

const WinScoreboard = document.querySelector('.scoreboard > .winscore');
const DrawScoreboard = document.querySelector('.scoreboard > .drawscore');
const LoseScoreboard = document.querySelector('.scoreboard > .losescore');




const items = document.querySelectorAll('.items');
            
items.forEach(item=> item.addEventListener("click", playRound));
