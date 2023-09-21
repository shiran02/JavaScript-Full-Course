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

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let compuer = computerChoice === 1
                ? "rock"
                : computerChoice ===2
                ? "paper"
                : "scissor";

            let result =
                playerOne === computer
                    ? "Tie game !"
                    :playerOne === "rock" && compuer === "paper"
                    ? 'playerOne:  ${playerOne}\nComputer: ${computer} \nCkmputer wins'
                    :playerOne === "paper" && compuer === "scissor"
                    ? 'playerOne:  ${playerOne}\nComputer: ${computer} \nCkmputer wins'
                    :playerOne === "scissor" && compuer === "rock"
                    ? 'playerOne:  ${playerOne}\nComputer: ${computer} \nCkmputer wins'
                    :'playerOne:  ${playerOne}\nComputer: ${computer} \nCkmputer wins'

            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok thanks for playing");

 
                    



        }else{
            alert("i guess change your mind. may be next time");
        }
    }else{
        alert("you didnt enter rock,paper,scissor");
    }
}else{
    alert("Ok may be time");
}