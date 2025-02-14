// ventanaEmergente.js

function detectarColision(mishimonJugador, mishimonEnemigo) {
    // Verificar si las áreas de los Mishimones se superponen
    if (mishimonJugador.x < mishimonEnemigo.x + mishimonEnemigo.ancho &&
        mishimonJugador.x + mishimonJugador.ancho > mishimonEnemigo.x &&
        mishimonJugador.y < mishimonEnemigo.y + mishimonEnemigo.alto &&
        mishimonJugador.y + mishimonJugador.alto > mishimonEnemigo.y) {
        mostrarVentanaEmergente(); // Llamar a la función para mostrar el modal
    }
}

// Función para mostrar el modal
function mostrarVentanaEmergente() {
    const ventana = document.getElementById("ventanaEmergente");
    ventana.style.display = "block";
}

// Función para cerrar el modal
function cerrarVentanaEmergente() {
    const ventana = document.getElementById("ventanaEmergente");
    ventana.style.display = "none";
}

// Función para detectar la colisión


// Exportar las funciones para su uso en otros archivos
export { mostrarVentanaEmergente, cerrarVentanaEmergente, detectarColision };
