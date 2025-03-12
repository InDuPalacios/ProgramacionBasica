// collisions.js
import { mostrarVentanaBatalla } from "./interfazBatalla.js";
import { mishimonJugadorSet, mishimonEnemigoSet } from "./ctrlMishimonGame.js";

let colisionDetectada = false; // Para evitar múltiples activaciones de la ventana emergente

function detectarColision() {
    if (!mishimonJugadorSet || !mishimonEnemigoSet) {
        console.warn("⚠ No se han inicializado los Mishimones.");
        return;
    }

    const rangoProximidad = 40;
    const distanciaX = Math.abs(mishimonJugadorSet.x - mishimonEnemigoSet.x);
    const distanciaY = Math.abs(mishimonJugadorSet.y - mishimonEnemigoSet.y);

    if (distanciaX < rangoProximidad && distanciaY < rangoProximidad) {
        if (!colisionDetectada) { 
            colisionDetectada = true;
            console.log("🔥 ¡Colisión detectada! Mostrando menú de ataques.");
            mostrarVentanaBatalla();
        }
    } else {
        colisionDetectada = false;
    }
}


export { detectarColision };
