let gameBoard = (function() {
	const arr = [];
	return {
		arr,
	}; 
})();

let player = (playerMark,playerName) => {
    let playerScore = 0;
    return {
        playerMark,
        playerName,
        playerScore,
    };
};
let player1 = player("x","Player 1");
let player2 = player("o","Player 2");
let player1score = document.querySelector('.player1score');
player1score.textContent = `Score: ${player1.playerScore}`;
let player2score = document.querySelector('.player2score');
player2score.textContent = `Score: ${player2.playerScore}`;

const gameResult = document.querySelector('.gameResult');
let moves = 0;

function checkWinner() {
    if((gameBoard.arr[0] === currentPlayer.playerMark && gameBoard.arr[1] === currentPlayer.playerMark && gameBoard.arr[2] === currentPlayer.playerMark)||
    (gameBoard.arr[3] === currentPlayer.playerMark && gameBoard.arr[4] === currentPlayer.playerMark && gameBoard.arr[5] === currentPlayer.playerMark) ||
    (gameBoard.arr[6] === currentPlayer.playerMark && gameBoard.arr[7] === currentPlayer.playerMark && gameBoard.arr[8] === currentPlayer.playerMark) ||
    (gameBoard.arr[0] === currentPlayer.playerMark && gameBoard.arr[3] === currentPlayer.playerMark && gameBoard.arr[6] === currentPlayer.playerMark) ||
    (gameBoard.arr[1] === currentPlayer.playerMark && gameBoard.arr[4] === currentPlayer.playerMark && gameBoard.arr[7] === currentPlayer.playerMark) ||
    (gameBoard.arr[2] === currentPlayer.playerMark && gameBoard.arr[5] === currentPlayer.playerMark && gameBoard.arr[8] === currentPlayer.playerMark) ||
    (gameBoard.arr[0] === currentPlayer.playerMark && gameBoard.arr[4] === currentPlayer.playerMark && gameBoard.arr[8] === currentPlayer.playerMark) ||
    (gameBoard.arr[2] === currentPlayer.playerMark && gameBoard.arr[4] === currentPlayer.playerMark && gameBoard.arr[6] === currentPlayer.playerMark)) {
        if(currentPlayer.playerMark === "x") {
            player1.playerScore++;
            player1score.textContent = `Score: ${player1.playerScore}`;
        }
        else {
            player2.playerScore++;
            player2score.textContent = `Score: ${player2.playerScore}`;
        }
        let winResult = currentPlayer.playerName;
        clearGame();
        gameResult.textContent = `${winResult} wins!`;
    }
    else if(moves === 9) {
        clearGame();
        gameResult.textContent = "It's a Tie!";
    }
}

let currentPlayer = player2;

function playRound() { 
    let checks = document.querySelectorAll('.check');
    checks.forEach(check => {
        check.addEventListener('click', () => {
            if(check.textContent === '') {
                if(currentPlayer === player1)
                    currentPlayer = player2;
                else
                    currentPlayer = player1;
                moves++;
                gameResult.textContent = '';
                check.textContent = currentPlayer.playerMark;
                gameBoard.arr[+check.dataset.indexNumber] = currentPlayer.playerMark;
                checkWinner();
            }   
        });
    });
    
}
playRound();

function clearGame() {
    let checks = document.querySelectorAll('.check');
    checks.forEach(check => {
        check.textContent = '';
    });
    currentPlayer = player2;
    gameBoard.arr = [];
    moves = 0;
    gameResult.textContent = '';
}

let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearGame);

