var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  caveImg = loadImage("cave.jpeg");
  teasoureImg = loadImage("teasoure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(caveImg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(teasoureImg)
    fill("black")
    textSize(40);
    text("PARABÉNS VOCÊ CONSEGUIO",250, 200);
  }

  drawSprites()
}