// 📌 Core Mechanics - Manejo de Comportamiento Enemigos

function ataqueAleatorioEnemigo(ataquesEnemigoDisponibles) {
    // Si no hay ataques disponibles, restaurarlos
    if (ataquesEnemigoDisponibles.every(a => a.usado)) {
        ataquesEnemigoDisponibles.forEach(a => a.usado = false);
    }

    // Filtrar solo los ataques no usados
    const ataquesDisponibles = ataquesEnemigoDisponibles.filter(a => !a.usado);
    if (ataquesDisponibles.length === 0) return;

    const indiceAtaque = aleatorio(0, ataquesDisponibles.length - 1);
    ataquesDisponibles[indiceAtaque].usado = true; // Marcar el ataque como usado

    ataqueEnemigo = ataquesDisponibles[indiceAtaque].nombre.split(" ")[1]; // Extraer el nombre del ataque
    mostrarAtaquesEnemigo(); // Actualizar la vista de ataques del enemigo
    combate();
}

// Generar número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 📌 Exportar funciones para usarlas en otros archivos
export { ataqueAleatorioEnemigo, aleatorio };