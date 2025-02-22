// inputs para movimiento de mishimon
import { iniciarMovimiento, detenerMovimiento } from "./movimiento";

// 🔹 Capturar controles de teclado
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

// 🔹 Capturar controles de botones físicos
document.addEventListener("DOMContentLoaded", () => {
    const botones = {
        up: document.querySelector(".class-btn-flecha.class-type-arriba"),
        down: document.querySelector(".class-btn-flecha.class-type-abajo"),
        left: document.querySelector(".class-btn-flecha.class-type-izquierda"),
        right: document.querySelector(".class-btn-flecha.class-type-derecha"),
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
