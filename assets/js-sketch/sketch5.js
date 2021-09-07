var CntrlRot;
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
/*
Por último en la aplicación de escritorio y en la web van a encontrar otros modificadores. 
La idea es que los controles permitan al usuario explorar de forma sencilla las formas. Por eso los nombres de los controles no son del todo descrioptivos. Queremos que te animes a ver que efecto generan
En este objeto que te presentamos a continuación..¿Qué efecto produce el control?

Yá sabes como funciona nuestro programa, te invitamos a que lo pruebes, generes tus objetos, los imprimas en 3D, y nos etiquetes en las redes!

*/

function draw() {
  background(200, 0, 0);
  let p = createVector(0, 0);
  let rp = 150;
  let cant = 50;
  let frec = 1;
  let petalos = 5;
  let rot = CntrlRot.value();
  let altura = 15;
  translate(0, 200, -200);
  rotateX(1);
  lights();
    normalMaterial();
  beginShape(TRIANGLE_STRIP);
  for (let a = 0; a <= TWO_PI * 1.01; a = a + TWO_PI / cant) {
    let r = rp + rp * (sin(a * petalos) * 0.1);
    vertex(p.x, p.y);
    vertex(p.x + cos(a) * r, p.y + sin(a) * r);
    normal(p.x, p.y, 1.0);
  }
  endShape(CLOSE);
  let r;
  for (let i = 0; i <= 30; i = i + 1) {
    beginShape(TRIANGLE_STRIP);

    for (let a = 0; a <= TWO_PI * 1.01; a = a + TWO_PI / cant) {
      let r = rp + rp * (sin(a * petalos) * 0.1);
      let r2 = r * (sin((i * TWO_PI * frec) / 30) * 0.5 + 1);
      let np = createVector(
        p.x + cos(a + rot * i) * r2,
        p.y + sin(a + rot * i) * r2
      );
      vertex(np.x, np.y, altura * i);

      let r3 = r * (sin(((i + 1) * TWO_PI * frec) / 30) * 0.5 + 1);
      let np2 = createVector(
        p.x + cos(a + rot * (i + 1)) * r3,
        p.y + sin(a + rot * (i + 1)) * r3
      );

      vertex(np2.x, np2.y, altura * (i + 1));
       normal(np2.x, np2.y, 0.8);
    }

    endShape(CLOSE);
  }
}
