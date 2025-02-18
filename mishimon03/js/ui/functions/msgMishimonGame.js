// 📌 ui.js - Manejo de la interfaz del juego

// Función para mostrar mensajes de combate en la interfaz
function crearMensaje(resultado) {
    let pResultado = document.getElementById("pResultado");
    pResultado.innerHTML = resultado;
}

// Función para mostrar el mensaje final y desactivar botones de ataque
function crearMensajeFinal(resultadoFinal) {
    document.getElementById("sectionBtnReiniciar").style.display = "flex";
    document.getElementById("pResultado").innerHTML = resultadoFinal;

    // 🔴 Desactivar botones de ataque al finalizar el juego
    document.querySelectorAll(".boton-de-ataque").forEach(boton => {
        boton.disabled = true;
    });
}

// 📌 Exportar funciones para usarlas en otros archivos
export { crearMensaje, crearMensajeFinal };
