var pointer, r, g, b;

function setup() {
  createCanvas(1200,800);

  
  pointer = createSprite(400, 100, 50, 50);
  pointer.shapeColor = "white";

  
}

function draw() {
  
  pointer.y =  World.mouseY ;
  pointer.x = World.mouseX;

  r = pointer.x + 40;
  g = pointer.y + 50;

  if(g >= r){
    b = g - r + 100;
  }
  else{
    b = r - g + 50;
  }

  background(r,g,b);  

  drawSprites();
}