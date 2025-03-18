// 📌  renderController.js - 

import { canvasMapaSet, } from "../engineGraphic/mapa/mapa.js";
import { pintarMishimones } from "../ui/functions/pintarPersonajes.js";
import { canvasData } from "../data/sharedData.js";
import { detectarColision } from "../ui/functions/collisions.js";

function esperarCargaMapa(callback) {
    const esperarMapaCargado = setInterval(() => {
        if (canvasData.mapaCargado) {
            clearInterval(esperarMapaCargado);
            callback();
        }
    }, 100);
}

function actualizarJuego() {
    pintarMishimones();
    detectarColision();
    requestAnimationFrame(actualizarJuego);
}

function iniciarMapa() {
    canvasMapaSet();
    esperarCargaMapa(actualizarJuego);
}

export { iniciarMapa };

