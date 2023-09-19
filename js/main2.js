//first game

let playGame = confirm("Shall we play rock , paper or scissor");

if(playGame){
    //play
    let playerChoice = prompt("Please enter rock,paper,or scissor");

    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(
        playerOne ==="rock" || 
        playerOne === "paper" || 
        playerChoice === "scissor" 
        ){

        }else{
            alert("i guess change your mind. may be next time");
        }
    }else{
        alert("you didnt enter rock,paper,scissor");
    }
}else{
    alert("Ok may be time");
}