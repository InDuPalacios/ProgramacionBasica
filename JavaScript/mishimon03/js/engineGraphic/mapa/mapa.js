// 📌  mapa.js - 

/* import { 
    detectarColision, 
    mostrarVentanaEmergente, 
    cerrarVentanaEmergente } from "../../batalla.js"; */

import { mishimonJugadorSet } from "../../ui/functions/ctrlMishimonGame.js";
    
import { ajustarCanvas } from "../../ui/functions/responsive.js";

import { canvasMapa, canvasData } from "../../data/sharedData.js";

function canvasMapaSet() {
    inicializarCanvas(canvasMapa);
    cargarFondoMapa(canvasMapa); 
    ajustarCanvas()
}

function inicializarCanvas(canvasMapa) {
    canvasData.lienzo = canvasMapa.getContext("2d"); 
}

function cargarFondoMapa(canvasMapa) {
    canvasData.fondoMapa = new Image();
    canvasData.fondoMapa.src = "./assets/escene.png";

    canvasData.fondoMapa.onload = () => {
        console.log("Mapa cargado correctamente.");
        canvasData.mapaCargado = true;
        canvasData.lienzo.drawImage(canvasData.fondoMapa, 0, 0, canvasMapa.width, canvasMapa.height);
    };
}



// function actualizarCanvas() {
//     if (mishimonJugadorSet && mishimonesEnemigos.length > 0) {
//         pintarMishimones();
//         for (let enemigo of mishimonesEnemigos) {
//             detectarColision(mishimonJugadorSet, enemigo);
//         }
//     }
//     requestAnimationFrame(actualizarCanvas);
// }



export { canvasMapaSet };
