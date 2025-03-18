//ataqueHandler.js

import { 
    estadoBatalla,
    divAtaquesPosiblesEnemigo,
    divAtaquesPosiblesJugador } from "../../data/sharedData.js";


function deshabilitarBotonAtaqueEnemigo(ataqueSeleccionado, contenedor) {
    let botones = document.querySelectorAll(`${contenedor} button`);
    
    for (let i = 0; i < botones.length; i++) {
        let boton = botones[i];

        // 📌 Aseguramos que el texto del botón y el ataque seleccionado sean comparables
        let botonTexto = boton.innerText.replace(/\s+/g, '').trim();
        let ataqueTexto = ataqueSeleccionado.replace(/\s+/g, '').trim();

        // 📌 Buscamos un botón que coincida con el ataque y que no esté deshabilitado
        if (!boton.disabled && botonTexto === ataqueTexto) {
            boton.disabled = true;
            boton.style.backgroundColor = "#d3d3d3";
            boton.style.cursor = "not-allowed";
            boton.style.filter = "grayscale(100%)";
            boton.classList.add("boton-deshabilitado");

            console.log(`✅ Botón deshabilitado (ataque enemigo): ${ataqueSeleccionado}`);
            return; // 📌 Salimos después de deshabilitar el primer botón correcto
        }
    }

    console.warn(`⚠ No se encontró botón para el ataque enemigo: ${ataqueSeleccionado}`);
}

    
function registrarAtaques() {
    if (!divAtaquesPosiblesJugador || !divAtaquesPosiblesEnemigo) {
        console.error("⚠ Error: No se encontró el contenedor de ataques.");
        return;
    }

    // 📌 Obtener los ataques seleccionados desde estadoBatalla
    let ataqueJugador = estadoBatalla.ataqueSeleccionadoJugador;
    let ataqueEnemigo = estadoBatalla.ataqueSeleccionadoEnemigo;

    if (!ataqueJugador || !ataqueEnemigo) {
        console.error("⚠ Error: No se pudo registrar el ataque porque no hay selección.");
        return;
    }

    // 📌 Agregar ataque del jugador
    let ataqueJugadorElem = document.createElement("p");
    ataqueJugadorElem.innerText = ataqueJugador;
    ataqueJugadorElem.classList.add("ataque-jugador");
    divAtaquesPosiblesJugador.appendChild(ataqueJugadorElem);

    // 📌 Agregar ataque del enemigo
    let ataqueEnemigoElem = document.createElement("p");
    ataqueEnemigoElem.innerText = ataqueEnemigo;
    ataqueEnemigoElem.classList.add("ataque-enemigo");
    divAtaquesPosiblesEnemigo.appendChild(ataqueEnemigoElem);

    console.log(`✅ Ataques registrados: Jugador (${ataqueJugador}), Enemigo (${ataqueEnemigo})`);
}

export { deshabilitarBotonAtaqueEnemigo, registrarAtaques };

