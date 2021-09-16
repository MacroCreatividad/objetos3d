
var CntrlFrec;

function setup() {
  createCanvas(400, 400, WEBGL);

  CntrlFrec = createSlider(0.0, 2.0, 0, 0.01);
  CntrlFrec.position(10, 10);
  createEasyCam();
  document.oncontextmenu = () => false;
    stroke(180);
}

function draw() {
  background(256, 0, 100);
  let p = createVector(0, 0);
  let r = 150;
  let cant = 35
  let frec = CntrlFrec.value();
  let altura = 15;
  translate(0, 200, -200);
  rotateX(1);

  beginShape(TRIANGLE_STRIP);

  for (let a = 0; a <= TWO_PI+0.1; a = a + TWO_PI / cant) {
    vertex(p.x, p.y);
    vertex(p.x + cos(a) * r, p.y + sin(a) * r);
  }
  endShape();

  for (let i = 0; i <= 30; i = i + 1) {
    beginShape(TRIANGLE_STRIP);

    for (let a = 0; a <= TWO_PI+0.1; a = a + TWO_PI / cant) {
      let r2 = r * (sin((i * TWO_PI*frec) / 30) * 0.5 + 1);
      let np = createVector(p.x + cos(a) * r2, p.y + sin(a) * r2);
      vertex(np.x, np.y, altura * i);

      let r3 = r * (sin(((i + 1) * TWO_PI*frec) / 30) * 0.5 + 1);
      let np2 = createVector(p.x + cos(a) * r3, p.y + sin(a) * r3);

      vertex(np2.x, np2.y, altura * (i + 1));
    }

    endShape();
  }
}
