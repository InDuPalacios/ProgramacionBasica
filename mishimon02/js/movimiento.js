//movimiento.js

import { pintarMishimon } from "./mapa.js"; // Importamos la función para actualizar el canvas

let intervaloMovimiento;

// 🔹 Función para iniciar el movimiento continuo
function iniciarMovimiento(direccion) {
    detenerMovimiento(); // 🔥 Detenemos cualquier otro movimiento activo

    intervaloMovimiento = setInterval(() => {
        moverMishimon(direccion);
        pintarMishimon(); // 🔥 Actualiza el canvas en cada movimiento
    }, 50);
}

// 🔹 Función para detener el movimiento
function detenerMovimiento() {
    clearInterval(intervaloMovimiento);
}

// 🔹 Función para mover el Mishimon en el `canvas`
function moverMishimon(direccion) {
    if (!mishimonJugador) return; // 🔥 Asegura que haya un Mishimon seleccionado

    const velocidad = 5; // 🔥 Velocidad de movimiento

    switch (direccion) {
        case "arriba":
            mishimonJugador.y -= velocidad;
            break;
        case "abajo":
            mishimonJugador.y += velocidad;
            break;
        case "izquierda":
            mishimonJugador.x -= velocidad;
            break;
        case "derecha":
            mishimonJugador.x += velocidad;
            break;
    }
}

// 🔹 Agregar eventos de teclado
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            iniciarMovimiento("arriba");
            break;
        case "ArrowDown":
            iniciarMovimiento("abajo");
            break;
        case "ArrowLeft":
            iniciarMovimiento("izquierda");
            break;
        case "ArrowRight":
            iniciarMovimiento("derecha");
            break;
    }
});

// 🔹 Detener el movimiento cuando se suelta la tecla
window.addEventListener("keyup", detenerMovimiento);

// 🔹 Asignar eventos a los botones HTML
document.getElementById("boton-arriba").addEventListener("mousedown", () => iniciarMovimiento("arriba"));
document.getElementById("boton-abajo").addEventListener("mousedown", () => iniciarMovimiento("abajo"));
document.getElementById("boton-izquierda").addEventListener("mousedown", () => iniciarMovimiento("izquierda"));
document.getElementById("boton-derecha").addEventListener("mousedown", () => iniciarMovimiento("derecha"));

// 🔹 Detener movimiento al soltar el clic
document.getElementById("boton-arriba").addEventListener("mouseup", detenerMovimiento);
document.getElementById("boton-abajo").addEventListener("mouseup", detenerMovimiento);
document.getElementById("boton-izquierda").addEventListener("mouseup", detenerMovimiento);
document.getElementById("boton-derecha").addEventListener("mouseup", detenerMovimiento);

export { iniciarMovimiento, detenerMovimiento, moverMishimon };
