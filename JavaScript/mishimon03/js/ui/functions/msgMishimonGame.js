// 📌 ui.js - Manejo de la interfaz del juego

import { 
    pResultado, 
    divMensajes,
    gameState } from "../../data/sharedData.js";

// Función para mostrar mensajes de combate en la interfaz
function crearMensaje(resultado) {
    let historialContainer = document.querySelector(".historial-rondas-container");

    // Si no existe, crearlo dinámicamente
    if (!historialContainer) {
        historialContainer = document.createElement("div");
        historialContainer.classList.add("historial-rondas-container");

        // Insertarlo después del mensaje final
        document.getElementById("pResultado").after(historialContainer);
    }

    // Agregar cada ronda a la lista de historial
    let nuevaRonda = document.createElement("p");
    nuevaRonda.classList.add("historial-ronda");
    nuevaRonda.innerHTML = `Ronda ${gameState.rondasJugadas}: ${resultado}`;
    
    historialContainer.appendChild(nuevaRonda);
}


// Función para mostrar el mensaje final y desactivar botones de ataque
function crearMensajeFinal(resultadoFinal) {
    document.getElementById("sectionBtnReiniciar").style.display = "flex";
    pResultado.innerHTML = resultadoFinal;

    // 🔴 Desactivar botones de ataque al finalizar el juego
    document.querySelectorAll(".boton-de-ataque").forEach(boton => {
        boton.disabled = true;
    });
}

// 📌 Exportar funciones para usarlas en otros archivos
export { crearMensaje, crearMensajeFinal };
