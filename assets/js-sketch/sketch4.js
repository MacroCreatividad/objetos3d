
var CntrlFrec;
var CntrlPetalos;
function setup() {
  createCanvas(400, 400, WEBGL);

  CntrlFrec = createSlider(00, 3.0, 0.5, 0.1);
  CntrlFrec.position(10, 10);
  CntrlPetalos = createSlider(2, 10, 5, 1);
  CntrlPetalos.position(10, 30);

  createEasyCam();
  document.oncontextmenu = () => false;
  stroke(150);
}

function draw() {
  background(200, 0, 0);
  let p = createVector(0, 0);
  let rp = 150;
  let cant = 50;
  let frec = CntrlFrec.value();
  let petalos = CntrlPetalos.value();
  let altura = 15;
  translate(0, 200, -200);
  rotateX(1);

  beginShape(TRIANGLE_STRIP);

  for (let a = 0; a <= TWO_PI * 1.01; a = a + TWO_PI / cant) {
    let r = rp + rp * (sin(a * petalos) * 0.1);
    vertex(p.x, p.y);
    vertex(p.x + cos(a) * r, p.y + sin(a) * r);
  }
  endShape(CLOSE);

  for (let i = 0; i <= 30; i = i + 1) {
    beginShape(TRIANGLE_STRIP);

    for (let a = 0; a <= TWO_PI * 1.01; a = a + TWO_PI / cant) {
      let r = rp + rp * (sin(a * petalos) * 0.1);
      let r2 = r * (sin((i * TWO_PI * frec) / 30) * 0.5 + 1);
      let np = createVector(p.x + cos(a) * r2, p.y + sin(a) * r2);
      vertex(np.x, np.y, altura * i);

      let r3 = r * (sin(((i + 1) * TWO_PI * frec) / 30) * 0.5 + 1);
      let np2 = createVector(p.x + cos(a) * r3, p.y + sin(a) * r3);

      vertex(np2.x, np2.y, altura * (i + 1));
    }

    endShape(CLOSE);
  }
}
