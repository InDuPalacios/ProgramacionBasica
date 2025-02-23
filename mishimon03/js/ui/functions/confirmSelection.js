import { btnProbarOtro, 
    btnConfirmarSeleccion, 
    sectionSeleccionarMascota, 
    sectionVerMapa,
    sectionConfirmSelection,
    modal,
    infoMascota,} from "../../data/sharedData.js"

import { iniciarMapa } from "../../engineGraphic/renderController.js";

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
        btnConfirmarSeleccion.addEventListener("click", confirmarSeleccion);
    }
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

function cerrarModal() {
    sectionConfirmSelection.style.display = "none";
}

export { mostrarModalSeleccion, cerrarModal, confirmarSeleccion, probarOtraMascota };