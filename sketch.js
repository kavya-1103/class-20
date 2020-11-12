var mr,fr;

function setup() {


  createCanvas(800,400);
  fr =createSprite(400, 200, 50, 50);
  fr.shapeColor="white"
  mr =createSprite(600, 200, 50, 50);
  mr.shapeColor="white"
}

function draw() {
  background("lightblue"); 
  mr.x=mouseX;
  mr.y=mouseY; 
  if((mr.x-fr.x<(mr.width+fr.width)/2)
  &&(fr.x-mr.x<(mr.width+fr.width)/2)
  &&(mr.y-fr.y<(mr.height+fr.height)/2)
  &&(fr.y-mr.y<(mr.height+fr.height)/2)){
fr.shapeColor="red";
mr.shapeColor="red";
  }
  else{
    fr.shapeColor="white";
mr.shapeColor="white";
  }
  drawSprites();
}