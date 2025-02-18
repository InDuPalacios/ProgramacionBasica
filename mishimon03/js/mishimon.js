import { mishimonJugador, mishimonEnemigo } from './class/characters/datamishimon.js';

import { crearMensaje } from "./ui/functions/msgMishimonGame.js";
import { revisarVidas } from "./class/mechanics/winCondition.js";

import { asignarMishimonJugador, iniciarMapa, generarEnemigos } from './mapa.js';
 
// Variables globales

let mishimones = mishimonJugador;
let enemigos = mishimonEnemigo;
let ataqueJugador, ataqueEnemigo;
let vidasJugador = 3, vidasEnemigo = 3;
let ataquesJugadorDisponibles = [], ataquesEnemigoDisponibles = [];
let rondasJugadas = 0;

const contenedorAtaquesJugador = document.getElementById("divAtaquesPosiblesJugador");
const contenedorAtaquesEnemigo = document.getElementById("divAtaquesPosiblesEnemigo");
const contenedorAtaquesEnemigoDisponibles = document.getElementById("divAtaquesDisponiblesEnemigo");


function combate() {
    const resultadoTexto = 
        (ataqueJugador === ataqueEnemigo) ? "Es un EMPATE!!"
        : (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") ||
          (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") ||
          (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego")
        ? "GANASTE!! 🎉" : "PERDISTE!! 😢";

    // Restar vida dependiendo del resultado
    if (resultadoTexto.includes("GANASTE")) {
        vidasEnemigo--; // Enemigo pierde vida
    } else if (resultadoTexto.includes("PERDISTE")) {
        vidasJugador--; // Jugador pierde vida
    }
    
    rondasJugadas++; // Incrementamos el contador de rondas
    
    // Actualizar vidas en el DOM
    document.getElementById("pContadorVidasJugador").innerHTML = vidasJugador;
    document.getElementById("pContadorVidasEnemigo").innerHTML = vidasEnemigo;

    // Mostrar mensaje y registrar los ataques en el marcador
    crearMensaje(resultadoTexto);
    registrarAtaques();
    mostrarAtaquesEnemigo();

    // Revisar si alguien ha perdido o si se han jugado 5 rondas
    if (rondasJugadas >= 5 || vidasJugador === 0 || vidasEnemigo === 0) {
        revisarVidas(vidasJugador, vidasEnemigo, rondasJugadas);
    }
}

// Función para registrar los ataques en el marcador
function registrarAtaques() {
    let ataqueJugadorElem = document.createElement("p");
    ataqueJugadorElem.innerText = ataqueJugador;
    contenedorAtaquesJugador.appendChild(ataqueJugadorElem);

    let ataqueEnemigoElem = document.createElement("p");
    ataqueEnemigoElem.innerText = ataqueEnemigo;
    contenedorAtaquesEnemigo.appendChild(ataqueEnemigoElem);
}



