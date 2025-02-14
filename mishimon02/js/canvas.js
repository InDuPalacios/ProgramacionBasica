// canvas.js

import { iniciarMovimiento, detenerMovimiento, moverMishimon } from "./movimiento.js";

const mapa = document.getElementById("mapa");
let lienzo = mapa.getContext("2d");
let mishimonJugador = null;
let intervaloMovimiento;

// Función para dibujar el Mishimon en el canvas
function pintarMishimon() {
    if (!mishimonJugador) return; 

    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(
        mishimonJugador.mapaFoto,
        mishimonJugador.x,
        mishimonJugador.y,
        mishimonJugador.ancho,
        mishimonJugador.alto
    );
}

// Función para mover al Mishimon en cualquier dirección
function moverMishimon(direccion) {
    if (!mishimonJugador) return;
    const velocidad = 5; 

    if (direccion === "up") mishimonJugador.y -= velocidad;
    if (direccion === "down") mishimonJugador.y += velocidad;
    if (direccion === "left") mishimonJugador.x -= velocidad;
    if (direccion === "right") mishimonJugador.x += velocidad;

    pintarMishimon();
}

// Función para iniciar el movimiento continuo
function iniciarMovimiento(direccion) {
    detenerMovimiento();
    intervaloMovimiento = setInterval(() => {
        moverMishimon(direccion);
    }, 50);
}

// Función para detener el movimiento
function detenerMovimiento() {
    clearInterval(intervaloMovimiento);
}

// Ajustar el tamaño del canvas dinámicamente
function ajustarCanvas() {
    const anchoDeseado = window.innerWidth * 0.8;
    const altoDeseado = window.innerHeight * 0.5;
    const tamañoFinal = Math.min(anchoDeseado, altoDeseado, 500);

    mapa.width = tamañoFinal;
    mapa.height = tamañoFinal;

    pintarMishimon();
}

// Eventos globales
window.iniciarMovimiento = iniciarMovimiento;
window.detenerMovimiento = detenerMovimiento;

window.addEventListener("resize", ajustarCanvas);
window.addEventListener("load", ajustarCanvas);
window.addEventListener("load", pintarMishimon);


