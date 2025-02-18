// 📌 ui.js - Manejo de la interfaz del juego

import { seleccionarMascotaJugador } from "./functions/ctrlMishimonGame.js";

// Función para reiniciar el juego
function iniciarJuego(
    sectionSeleccionarAtaque, 
    sectionBtnReiniciar, 
    divAtaquesDisponiblesEnemigo, 
    sectionVerMapa,
    btnMascota, 
    btnReiniciar,
    divTarjetas,
    mishimones,
    ataquesEnemigoDisponibles,
    ataquesJugadorDisponibles,
    enemigos,
    contenedorAtaquesEnemigoDisponibles
) {
    sectionSeleccionarAtaque.style.display = "none";
    sectionBtnReiniciar.style.display = "none";
    divAtaquesDisponiblesEnemigo.style.display = "none";
    sectionVerMapa.style.display = "none";

    mishimones.forEach((mishimon) => {
        let opcionDeMishimones = `
        <input type="radio" name="mascota" id=${mishimon.nombre} />
        <label class="tajeta-de-mishimon" for=${mishimon.nombre}>
            <p>${mishimon.nombre}</p>
            <img src=${mishimon.foto} alt=${mishimon.nombre}>
        </label>`;
        divTarjetas.innerHTML += opcionDeMishimones;
    });

    btnMascota.addEventListener(
        "click", () => {
            seleccionarMascotaJugador(
                ataquesEnemigoDisponibles,
                ataquesJugadorDisponibles, 
                enemigos, 
                contenedorAtaquesEnemigoDisponibles,
                mishimones
            );
        });
    btnReiniciar.addEventListener("click", reiniciarJuego);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // ✅ Restablecer variables del juego
    vidasJugador = 3;
    vidasEnemigo = 3;
    rondasJugadas = 0;

    // ✅ Volver a la pantalla de selección sin recargar la página
    document.getElementById("sectionSeleccionarMascota").style.display = "flex";
    document.getElementById("sectionVerMapa").style.display = "none";
    document.getElementById("sectionBtnReiniciar").style.display = "none";

    // ✅ Limpiar ataques anteriores
    document.getElementById("divAtaquesPosiblesJugador").innerHTML = "";
    document.getElementById("ataques-enemigo").innerHTML = "";
    document.getElementById("pResultado").innerHTML = "";

    // ✅ Reiniciar Mishimon del jugador
    mishimonJugador = null;
}

// 📌 Exportar funciones para usarlas en otros archivos
export { iniciarJuego, reiniciarJuego };
