function preload() {
    //load the images here
    bgImg=loadImage('images/garden.png');
    mouseImg1=loadAnimation('images/mouse1.png');
    catImg1=loadAnimation('images/cat2.png','images/cat3.png');
    catSitImg=loadAnimation('images/cat1.png');
    catSitUp=loadAnimation('images/cat4.png');
    mouseImg2=loadAnimation('images/mouse2.png','images/mouse3.png');
    mouseInspector=loadAnimation('images/mouse4.png')
}

function setup(){
    createCanvas(1000,800);
     //create tom and jerry sprites here
    jerry=createSprite(30,770,20,20);
    jerry.addAnimation('mouse',mouseImg1);
    jerry.scale=0.1;
    tom=createSprite(970,770,20,20);
  tom.addAnimation('cat', catSitImg);
  tom.scale=0.1;
}

function draw() {
background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(jerry.x-tom.x<(jerry.width+tom.width)/2 && tom.x-jerry.x<(jerry.width+tom.width)/2){
        jerry.addAnimation('mouseI',mouseInspector);
        jerry.changeAnimation('mouseI');
        tom.addAnimation('catS',catSitUp);
        tom.changeAnimation('catS');
        tom.velocityX=0;
    }
    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
if(keyCode==RIGHT_ARROW){
   jerry.addAnimation('mouseTeasing',mouseImg2);
    jerry.changeAnimation('mouseTeasing');
    jerry.frameDisplay=25;
    tom.addAnimation('catWalking',catImg1);
    tom.changeAnimation('catWalking');
    tom.velocityX=-4;
}
}
function isTouching(){
}
