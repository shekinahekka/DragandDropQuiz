var bgmusic
var myVar;
var selectsound;

var errorSound, succesSound;
var bg, bgImg;
var arrow, arrowImg;
function preload(){
bgmusic=loadSound("assets/BackgroundMusic.mp3");
selectsound=loadSound("assets/Select.mp3");
//arrowImg = loadImage("assets/Asset 7.png");
errorSound = loadSound("assets/error.mp3");
succesSound = loadSound("assets/success.mp3");

}

function setup(){
bgmusic.loop();
}

function draw(){
/*
arrow = createSprite(200,200);
arrow.addImage(arrowImg);
arrow.veocityX=2;
arrow.veocityY=-2;
drawSprites();
*/
}
