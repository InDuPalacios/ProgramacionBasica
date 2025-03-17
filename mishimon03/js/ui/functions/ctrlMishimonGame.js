// 📌 - Manejo de la interfaz del juego
import { 
    sectionSeleccionarAtaque,
    sectionBtnReiniciar,
    divAtaquesDisponiblesEnemigo,
    sectionVerMapa,
    divTarjetas,
    mishimones,
    enemigos,
    mishimonJugadorSet,
    mishimonEnemigoSet,
    ataquesEnemigoDisponibles,
    estadoBatalla,
    gameState,
    btnConfirmarSeleccion,
    ataqueEnemigo } from "../../data/sharedData.js"

import { aleatorio } from "../../class/mechanics/iaEnemy.js"

import { 
    mostrarModalSeleccion, 
    cerrarModal, 
    confirmarSeleccion } from "../functions/confirmSelection.js";


function ocultarSecciones() {
    [
        sectionSeleccionarAtaque, 
        sectionBtnReiniciar, 
        divAtaquesDisponiblesEnemigo, 
        sectionVerMapa
    ].forEach(section => section.style.display = "none");
}

function generarTarjetasMishimones() {
    divTarjetas.innerHTML = mishimones.map(mishimon => `
        <input type="radio" name="mascota" id="${mishimon.nombre}" />
        <label class="tajeta-de-mishimon" for="${mishimon.nombre}">
            <p>${mishimon.nombre}</p>
            <img src="${mishimon.foto}" alt="${mishimon.nombre}">
        </label>
    `).join('');
}

// Seteo del Jugador 
function seleccionarMascotaJugador(
    ataquesJugadorDisponibles, 
    mishimones
) {
    const seleccionada = mishimones.find(m => document.getElementById(m.nombre).checked);

    if (seleccionada) {
        let contenedorMascotaJugador = document.getElementById("pAvatarMascotaJugador");
        contenedorMascotaJugador.innerHTML = `
            <img src="${seleccionada.foto}" alt="${seleccionada.nombre}" width="120px">
            <p>${seleccionada.nombre}</p>`;
        seleccionada.mapaFoto = new Image();
        seleccionada.mapaFoto.src = seleccionada.foto;

        asignarMishimonJugador(seleccionada);
        mostrarModalSeleccion(seleccionada);

    } else {
        alert("No has seleccionado tu mascota");
    }
}

function asignarMishimonJugador(mishimon) {
    mishimonJugadorSet.nombre = mishimon.nombre;
    mishimonJugadorSet.mapaFoto = mishimon.mapaFoto;
    mishimonJugadorSet.x = 0;
    mishimonJugadorSet.y = 0;
    mishimonJugadorSet.ancho = 100;
    mishimonJugadorSet.alto = 100;
    mishimonJugadorSet.ataques = [...mishimon.ataques]

    console.log("✅ MishimonJugadorSet asignado correctamente:", mishimonJugadorSet);

    seleccionarMishimonToBack(mishimonJugadorSet)
}

