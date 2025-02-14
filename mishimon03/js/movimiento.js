import { pintarMishimones, mishimonJugador } from "./mapa.js"; 

let intervaloMovimiento;

// 🔹 Función para iniciar el movimiento continuo
function iniciarMovimiento(direccion) {
    detenerMovimiento(); 

    intervaloMovimiento = setInterval(() => {
        moverMishimon(direccion);
        pintarMishimones();
    }, 50);
}

// 🔹 Función para detener el movimiento
function detenerMovimiento() {
    clearInterval(intervaloMovimiento);
}

// 🔹 Función para mover el Mishimon en el `canvas`
function moverMishimon(direccion) {
    if (!mishimonJugador || typeof mishimonJugador.x === "undefined" || typeof mishimonJugador.y === "undefined") {
        console.error("❌ Error: mishimonJugador no está definido correctamente.");
        return;
    }

    const velocidad = 5;
    switch (direccion) {
        case "up":
            mishimonJugador.y -= velocidad;
            break;
        case "down":
            mishimonJugador.y += velocidad;
            break;
        case "left":
            mishimonJugador.x -= velocidad;
            break;
        case "right":
            mishimonJugador.x += velocidad;
            break;
    }
}

window.iniciarMovimiento = iniciarMovimiento;
window.detenerMovimiento = detenerMovimiento;

export { iniciarMovimiento, detenerMovimiento, moverMishimon };
