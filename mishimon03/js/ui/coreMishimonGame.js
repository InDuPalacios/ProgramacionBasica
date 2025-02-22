// 📌 coreMishimonGame.js - Manejo de la interfaz del juego
import { 
    btnMascota, 
    btnReiniciar, 
    ataquesJugadorDisponibles, 
    mishimones,
    sectionVerMapa,
    sectionSeleccionarMascota,
    sectionBtnReiniciar,
    divAtaquesPosiblesJugador } from "../data/sharedData.js"

import { 
    ocultarSecciones,
    generarTarjetasMishimones,
    seleccionarMascotaJugador } from "./functions/ctrlMishimonGame.js";

function iniciarJuego() {
    ocultarSecciones();
    generarTarjetasMishimones();
    inicializarEventoSeleccionMascota(
        btnMascota,
        ataquesJugadorDisponibles,
        mishimones);
    inicializarEventoReiniciar(btnReiniciar);
}

function inicializarEventoSeleccionMascota(
    btnMascota, 
    ataquesJugadorDisponibles, 
    mishimones) {
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
    // ✅ Restablecer variables del juego
    vidasJugador = 3;
    vidasEnemigo = 3;
    rondasJugadas = 0;

    // ✅ Volver a la pantalla de selección sin recargar la página
    sectionSeleccionarMascota.style.display = "flex";
    sectionVerMapa.style.display = "none";
    sectionBtnReiniciar.style.display = "none";

    // ✅ Limpiar ataques anteriores
    divAtaquesPosiblesJugador.innerHTML = "";
    document.getElementById("ataques-enemigo").innerHTML = "";
    document.getElementById("pResultado").innerHTML = "";

    // ✅ Reiniciar Mishimon del jugador
    mishimonJugador = null;
}

// 📌 Exportar funciones para usarlas en otros archivos
export { iniciarJuego, inicializarEventoSeleccionMascota, inicializarEventoReiniciar };

