// 📌  renderController.js - 

import { canvasMapaSet, } from "../engineGraphic/mapa/mapa.js";
import { seleccionarMascotaEnemigo } from "../ui/functions/ctrlMishimonGame.js";
import { pintarMishimones } from "../ui/functions/pintarPersonajes.js";
import { canvasData } from "../data/sharedData.js";
import { configurarTeclado, configurarBotones } from "../ui/functions/inputs.js";

function iniciarMapa() {
    canvasMapaSet();
    seleccionarMascotaEnemigo();
    console.log("📌 Iniciando mapa...");

    // ⏳ Esperar hasta que el mapa esté cargado antes de pintar
    const esperarMapaCargado = setInterval(() => {
        if (canvasData.mapaCargado) {
            clearInterval(esperarMapaCargado);
            pintarMishimones();
            configurarTeclado();
            configurarBotones();
        }
    }, 100);
}

export {iniciarMapa};