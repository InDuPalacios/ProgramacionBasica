//mapa.js
import { iniciarMovimiento, detenerMovimiento, moverMishimon } from "./movimiento.js";

let lienzo, mapa, fondoMapa;
let mishimonJugador = null;

function iniciarMapa() {
    mapa = document.getElementById("mapa");
    lienzo = mapa.getContext("2d");
    fondoMapa = new Image();
    fondoMapa.src = "./assets/escene.png";

    fondoMapa.onload = () => {
        ajustarCanvas(); // 🔥 Ajustar el tamaño del canvas antes de empezar
        requestAnimationFrame(actualizarCanvas);
    };

    // Ajustar el canvas cuando se cambia el tamaño de la ventana
    window.addEventListener("resize", ajustarCanvas);
}

function asignarMishimonJugador(mishimon) {
    mishimonJugador = {
        nombre: mishimon.nombre,
        mapaFoto: new Image(),
        x: 100, // Posición inicial
        y: 100,
        ancho: 50,
        alto: 50,
    };
    mishimonJugador.mapaFoto.src = mishimon.foto;
}

function actualizarCanvas() {
    pintarMishimon();
    requestAnimationFrame(actualizarCanvas);
}


function pintarMishimon() {
    if (!mishimonJugador || !mishimonJugador.mapaFoto.complete) return;

    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(fondoMapa, 0, 0, mapa.width, mapa.height);

    // 🔥 Dibujar el Mishimon del jugador ajustado al tamaño del canvas
    lienzo.drawImage(
        mishimonJugador.mapaFoto,
        mishimonJugador.x,
        mishimonJugador.y,
        mishimonJugador.ancho,
        mishimonJugador.alto
    );
}


function ajustarCanvas() {
    const anchoDeseado = window.innerWidth * 0.8;
    const altoDeseado = window.innerHeight * 0.5;
    const tamañoFinal = Math.min(anchoDeseado, altoDeseado, 500);

    mapa.width = tamañoFinal;
    mapa.height = tamañoFinal;

    ajustarElementosCanvas(tamañoFinal);
    pintarMishimon();
}


function ajustarElementosCanvas(nuevoTamaño) {
    if (!mishimonJugador) return;
    const escala = nuevoTamaño / 500;
    mishimonJugador.ancho = 80 * escala;
    mishimonJugador.alto = 80 * escala;
}

// Exportar funciones necesarias
export { iniciarMapa, asignarMishimonJugador, pintarMishimon, mishimonJugador };
