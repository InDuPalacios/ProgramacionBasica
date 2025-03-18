import { btnProbarOtro, 
    btnConfirmarSeleccion, 
    sectionSeleccionarMascota, 
    sectionVerMapa,
    sectionConfirmSelection,
    modal,
    infoMascota,
    ataquesJugador,
    mishimonJugadorSet } from "../../data/sharedData.js"

import { iniciarMapa } from "../../engineGraphic/renderController.js";

import { mostrarBotonesAtaque } from "./interfazBatalla.js";

// 📌  Funciones para manejar el modal
function mostrarModalSeleccion(mascota) {
    infoMascota.innerHTML = `
        <h2>Has seleccionado</h2>
        <img src="${mascota.foto}" alt="${mascota.nombre}" width="120px">
        <p><strong>${mascota.nombre}</strong></p>
        <p>Ataques disponibles:</p>
        <p>${mascota.ataques.map(ataque => ataque.nombre).join(" ")}</p>
    `;

    modal.style.display = "flex";
    asignarEventos();
}

function asignarEventos() {
    if (btnProbarOtro) {
        btnProbarOtro.addEventListener("click", probarOtraMascota);
    }

    if (btnConfirmarSeleccion) {
        btnConfirmarSeleccion.addEventListener("click", () => {
            confirmarSeleccion([...mishimonJugadorSet.ataques]);
        });
    }
}


function confirmarSeleccion(ataques) {
    cerrarModal();
    sectionSeleccionarMascota.style.display = "none";
    sectionVerMapa.style.display = "flex";
    iniciarMapa();
    mostrarBotonesAtaque(ataques);
}

function probarOtraMascota() {
    cerrarModal();
    sectionSeleccionarMascota.style.display = "flex";
}

function cerrarModal() {
    sectionConfirmSelection.style.display = "none";
}

export { mostrarModalSeleccion, cerrarModal, confirmarSeleccion, probarOtraMascota };