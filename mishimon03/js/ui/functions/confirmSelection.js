import { btnProbarOtro, 
    btnConfirmarSeleccion, 
    sectionSeleccionarMascota, 
    sectionVerMapa,
    sectionConfirmSelection,
    modal,
    infoMascota,} from "../../data/sharedData.js"

import { iniciarMapa } from "../../engineGraphic/mapa/mapa.js";

// 📌  Funciones para manejar el modal
function mostrarModalSeleccion(mascota) {
    // Mostrar la información de la mascota en el modal
    infoMascota.innerHTML = `
        <h2>Has seleccionado</h2>
        <img src="${mascota.foto}" alt="${mascota.nombre}" width="120px">
        <p><strong>${mascota.nombre}</strong></p>
        <p>Ataques disponibles:</p>
        <p>${mascota.ataques.map(ataque => ataque.nombre).join(" ")}</p>
    `;
    // Mostrar el modal
    modal.style.display = "flex";
    asignarEventos();
}

function cerrarModal() {
    sectionConfirmSelection.style.display = "none";
}

function confirmarSeleccion() {
    cerrarModal();
    sectionSeleccionarMascota.style.display = "none";
    sectionVerMapa.style.display = "flex";
    iniciarMapa();
}

function probarOtraMascota() {
    cerrarModal();
    sectionSeleccionarMascota.style.display = "flex";
}

function asignarEventos() {
    if (btnProbarOtro) {
        btnProbarOtro.addEventListener("click", probarOtraMascota);
    }

    if (btnConfirmarSeleccion) {
        btnConfirmarSeleccion.addEventListener("click", confirmarSeleccion);
    }
}


export { mostrarModalSeleccion, cerrarModal, confirmarSeleccion, probarOtraMascota };