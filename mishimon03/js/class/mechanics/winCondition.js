// 📌 Core Mechanics - Manejo de Condicion de victoria

import { crearMensajeFinal } from "../../ui/functions/msgMishimonGame.js";

// Revisar si alguien ha perdido y mostrar el mensaje final
function revisarVidas(
    vidasJugador, 
    vidasEnemigo, 
    rondasJugadas
) {
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

// 📌 Exportar funciones para usarlas en otros archivos
export { revisarVidas };
