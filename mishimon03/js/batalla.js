// batalla.js

function detectarColision(mishimonJugador, mishimonEnemigo) {
    const rangoProximidad = 30; // Define qué tan cerca deben estar

    if (Math.abs(mishimonJugador.x - mishimonEnemigo.x) < rangoProximidad &&
        Math.abs(mishimonJugador.y - mishimonEnemigo.y) < rangoProximidad) {
        mostrarVentanaEmergente();
    }
}

// Función para mostrar el modal
function mostrarVentanaEmergente() {
    const ventana = document.getElementById("divVentanaEmergente");
    ventana.style.display = "block";
}

// Función para cerrar el modal
function cerrarVentanaEmergente() {
    const ventana = document.getElementById("divVentanaEmergente");
    ventana.style.display = "none";
}

// Función para detectar la colisión


// Exportar las funciones para su uso en otros archivos
export { mostrarVentanaEmergente, cerrarVentanaEmergente, detectarColision };
