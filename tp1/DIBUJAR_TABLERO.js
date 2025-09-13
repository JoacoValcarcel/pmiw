function dibujarTablero() {
  for (let x=0; x<cant; x++) { // ciclo para crear grilla (filas)
    for (let y=0; y<cant; y++) { // ciclo para crear grilla (columnas)
      if (esPar(x, y)) {
        fill(numero1, numero2, numero3);
      } else {
        fill(Blanco, 255, Blanco);
      }
      push();
      translate(x*tam+width/2 +tam/2, y*tam+tam/2);
      rotate(radians(rotation));
      rect(0, 0, tam, tam);
      pop();
    }
  }
}
