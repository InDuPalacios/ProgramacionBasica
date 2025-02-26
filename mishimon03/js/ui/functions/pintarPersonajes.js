// 📌  pintarPersonajes.js - 
import { 
    canvasData, 
    canvasMapa } from "../../data/sharedData.js";

    import { 
        mishimonJugadorSet, 
        mishimonEnemigoSet} from "../functions/ctrlMishimonGame.js";

function pintarMishimones() {
    if (!canvasData.lienzo) {  // 📌 Verificamos que el lienzo esté inicializado
        console.warn("⚠ No se ha inicializado el lienzo.");
        return;
    }
    canvasData.lienzo.clearRect(0, 0, canvasMapa.width, canvasMapa.height);
    
    if (canvasData.fondoMapa && canvasData.fondoMapa.complete) {
        canvasData.lienzo.drawImage(canvasData.fondoMapa, 0, 0, canvasMapa.width, canvasMapa.height);
    } else {
        console.warn("⚠ El fondo del mapa aún no se ha cargado.");
    }

    if (mishimonJugadorSet && mishimonJugadorSet.mapaFoto.complete) {
        canvasData.lienzo.drawImage(
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
        canvasData.lienzo.drawImage(
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

export { pintarMishimones };