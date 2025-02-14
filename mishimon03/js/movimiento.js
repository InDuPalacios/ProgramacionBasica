import { pintarMishimon, mishimonJugador } from "./mapa.js"; 

let intervaloMovimiento;

// 🔹 Función para iniciar el movimiento continuo
function iniciarMovimiento(direccion) {
    detenerMovimiento(); 

    intervaloMovimiento = setInterval(() => {
        moverMishimon(direccion);
        pintarMishimon();
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

// 🔹 Exponer funciones en `window` para que `index.html` las reconozca
window.iniciarMovimiento = iniciarMovimiento;
window.detenerMovimiento = detenerMovimiento;

// 🔹 Agregar controles de teclado para mover el Mishimon
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            iniciarMovimiento("up");
            break;
        case "ArrowDown":
            iniciarMovimiento("down");
            break;
        case "ArrowLeft":
            iniciarMovimiento("left");
            break;
        case "ArrowRight":
            iniciarMovimiento("right");
            break;
    }
});

window.addEventListener("keyup", () => {
    detenerMovimiento();
});


document.addEventListener("DOMContentLoaded", () => {
    const botones = {
        up: document.querySelector(".flecha.arriba"),
        down: document.querySelector(".flecha.abajo"),
        left: document.querySelector(".flecha.izquierda"),
        right: document.querySelector(".flecha.derecha"),
    };

    Object.entries(botones).forEach(([direccion, boton]) => {
        if (!boton) {
            console.error(`❌ Error: No se encontró el botón ${direccion}. Verifica tu HTML.`);
            return;
        }

        boton.addEventListener("mousedown", () => iniciarMovimiento(direccion));
        boton.addEventListener("mouseup", detenerMovimiento);
        boton.addEventListener("mouseleave", detenerMovimiento);
        
        boton.addEventListener("touchstart", (e) => {
            e.preventDefault(); // Evita el zoom o scroll accidental en móviles
            iniciarMovimiento(direccion);
        });
        boton.addEventListener("touchend", detenerMovimiento);
    });
});

export { iniciarMovimiento, detenerMovimiento, moverMishimon };
