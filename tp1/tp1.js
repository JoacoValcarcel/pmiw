
//https://youtu.be/VVbRA3xzLjw

let img1;
let cant = 9, tam;
let quad1 = 4, quad2 =5;
let Negro = 0, Blanco = 255;
let rotation = 0, vel = 0.3, zoom = 12;
let numero1 = 0, numero2 = 0, numero3 = 0;

function preload() {
 img1 = loadImage("data/MarioRabara.png");
}

function setup() {
createCanvas(800, 400);
  tam = (width/2)/cant;
  rectMode(CENTER);
}


function draw() {
  background(255);
  strokeWeight(0);
  image(img1, 0, 0);

  dibujarTablero ();
  circulosTablero();

  if (mouseX>width/2) {
    rotation = mouseX*vel;
    zoom = map(mouseY, 0, width, 5, 40);
  }
}
function keyPressed() {

  if (key== '1') {
    numero1 = colorAleatorio();
    numero2 = colorAleatorio();
    numero3= colorAleatorio();
    println("Presionaste la tecla 1");
  }
  if (key== '2') {
    Blanco = cambiarColor();
    println("Presionaste la tecla 2");
  }
}

function mouseClicked() {
  if (mouseX<width/2) {
    Blanco = 255;
    Negro = 0;
    rotation = 0;
    zoom = 12;
    numero1 = 0;
    numero2 = 0;
    numero3 = 0;
    println("Reseteaste el programa");
  }
}
