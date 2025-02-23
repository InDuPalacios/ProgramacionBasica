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
    mishimonEnemigoSet } from "../../data/sharedData.js"

import { pintarMishimones } from "../../engineGraphic/mapa/mapa.js"

import { iniciarMovimiento } from "../../engineGraphic/animaciones/movimiento.js"

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

function seleccionarMascotaJugador(
    ataquesJugadorDisponibles, 
    mishimones
) {
    const seleccionada = mishimones.find(m => document.getElementById(m.nombre).checked);

    if (seleccionada) {
        // let contenedorMascotaJugador = document.getElementById("pAvatarMascotaJugador");
        // contenedorMascotaJugador.innerHTML = `
        //     <img src="${seleccionada.foto}" alt="${seleccionada.nombre}" width="120px">
        //     <p>${seleccionada.nombre}</p>`;
        seleccionada.mapaFoto = new Image();
        seleccionada.mapaFoto.src = seleccionada.foto;
        console.log(seleccionada)

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
}

function seleccionarMascotaEnemigo(
    contenedorAtaquesEnemigoDisponibles, 
    ataquesEnemigoDisponibles
) {
    // 🔥 Seleccionamos un enemigo aleatorio directamente dentro de la función
    const indiceEnemigo = Math.floor(Math.random() * enemigos.length);
    const enemigoSeleccionado = enemigos[indiceEnemigo];

    mishimonEnemigoSet.nombre = enemigoSeleccionado.nombre;
    mishimonEnemigoSet.mapaFoto = new Image();
    mishimonEnemigoSet.mapaFoto.src = enemigoSeleccionado.foto;
    mishimonEnemigoSet.x = Math.random() * (canvasMapa.width - 50) || 50;
    mishimonEnemigoSet.y = Math.random() * (canvasMapa.height - 50) || 50;
    mishimonEnemigoSet.ancho = 100;
    mishimonEnemigoSet.alto = 100;

    mishimonEnemigoSet.vida = enemigoSeleccionado.vida;
    mishimonEnemigoSet.ataques = [...enemigoSeleccionado.ataques];

    // 📌 Cuando la imagen esté lista, se ejecuta `pintarMishimones()`
    mishimonEnemigoSet.mapaFoto.onload = () => {
        pintarMishimones();
    };
}

function mostrarBotonesAtaque(
    ataquesEnemigoDisponibles, 
    ataquesJugadorDisponibles
) {
    const contenedorAtaques = document.querySelector(".class-div-tarjetas-ataques");
    contenedorAtaques.innerHTML = "";

    ataquesJugadorDisponibles.forEach(ataque => {
        const boton = document.createElement("button");
        boton.id = ataque.id;
        boton.classList.add("boton-de-ataque");
        boton.innerText = ataque.nombre;

        // Efecto hover con JavaScript
        boton.addEventListener("mouseenter", () => {
            if (!boton.disabled) {
                boton.style.backgroundColor = "#BB9CC0";
                boton.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
            }
        });

        boton.addEventListener("mouseleave", () => {
            if (!boton.disabled) {
                boton.style.backgroundColor = ""; // Volver al color original
                boton.style.color = ""; // Volver al color original del texto
                boton.style.border = "";
                boton.style.transform = "";
                boton.style.boxShadow = "";
            }
        });

        boton.addEventListener("click", () => {
            ataqueJugador = ataque.nombre.split(" ")[1];
            ataqueAleatorioEnemigo(ataquesEnemigoDisponibles);
            
            // Marcar el botón como seleccionado y deshabilitarlo
            boton.disabled = true;
            boton.style.backgroundColor = "#BB9CC0";
        });

        contenedorAtaques.appendChild(boton);
    });
}

function mostrarAtaquesEnemigo(
    contenedorAtaquesEnemigoDisponibles,
    ataquesEnemigoDisponibles
) {
    // Limpiamos solo los botones, sin afectar el subtítulo
    contenedorAtaquesEnemigoDisponibles.querySelectorAll("button").forEach(boton => boton.remove());

    // Agregamos los botones de los ataques
    ataquesEnemigoDisponibles.forEach(ataque => {
        let ataqueElemento = document.createElement("button"); 
        ataqueElemento.innerText = ataque.nombre;
        ataqueElemento.classList.add("boton-de-ataque");

        if (ataque.usado) {
            ataqueElemento.style.backgroundColor = "#BB9CC0"; // Indicar que fue usado
        }

        contenedorAtaquesEnemigoDisponibles.appendChild(ataqueElemento);
    });
}

export { 
    ocultarSecciones, 
    asignarMishimonJugador, 
    mishimonJugadorSet, 
    generarTarjetasMishimones, 
    seleccionarMascotaJugador, 
    mostrarBotonesAtaque, 
    seleccionarMascotaEnemigo,
    mishimonEnemigoSet 
};