function preload() {
    //load the images here
    bgImg=loadImage('garden.png');
    // mouseImg1=loadImage('mouse1.png');
    // catImg1=loadImage('cat1.png');
    // mouseImg2=loadAnimation('mouse2.png');
}

function setup(){
    createCanvas(1000,800);
     //create tom and jerry sprites here
  //  bg=createSprite(500,400,50,40);
   //bg.addImage('backgrnd',bgImg);
    jerry=createSprite(980,780,20,20);
    //jerry.addImage('mouse',mouseImg1)
    tom=createSprite(20,780,20,20);
  // tom.addImage('cat', catImg1)
}

function draw() {
background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
//if(keyCode==RIGHT_ARROW){
   // jerry.addAnimation('mouseTeasing',mouseImg2);
    //jerry.changeAnimation('mouseTeasing');
    //jerry.frameDisplay=25;
//}
}
