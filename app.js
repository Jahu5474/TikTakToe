const prompt = require('prompt-sync')()
// we have to layout the game format
let gameBoard = [ 
    1,2,3,
    4,5,6,
    7,8,9,
];

let gameRunning = true;
while(gameRunning){
    let player = prompt("whats your move?");
    let move = prompt("which square?");

    gameBoard[move] = player

    if(gameBoard[0] == "x"  && gameBoard[3] == "x"  && gameBoard[6] == "x"   ){
        console.log("gameover")
        gameRunning= false;
    }
    if (gameBoard[1] == "x"  && gameBoard[4] == "x"  && gameBoard[7] == "x" ){
        console.log("gameover")
        gameRunning= false;
    }
    if (gameBoard[2] == "x"  && gameBoard[5] == "x"  && gameBoard[8] == "x" ){
        console.log("gameover")
        gameRunning= false;
    }
    if (gameBoard[0] == "x"  && gameBoard[1] == "x"  && gameBoard[2] == "x" ){
        console.log("gameover")
        gameRunning= false;
    }
    if (gameBoard[3] == "x"  && gameBoard[4] == "x"  && gameBoard[5] == "x" ){
        console.log("gameover")
        gameRunning= false;
    }
    if (gameBoard[6] == "x"  && gameBoard[7] == "x"  && gameBoard[8] == "x" ){
        console.log("gameover")
        gameRunning= false;
    }
    if (gameBoard[0] == "x"  && gameBoard[4] == "x"  && gameBoard[8] == "x" ){
        console.log("gameover")
        gameRunning= false;
    }
    if (gameBoard[2] == "x"  && gameBoard[4] == "x"  && gameBoard[6] == "x" ){
        console.log("gameover")
        gameRunning= false;
    }

    console.log(gameBoard)
}





//if you get 3 of the same symbol in a row you win

//if not then it is a tie and the game restarts

