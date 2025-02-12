// 📌 ui.js - Manejo de la interfaz del juego

// Función para mostrar mensajes de combate en la interfaz
function crearMensaje(resultado) {
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = resultado;
}

// Función para mostrar el mensaje final y desactivar botones de ataque
function crearMensajeFinal(resultadoFinal) {
    document.getElementById("reiniciar").style.display = "flex";
    document.getElementById("resultado").innerHTML = resultadoFinal;

    // 🔴 Desactivar botones de ataque al finalizar el juego
    document.querySelectorAll(".boton-de-ataque").forEach(boton => {
        boton.disabled = true;
    });
}

// Revisar si alguien ha perdido y mostrar el mensaje final
function revisarVidas(vidasJugador, vidasEnemigo, rondasJugadas) {
    if (vidasJugador === 0 && vidasEnemigo === 0) {
        crearMensajeFinal("⚔️ ¡Doble KO! EMPATE ⚔️");
    } else if (vidasJugador === 0) {
        crearMensajeFinal("💀 PERDISTE LA PARTIDA 💀");
    } else if (vidasEnemigo === 0) {
        crearMensajeFinal("🎉 GANASTE LA PARTIDA! 🎉");
    } else if (rondasJugadas >= 5) {
        // Verificar quién tiene más vidas después de los 5 turnos
        if (vidasJugador > vidasEnemigo) {
            crearMensajeFinal("🎉 GANASTE LA PARTIDA! 🎉");
        } else if (vidasEnemigo > vidasJugador) {
            crearMensajeFinal("💀 PERDISTE LA PARTIDA 💀");
        } else {
            crearMensajeFinal("⚔️ EMPATE FINAL ⚔️");
        }
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    location.reload();
}

// 📌 Exportar funciones para usarlas en otros archivos
export { crearMensaje, crearMensajeFinal, reiniciarJuego, revisarVidas };

