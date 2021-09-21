var cntrlCurva;
var cntrlPisos;
function setup() {
  let renderer =createCanvas(400, 400, WEBGL);
  renderer.parent("bloque");
  CntrlRot = createSlider(0, PI / 20, 0, 0.01);
  CntrlRot.parent("bloque");
  CntrlRot.position(20, 20, WEBGL);
  createEasyCam();
  document.oncontextmenu = () => false;
  stroke(220);
  CntrlRot.style('position', 'relative');
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
