//mapa.js
import { iniciarMovimiento, detenerMovimiento, moverMishimon } from "./movimiento.js";

let lienzo, mapa, fondoMapa;
let mishimonJugador = null;
let mishimonEnemigo = null;

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

function asignarMishimonEnemigo(mishimon) {
    mishimonEnemigo = {
        nombre: mishimon.nombre,
        mapaFoto: new Image(),
        x: 300, // Posición inicial
        y: 300,
        ancho: 80,
        alto: 80,
    };
    mishimonEnemigo.mapaFoto.src = mishimon.foto;
}

function actualizarCanvas() {
    pintarMishimones();
    requestAnimationFrame(actualizarCanvas);
}

function pintarMishimones() {
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(fondoMapa, 0, 0, mapa.width, mapa.height);

    // Dibujar el Mishimon del jugador
    if (mishimonJugador && mishimonJugador.mapaFoto.complete) {
        lienzo.drawImage(
            mishimonJugador.mapaFoto,
            mishimonJugador.x,
            mishimonJugador.y,
            mishimonJugador.ancho,
            mishimonJugador.alto
        );
    }

    // Dibujar el Mishimon enemigo
    if (mishimonEnemigo && mishimonEnemigo.mapaFoto.complete) {
        lienzo.drawImage(
            mishimonEnemigo.mapaFoto,
            mishimonEnemigo.x,
            mishimonEnemigo.y,
            mishimonEnemigo.ancho,
            mishimonEnemigo.alto
        );
    }
}

// Ajustes de canvas para responsive
function ajustarCanvas() {
    const anchoDeseado = window.innerWidth * 0.8;
    const altoDeseado = window.innerHeight * 0.5;
    const tamañoFinal = Math.min(anchoDeseado, altoDeseado, 500);

    mapa.width = tamañoFinal;
    mapa.height = tamañoFinal;

    ajustarElementosCanvas(tamañoFinal);
    pintarMishimones();
}


function ajustarElementosCanvas(nuevoTamaño) {
    if (!mishimonJugador) return;
    const escala = nuevoTamaño / 500;
    mishimonJugador.ancho = 80 * escala;
    mishimonJugador.alto = 80 * escala;
}

// Exportar funciones necesarias
export { iniciarMapa, asignarMishimonJugador, asignarMishimonEnemigo, pintarMishimones, mishimonJugador, mishimonEnemigo };


