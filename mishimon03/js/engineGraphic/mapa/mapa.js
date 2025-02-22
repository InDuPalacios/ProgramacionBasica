import { 
    detectarColision, 
    mostrarVentanaEmergente, 
    cerrarVentanaEmergente } from "../../batalla.js";

import { 
    mishimonJugadorSet, 
    mishimonEnemigoSet,
    seleccionarMascotaEnemigo } from "../../ui/functions/ctrlMishimonGame.js";
    
import { ajustarCanvas } from "../../ui/functions/responsive.js";

let lienzo, canvasMapa, fondoMapa;
let mishimonesEnemigos = [];

function iniciarMapa() {
    canvasMapa = document.getElementById("canvasMapa");
    lienzo = canvasMapa.getContext("2d");
    ajustarCanvas()
    fondoMapa = new Image();
    fondoMapa.src = "./assets/escene.png";

    fondoMapa.onload = () => {
        seleccionarMascotaEnemigo()
        // ---------------> 📌 pintarMishimones(); <--------------------
        // Inicialmente me gustaria llamar a pintarMishimones aqui
        // pero no seleccionaba el enemigo antes de ponerse a pintar


        // requestAnimationFrame(actualizarCanvas);
    };
 
}

function actualizarCanvas() {
    if (mishimonJugadorSet && mishimonesEnemigos.length > 0) {
        pintarMishimones();
        for (let enemigo of mishimonesEnemigos) {
            detectarColision(mishimonJugadorSet, enemigo);
        }
    }
    requestAnimationFrame(actualizarCanvas);
}

function pintarMishimones() {
    lienzo.clearRect(0, 0, canvasMapa.width, canvasMapa.height);
    lienzo.drawImage(fondoMapa, 0, 0, canvasMapa.width, canvasMapa.height);

    console.log("🔍 Estado actual de mishimonEnemigo:", mishimonEnemigoSet);

    if (mishimonJugadorSet && mishimonJugadorSet.mapaFoto.complete) {
        lienzo.drawImage(
            mishimonJugadorSet.mapaFoto,
            mishimonJugadorSet.x,
            mishimonJugadorSet.y,
            mishimonJugadorSet.ancho,
            mishimonJugadorSet.alto
        );
         } else {
        console.warn("⚠ Jugador no tiene imagen lista");
    }
        
        // ✅ Verificar que `mishimonEnemigo` existe antes de pintarlo
    if (mishimonEnemigoSet && mishimonEnemigoSet.mapaFoto.complete) {
        lienzo.drawImage(
            mishimonEnemigoSet.mapaFoto,
            mishimonEnemigoSet.x,
            mishimonEnemigoSet.y,
            mishimonEnemigoSet.ancho,
            mishimonEnemigoSet.alto
        );
        } 
     else {
        console.warn("⚠ ⚠ No hay enemigo seleccionado o su imagen no ha cargado");
    }
}


export { iniciarMapa, pintarMishimones, mishimonesEnemigos };
