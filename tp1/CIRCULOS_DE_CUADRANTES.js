function Circulos1C( posXExtra, posYExtra) {
  for (let x=0; x<quad1; x++) { 
    for (let y=0; y<quad1; y++) {
      if (esPar(x, y)) {
        fill(Blanco, 255, Blanco);
      } else {
        fill(numero1, numero2, numero3);
      }
      push();
      ellipse(x*tam+posXExtra, y*tam+posYExtra, zoom, zoom);
      pop();
    }
  }
}
// Ciruculos 2do cuadrante
function Circulos2C(posXExtra, posYExtra) {
  for (let x=5; x>quad1 && x<cant; x++) { 
    for (let y=5; y>quad1 && y<cant; y++) {
      if (esPar(x, y)) {
        fill(Blanco, 255, Blanco);
      } else {
        fill(numero1, numero2, numero3);
      }
      ellipse(x*tam+posXExtra, y*tam+posYExtra, zoom, zoom);
    }
  }
}
// Ciruculos 3er cuadrante
function Circulos3C( posXExtra,  posYExtra) {
  for (let x=0; x<quad1; x++) { 
    for (let y=5; y>quad1 && y<cant; y++) {
      if (esPar(x, y)) {
        fill(Blanco, 255, Blanco);
      } else {
        fill(numero1, numero2, numero3);
      }
      ellipse(x*tam+posXExtra, y*tam+posYExtra, zoom, zoom);
    }
  }
}
// Ciruculos 4to cuadrante
function Circulos4C( posXExtra,  posYExtra) {
  for (let x=5; x>quad1 && x<cant; x++) { 
    for (let y=0; y<quad1; y++) {
      if (esPar(x, y)) {
        fill(Blanco, 255, Blanco);
      } else {
        fill(numero1, numero2, numero3);
      }
      ellipse(x*tam+posXExtra, y*tam+posYExtra, zoom, zoom);
    }
  }
}
