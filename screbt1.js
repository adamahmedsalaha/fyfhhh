//board
var blockSize = 25;
var row =20;
var cols =20;
var board;
var context;
//snake
var snakeX = blockSize * 5;
var snakey = blockSize * 5;
var velocityX = 0;
var velocityY = 0;
var snakeBody = [];
//food
var foodX;
var foodY;
var gameOver = false;
window.onload = function(){
    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board
    placeFood();
    document.addEventListener("keyup",changeOirection);
    // update();
    setInterval(update, 1000/10);//100 m1111seconds
}
    function update(){
        if(gameOver){
            return;
        }

 context.fillStyle="black";
  
 context.fillRect(0,0,board.width,board.height);
 context.fillStyle = "red";
 context.fillRect(foodX, foodY ,blockSize ,blockSize);

 if(snakeX == foodX&&snakey == foodY){
    
    snakeBody.push({foodX,foodY})
    placeFood();
 }
 for(let i = snakeBody.length-1; 1 >0; i--){
    snakeBody[i] = snakeBody[i-1];
 }
 if(snakeBody.length){
    snakeBody[0] = [snakeX,snakey];
 }
 context.fillStyle="lime";
   snakeX += velocityX * blockSize;
   snakey += velocityY *blockSize;
   context.fillRect(snakeX, snakey ,blockSize ,blockSize);
  for(let i = 0; i< snakeBody.length; i++){
    context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
  }
  //game Over conitions
  if (snakeX < 0 || snakeX > cols *blockSize || snakey > row*blockSize){
    
  }
  
    for(let i = 0; i < snakeBody.length; i++){
        if(snakeX == snakeBody[i][0]&&snakey == snakeBody[i][1]){
gameOver = true;
alert("GamaOver")
        }
    }
  }

function changeOirection(e){
if (e.code =="ArrowUp" && velocityY != 1){
   velocityX = 0;
   velocityY =-1;
}
else if  (e.code =="ArrowDown" && velocityY != -1){
    velocityX = 0;
    velocityY =1;
 }
else if (e.code =="ArrowLeft" && velocityX != 1){
    velocityX = -1;
    velocityY =0;
 }
else if (e.code =="ArrowRight" && velocityX != -1){
    velocityX = 1;
    velocityY =-0;
 }
   
}
function placeFood(){
    //0-1) "cols -> (0-19.9999)  ->  (0-19 " 25")
foodX = Math.floor(Math.random()  *  cols) * blockSize;
foodY = Math.floor(Math.random()  *  row) * blockSize;
}

