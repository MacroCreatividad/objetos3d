var cntrlCurva;
var cntrlPisos;
function setup() {
  createCanvas(400, 400, WEBGL);
  createEasyCam();
  document.oncontextmenu = () => false;
  cntrlCurva = createSlider(4.0, 50.0, 20, 1.0);
  cntrlCurva.position(10, 10);
  cntrlPisos = createSlider(1.0, 10.0, 1, 1.0);
  cntrlPisos.position(10, 30);
    stroke(100);
}

function draw() {
  background(256, 100, 00);
  let p = createVector(0, 0);
  let r = 150;
  let cant = cntrlCurva.value();
  let pisos = cntrlPisos.value();
  let altura = 50;
  translate(0, 200, -200);
  rotateX(1);

  beginShape(TRIANGLE_STRIP);

  for (let a = 0; a <= TWO_PI + 0.1; a = a + TWO_PI / cant) {
    vertex(p.x, p.y);
    vertex(p.x + cos(a) * r, p.y + sin(a) * r);
  }
  endShape();

  for (let i = 1; i <= pisos; i = i + 1) {
    beginShape(TRIANGLE_STRIP);

    for (let a = 0; a <= TWO_PI + 0.1; a = a + TWO_PI / cant) {
      let np = createVector(p.x + cos(a) * r, p.y + sin(a) * r);

      vertex(np.x, np.y, altura * (i - 1));
      vertex(np.x, np.y, altura * i);
    }

    endShape();
  }
}
