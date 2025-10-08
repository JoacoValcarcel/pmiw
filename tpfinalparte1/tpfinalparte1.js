
let fuente, fuente2;
let imagenes = [];
let cantidad = 25;
let indiceActual = 0;
let misTextos;
let musica;

function preload() {
  fuente = loadFont("data/OpenSans-Bold.ttf");
  fuente2 = loadFont("data/OpenSans-Italic.ttf");
  misTextos = loadStrings("data/dialogos.txt");
  soundFormats('mp3');
  musica = loadSound("data/MusicaSoldadito.mp3");
  musica.setVolume(0.3);

  for (let i = 0; i < cantidad; i++) {
    imagenes[i] = loadImage("data/FT" + (i+1) + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER);
}


function draw() {
  background(200);

  dibujarPantalla();

  if (indiceActual == 0) {
    dibujarBotonInicio();
    musica.setVolume(0.3);
 // musica.play();
  } else if (indiceActual == 5) {
    dibujarBotonDecision5();
  } else if (indiceActual == 15) {
    dibujarBotonDecision9();
  } else if (indiceActual == 11) {
    dibujarBotonFin();
  } else if (indiceActual == 19) {
    dibujarBotonFin();
  } else if (indiceActual == 24) {
    dibujarBotonReiniciar();
  } else {
    dibujarBotonSiguiente();
  }
}

function mouseClicked() {
  logicaBoton();
}
