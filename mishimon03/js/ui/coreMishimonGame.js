// 📌 coreMishimonGame.js - Manejo de la interfaz del juego
import { 
    btnMascota, 
    btnReiniciar, 
    ataquesJugadorDisponibles, 
    mishimones,
    sectionVerMapa,
    sectionSeleccionarMascota,
    sectionBtnReiniciar,
    divAtaquesPosiblesJugador,
    divAtaquesPosiblesEnemigo,
    gameState,
    sectionSeleccionarAtaque } from "../data/sharedData.js"

import { actualizarVidasEnElDOM } from "./functions/interfazBatalla.js";

import { 
    ocultarSecciones,
    generarTarjetasMishimones,
    seleccionarMascotaJugador, 
    seleccionarMascotaEnemigo  } from "./functions/ctrlMishimonGame.js";

import { 
    configurarBotones, 
    configurarTeclado } from "./functions/inputs.js";

function iniciarJuego() {
    ocultarSecciones();
    configurarTeclado();
    configurarBotones();

    seleccionarMascotaEnemigo();

    generarTarjetasMishimones();
    inicializarEventoSeleccionMascota(
        btnMascota,
        ataquesJugadorDisponibles,
        mishimones);

    inicializarEventoReiniciar(btnReiniciar);

    unirseAlJuego();
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse").then(
        function(res){
            if (res.ok){
                res.text().then(
                    function(respuesta){
                        console.log(respuesta)
                        gameState.jugadorId = respuesta
                    }
                )
            }
        }
    )
}

function inicializarEventoSeleccionMascota(
    btnMascota, 
    ataquesJugadorDisponibles, 
    mishimones) {

    if (!btnMascota) {
        console.error("⚠ Error: btnMascota no está definido en el DOM.");
        return;
    }
        
    console.log("✅ Botón Mascota encontrado, asignando evento...");
    
    btnMascota.addEventListener("click", () => {
        seleccionarMascotaJugador(
            ataquesJugadorDisponibles, 
            mishimones
        );
    });
}

// 📌 Función para asignar evento al botón de reiniciar
function inicializarEventoReiniciar(btnReiniciar) {
    btnReiniciar.addEventListener("click", reiniciarJuego);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    console.log("🔄 Reiniciando el juego...");
    location.reload(); // 🔄 Recarga la página completamente
}


// 📌 Exportar funciones para usarlas en otros archivos
export { iniciarJuego, inicializarEventoSeleccionMascota, inicializarEventoReiniciar };

