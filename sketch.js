var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1, bike2, bike3, bike4;

function preload() {
  bike1Img  = loadImage("bike1.png");
  bike2Img  = loadImage("bike2.png");
  bike3Img  = loadImage("bike3.png");
  bike4Img  = loadImage("bike4.png");
  trackImg  = loadImage("track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

