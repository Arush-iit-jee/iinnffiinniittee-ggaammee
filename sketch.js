var afridi, biryani;
var afridi1, afridi2, biryani1;y
var biryaniG;
var score;

function preload(){
  afridi1 = loadAnimation("afridi-1.png","afridi-2.png");
  biryani1 = loadImage("biryani-1.png");
}
function setup() {
  createCanvas(600,600);
  afridi = createSprite(400, 200, 50, 50);
  afridi.addAnimation("reg",afridi1);
  biryaniG = new Group();
  score = 0;
}

function draw() {
  background("green");
  afridi.x = World.mouseX;
  afridi.y = World.mouseY;  
  
  spawnBiryani();

  // when afridi is touching biryani
  // change animation to next frame
  // destroy biryani
  // increase score by six
  if(afridi.isTouching(biryaniG)){
    afridi.nextFrame()
    biryaniG.destroyEach()
    score=score+6
  }
  drawSprites();
  fill("white");
  text("Score: "+score,400,50);
}

function spawnBiryani(){
  if(frameCount%100===0){
      var b = createSprite(random(30,470),0,50,50);
      b.addImage(biryani1);
      b.scale=0.5;
      b.velocityY=4;
      biryaniG.add(b);
  }
}

