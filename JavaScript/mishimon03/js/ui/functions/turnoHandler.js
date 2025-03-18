//turnoHandler.js

import { registrarAtaques } from "./ataqueHandler.js";
import { actualizarVidasEnElDOM } from "./interfazBatalla.js";

import { 
    estadoBatalla, 
    gameState,
    ataquesEnemigoDisponibles } from "../../data/sharedData.js";

import { determinarResultadoCombate } from "./interfazBatalla.js";

import { 
    crearMensajeFinal,
    crearMensaje } from "./msgMishimonGame.js";

import { deshabilitarBotonAtaqueEnemigo } from "./ataqueHandler.js";


function ejecutarTurno() {
    console.log(`🚀 Turno iniciado: 
        🎯 Jugador: ${estadoBatalla.ataqueSeleccionadoJugador}, 
        👾 Enemigo: ${estadoBatalla.ataqueSeleccionadoEnemigo}`);

    let resultadoTexto = determinarResultadoCombate();
    
    gameState.rondasJugadas++;

    actualizarVidasEnElDOM(); 
    crearMensaje(resultadoTexto);
    registrarAtaques();
    deshabilitarBotonAtaqueEnemigo(
        estadoBatalla.ataqueSeleccionadoEnemigo, 
        "#divAtaquesDisponiblesEnemigo");

    verificarFinDelJuego(); // Revisamos si el juego terminó
}

function verificarFinDelJuego() {
    if (gameState.rondasJugadas >= 5 >= 5 || 
        gameState.vidasJugador === 0 || 
        gameState.vidasEnemigo === 0 || 
        ataquesEnemigoDisponibles.length === 0) {
        if (gameState.vidasJugador > gameState.vidasEnemigo) {
            crearMensajeFinal(" GANASTE LA PARTIDA! 🎉🎉");
        } else if (gameState.vidasEnemigo > gameState.vidasJugador) {
            crearMensajeFinal("💀 PERDISTE LA PARTIDA! 💀");
        } else {
            crearMensajeFinal("⚔️ ¡Doble KO! EMPATE ⚔️");
        }
    }
}

export { ejecutarTurno };
