// movimineto.js - inputs para movimiento de mishimon

import { 
    canvasData, 
    canvasMapa } from "../../data/sharedData.js";

import { mishimonJugadorSet } from "../../ui/functions/ctrlMishimonGame.js";
import { pintarMishimones } from "../../ui/functions/pintarPersonajes.js";

// 🔹 Función para mover el Mishimon en el `canvas`
function moverMishimon() {
    if (!mishimonJugadorSet || !canvasData.movimientoActivo) return;

    // ✅ Mueve el Mishimon en la dirección actual
    mishimonJugadorSet.x += canvasData.direccion.x * canvasData.velocidad;
    mishimonJugadorSet.y += canvasData.direccion.y * canvasData.velocidad;

    // ✅ Limpiar y volver a pintar el canvas
    canvasData.lienzo.clearRect(0, 0, canvasMapa.width, canvasMapa.height);
    pintarMishimones();

    // ✅ Llamamos de nuevo para mantener el movimiento activo
    requestAnimationFrame(moverMishimon);
}

// 🔹 Función para iniciar el movimiento continuo
function iniciarMovimiento(direccionMovimiento) {
    switch (direccionMovimiento) {
        case "up":
            canvasData.direccion.y = -1;
            break;
        case "down":
            canvasData.direccion.y = 1;
            break;
        case "left":
            canvasData.direccion.x = -1;
            break;
        case "right":
            canvasData.direccion.x = 1;
            break;
    }

    if (!canvasData.movimientoActivo) {
        canvasData.movimientoActivo = true;
        requestAnimationFrame(moverMishimon);
    }
}

// 🔹 Función para detener el movimiento
function detenerMovimiento() {
    canvasData.direccion.x = 0;
    canvasData.direccion.y = 0;
    canvasData.movimientoActivo = false;
}


export { iniciarMovimiento, detenerMovimiento };
