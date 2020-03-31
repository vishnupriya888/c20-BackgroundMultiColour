function setup() {
  createCanvas(1000, 400);
  
}

function draw() {
  background(World.mouseX,World.mouseY,World.mouseX/World.mouseY);
  fill("purple");
  ellipse(World.mouseX,World.mouseY,30,30);
  drawSprites();
}