function seleccionarMishimonToBack(mishimonJugadorSet){
    fetch(`http://localhost:8080/mishimon03/${gameState.jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mishimon: mishimonJugadorSet.nombre
        })
    })
}

// Seteo del Enemigo
function obtenerPosicionEnemigo() {
    const margen = 50; 
    const distanciaMinima = 200; 
    let x, y;
    let intentos = 0;
    const maxIntentos = 50;

    do {
        x = Math.random() * (canvasMapa.width - margen * 2) + margen;
        y = Math.random() * (canvasMapa.height - margen * 2) + margen;
        intentos++;
    } while (
        Math.hypot(x - mishimonJugadorSet.x, y - mishimonJugadorSet.y) < distanciaMinima &&
        intentos < maxIntentos
    );

    // Si no encuentra una posición válida, coloca al enemigo en el centro
    if (intentos >= maxIntentos) {
        console.warn("⚠ No se encontró una posición óptima, asignando posición por defecto.");
        x = canvasMapa.width / 2;
        y = canvasMapa.height / 2;
    }

    return { x, y };
}

function seleccionarMascotaEnemigo() {
    const indiceEnemigo = Math.floor(Math.random() * enemigos.length);
    const enemigoSeleccionado = enemigos[indiceEnemigo];

    mishimonEnemigoSet.nombre = enemigoSeleccionado.nombre;
    mishimonEnemigoSet.mapaFoto = new Image();
    mishimonEnemigoSet.mapaFoto.src = enemigoSeleccionado.foto;
    mishimonEnemigoSet.ancho = 100;
    mishimonEnemigoSet.alto = 100;
    mishimonEnemigoSet.vida = enemigoSeleccionado.vida;
    mishimonEnemigoSet.ataques = [...enemigoSeleccionado.ataques];
    ataquesEnemigoDisponibles.splice(0, ataquesEnemigoDisponibles.length, ...mishimonEnemigoSet.ataques);


    // Obtener posición válida
    const posicion = obtenerPosicionEnemigo();
    mishimonEnemigoSet.x = posicion.x;
    mishimonEnemigoSet.y = posicion.y;

    // Renderizar la imagen y el nombre del enemigo directamente en el HTML
    let contenedorMascotaEnemigo = document.getElementById("pAvatarMascotaEnemigo");

    if (!contenedorMascotaEnemigo) {
        console.error("⚠ Error: No se encontró el contenedor del enemigo.");
        return;
    }

    contenedorMascotaEnemigo.innerHTML = `
        <img src="${mishimonEnemigoSet.mapaFoto.src}" alt="${mishimonEnemigoSet.nombre}" width="120px">
        <p>${mishimonEnemigoSet.nombre}</p>`;


        let contenedorAtaquesEnemigo = document.getElementById("divAtaquesDisponiblesEnemigo");

        if (!contenedorAtaquesEnemigo) {
            console.error("⚠ Error: No se encontró el contenedor de ataques del enemigo.");
            return;
        }

        contenedorAtaquesEnemigo.style.display = "block";
    
        // Limpiar antes de agregar nuevos botones
        contenedorAtaquesEnemigo.innerHTML = `<h2 class="subtitulo">Ataques del Enemigo:</h2>`;
    
        ataquesEnemigoDisponibles.forEach((ataque, index) => { 
            let ataqueElemento = document.createElement("button");
            ataqueElemento.innerText = ataque.nombre;
            ataqueElemento.classList.add("boton-de-ataque");
        
            // ✅ Asignamos correctamente el índice
            ataqueElemento.setAttribute("data-id", index);
            console.log(`📌 Asignando índice ${index} al ataque: ${ataque.nombre}`);
        
            contenedorAtaquesEnemigo.appendChild(ataqueElemento);
        });

        console.log("👾 Enemigo seleccionado:", enemigoSeleccionado);
}

function ataqueAleatorioEnemigo() {
    console.log("📌 Antes de seleccionar ataque enemigo:", 
        ataquesEnemigoDisponibles.map(a => a.nombre));

    if (!ataquesEnemigoDisponibles || ataquesEnemigoDisponibles.length === 0) {
        console.error("⚠ Error: No hay ataques disponibles para el enemigo.");
        return "❌ Sin ataque";
    }

    let ataqueIndex = Math.floor(Math.random() * ataquesEnemigoDisponibles.length);
    let ataqueSeleccionado = ataquesEnemigoDisponibles.splice(ataqueIndex, 1)[0];

    if (!ataqueSeleccionado || !ataqueSeleccionado.nombre) {
        console.error("⚠ Error: No se pudo seleccionar un ataque enemigo.");
        return "❌ Sin ataque";
    }

    estadoBatalla.ataqueSeleccionadoEnemigo = ataqueSeleccionado.nombre;

    // 📌 Logs para depuración
    console.log(`👾 El enemigo usó: ${ataqueSeleccionado.nombre}`);
    return ataqueSeleccionado.nombre;
}



export { 
    ocultarSecciones, 
    asignarMishimonJugador, 
    mishimonJugadorSet,
    generarTarjetasMishimones, 
    seleccionarMascotaJugador, 
    seleccionarMascotaEnemigo,
    mishimonEnemigoSet,
    ataqueAleatorioEnemigo
};