

function ajustarCanvas() {
    canvasMapa.width = canvasMapa.clientWidth; 
    canvasMapa.height = canvasMapa.clientHeight; 
}

// function ajustarCanvas() {
//     if (!canvasMapa) return;

//     const anchoDeseado = window.innerWidth * 0.8;
//     const altoDeseado = window.innerHeight * 0.5;
//     const tamañoFinal = Math.min(anchoDeseado, altoDeseado, 500);

//     canvasMapa.width = tamañoFinal;
//     canvasMapa.height = tamañoFinal;

//     ajustarElementosCanvas(tamañoFinal);
// }


function ajustarElementosCanvas(nuevoTamaño) {
    if (!mishimonJugador) return;
    const escala = nuevoTamaño / 500;
    mishimonJugador.ancho = 80 * escala;
    mishimonJugador.alto = 80 * escala;
    mishimonJugador.x *= escala;
    mishimonJugador.y *= escala;
}


export { ajustarCanvas };