let obo;
let x = 0;
let dx = 5;
let y = 440;
let dy = 8;
let score1 = 0;
let score2 = 0;
let y1 = 0;
let y2 = 0;
let planform_speed = 160;

function setup() {
  createCanvas(1680, 1050);
}

function preload() {
  // preload() runs once
  obo = loadImage("obo.jpg");
}

function draw() {
  background(obo);
  fill("#5DFF84");
  ellipse(x, y, 50, 50);
  fill("#5DFF84");
  obo.resize(1680, 1050);

  fill("#0513FF");
  rect(20, y1, 30, 150);

  fill("#F70F02");
  rect(width - 20, y2, 30, 150);

  if (y > y2 && y < y2 + 150 && x > width - 50) {
    dx = -dx;
  }

  if (x > width || x < 0) {
    background(0);
    fill("#FC0808");
    textSize(90);
    text("не ну ты индеец!", 80, 300);
  }

  //if () {
  //dx = - dx;
  //}

  if (y > height || y < 0) {
    dy = -dy;
  }

  if (x > mouseX && x < mouseX + 190) {
    if (y > height - 100) {
      dy = -dy;
    }
  }

  if (y > height + 50) {
    dy = 0;
    dx = 0;
    fill("#FC0808");
    textSize(90);
    text("не ну ты индеец!", 80, 300);
  }

  textSize(80);
  text(score1, width / 4 - 30, 100);
  text(score2, (3 * width) / 4 - 30, 100);

  x = x + dx;
  y = y + dy;
}
function keyPressed() {
  if (keyCode == "87") {
    y1 = y1 - planform_speed;
  } else if (keyCode == "83") {
    y1 = y1 + planform_speed;
  }

  if (keyCode == UP_ARROW) {
    y2 = y2 - planform_speed;
  } else if (keyCode == DOWN_ARROW) {
    y2 = y2 + planform_speed;
  }
}
