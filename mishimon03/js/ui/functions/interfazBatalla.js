// interfazBatalla.js

import { ataqueAleatorioEnemigo } from "./ctrlMishimonGame.js";
import { ejecutarTurno } from "./turnoHandler.js";


import { 
    ataquesEnemigoDisponibles,
    divAreaTarjetasAtaques,
    estadoBatalla,
    gameState } from "../../data/sharedData.js";

// Función para mostrar el modal
function mostrarVentanaBatalla() {
    sectionSeleccionarAtaque.style.display = "block";
    modalOverlay.style.display = "block";
    console.log("🎬 Ventana de batalla mostrada. Esperando selección del jugador...");
}

function mostrarBotonesAtaque(ataquesJugador) {
    divAreaTarjetasAtaques.innerHTML = `<h2 class="subtitulo">Tus Ataques:</h2>`; 

    ataquesJugador.forEach(ataque => {
        const btnAtaque = document.createElement("button");
        btnAtaque.id = ataque.id;
        btnAtaque.classList.add("boton-de-ataque");
        btnAtaque.innerText = ataque.nombre;

        // Evento al hacer clic (ataque)
        btnAtaque.addEventListener("click", () => {
            if (btnAtaque.disabled) return;

            estadoBatalla.ataqueSeleccionadoJugador = ataque.nombre;
            console.log(`🎯 Ataque seleccionado por el jugador: ${estadoBatalla.ataqueSeleccionadoJugador}`);

            // Marcar botón como usado (deshabilitado)
            btnAtaque.disabled = true;
            btnAtaque.classList.add("boton-deshabilitado");

            // 🛠 El enemigo selecciona su ataque automáticamente
            estadoBatalla.ataqueSeleccionadoEnemigo = ataqueAleatorioEnemigo();

            ejecutarTurno();
        });

        divAreaTarjetasAtaques.appendChild(btnAtaque);
    });
    console.log("✅ Botones de ataque generados correctamente con:", ataquesJugador );
}

function actualizarVidasEnElDOM() {
    document.getElementById("pContadorVidasJugador").innerHTML = gameState.vidasJugador;
    document.getElementById("pContadorVidasEnemigo").innerHTML = gameState.vidasEnemigo;
}

function determinarResultadoCombate() {;
    if (!estadoBatalla.ataqueSeleccionadoJugador || !estadoBatalla.ataqueSeleccionadoEnemigo) {
         console.error("❌ Error: ataqueSeleccionadoJugador o ataqueSeleccionadoEnemigo no están definidos.");
        return "⚠ Error en la batalla, intenta de nuevo.";
    }

    if (estadoBatalla.ataqueSeleccionadoJugador === estadoBatalla.ataqueSeleccionadoEnemigo) {
        return "Empate!!";
    } else if (
        (estadoBatalla.ataqueSeleccionadoJugador === "🔥" && estadoBatalla.ataqueSeleccionadoEnemigo === "🌱") ||
        (estadoBatalla.ataqueSeleccionadoJugador === "💧" && estadoBatalla.ataqueSeleccionadoEnemigo === "🔥") ||
        (estadoBatalla.ataqueSeleccionadoJugador === "🌱" && estadoBatalla.ataqueSeleccionadoEnemigo === "💧")
    ) {
        gameState.vidasEnemigo--;  
        return "Ganaste!! 🎉";
    } else {
        gameState.vidasJugador--;
        return "Perdiste!! 😢";
    }
}

function cerrarVentanaBatalla() {
    sectionSeleccionarAtaque.style.display = "none"; // Ocultar el modal
    modalOverlay.style.display = "none"; // Ocultar el fondo oscuro
    console.log("❌ Cerrando el menú de selección de ataque.");
}

if (btnCerrarBatalla) {
    btnCerrarBatalla.addEventListener("click", cerrarVentanaBatalla);
    } else {
       console.warn("⚠ No se encontró el botón 'btnCerrarBatalla'. Asegúrate de que el HTML lo carga antes.");
}


// Exportar las funciones para su uso en otros archivos
export { 
    mostrarVentanaBatalla, 
    cerrarVentanaBatalla, 
    mostrarBotonesAtaque, 
    determinarResultadoCombate,
    actualizarVidasEnElDOM };
