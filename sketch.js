let points = [];

const num = 15;
const startRad = 23;

const speed = 0.3;

let done = false;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background("#001524");
  
  
  noStroke(1);
  
  createBurst();
}

function draw() {
  if(!done) {
    points.forEach(point => {
      point.update();
      point.draw();
      if(point.rad < 0) {
        done = true;
      }
    });
  }
}

function mouseReleased() {
  createBurst();
}

function createBurst() {
  //background("#000814");
  done = false;
  points = [];
  
  
  
  for(let i = 0; i < num; i ++) {
    points.push(new Point(width/2, height/2, random(TAU), startRad));
  }
}

class Point {
  constructor(x, y, ang, rad) {
    this.x = x;
    this.y = y;
    this.ang = ang;
    this.rad = rad;
  }
  
  update() {
    this.rad -= random(0.5, 0.0003)
    this.ang += random(-PI/6, PI/6);
    
    this.x += cos(this.ang) * this.rad * speed;
    this.y += sin(this.ang) * this.rad * speed;
  }
  
  draw() {
    const startColor = color("#7209b7");
    const endColor = color("#b9fbc0");
    
  
    
    const col = lerpColor(startColor, endColor, map(this.rad, startRad, 0, 0, 1));
    fill(col);
    circle(this.x, this.y, this.rad * 2);
    
    
  }
}