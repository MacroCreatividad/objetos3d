var cntrlCurva;
function setup() {
  createCanvas(400, 400, WEBGL);
  createEasyCam();
  document.oncontextmenu = () => false;
  cntrlCurva = createSlider(4.0, 50.0, 4, 1.0);
  cntrlCurva.position(10, 10);
  stroke(80);
}

function draw() {
  background(256, 180, 00);
  let p = createVector(0, 0);
  let r = 150;
  let cant = cntrlCurva.value();

  beginShape(TRIANGLE_STRIP);

  for (let a = 0; a <= TWO_PI + 0.1; a = a + TWO_PI / cant) {
    vertex(p.x, p.y);
    vertex(p.x + cos(a) * r, p.y + sin(a) * r);
  }

  endShape();
}
