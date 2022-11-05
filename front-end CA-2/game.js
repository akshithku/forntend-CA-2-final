var player2Color = 'yellow';

var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;

var gameOver = false;
var board;
const  beat = new Audio("./bg sound.mp3.mp3")
 beat.play();
// beat.loop=true;

var rows = 6;
var columns = 7;
var currColumns = []; 
window.onload = function() {
    setGame();
}

function setGame() {
   
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];
    

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(' ');
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }

}

function setPiece() {
    
    

    
    if (gameOver) {
        return;
        
    }

    
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    
    r = currColumns[c]; 

    if (r < 0) {
        return;
    }

    board[r][c] = currPlayer; 
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
    }
    else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
    }

    r -= 1; 
    currColumns[c] = r; 
   

    checkWinner();
    
}

function checkWinner() {
    

     
     for (let r = 0; r < rows; r++) {
         for (let c = 0; c < columns - 3; c++){
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
         }
    }

    
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
   
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = p1;
    
        localStorage.setItem("player", p1)

        // location.href="./gameover.html";  

    } 
    else {
        winner.innerText = p2;
        // location.href="./gameover.html";
    }
    beat.pause();

    if(drawCheck()){
        winner.innerHTML = 'DRAW!';
        return alert('DRAW!');}
    gameOver = true;
    
    
    
        

}
function drawCheck(){
    let fullSlot = []
    for (i=0; i < board.length; i++){
        if (board[i].style.backgroundColor !== 'white'){
            fullSlot.push(board[i]);
        }
    }
    if (fullSlot.length === board.length){
        return true;
    }
}
const reset=document.getElementById("reset-btn")
reset.onclick=()=>{
    window.location.reload()
}

var p1=localStorage.getItem("user1")
var p2=localStorage.getItem("user2")
document.getElementById("a1").innerHTML=p1;
document.getElementById("a2").innerHTML=p2;