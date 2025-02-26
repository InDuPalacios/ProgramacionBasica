// inputs.js - inputs para movimiento de mishimon
import { 
    iniciarMovimiento, 
    detenerMovimiento } from "../../engineGraphic/animaciones/movimiento.js";

// 📌 Función para inicializar los eventos de teclado
function configurarTeclado() {
    window.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
            case "w":
                iniciarMovimiento("up");
                break;
            case "ArrowDown":
            case "s":
                iniciarMovimiento("down");
                break;
            case "ArrowLeft":
            case "a":
                iniciarMovimiento("left");
                break;
            case "ArrowRight":
            case "d":
                iniciarMovimiento("right");
                break;
        }
    });

    window.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "ArrowUp":
            case "w":
            case "ArrowDown":
            case "s":
            case "ArrowLeft":
            case "a":
            case "ArrowRight":
            case "d":
                detenerMovimiento();
                break;
        }
    });
}

// 📌 Función para configurar los controles físicos (botones HTML)
function configurarBotones() {
    console.log("✅ Ejecutando configurarBotones()...");

    const botones = {
        up: document.querySelector(".class-btn-flecha.class-type-arriba"),
        down: document.querySelector(".class-btn-flecha.class-type-abajo"),
        left: document.querySelector(".class-btn-flecha.class-type-izquierda"),
        right: document.querySelector(".class-btn-flecha.class-type-derecha"),
    };

    console.log("📌 Botones detectados en el DOM:", botones);

    Object.entries(botones).forEach(([direccion, boton]) => {
        if (!boton) {
            console.error(`❌ Error: No se encontró el botón ${direccion}. Verifica tu HTML.`);
            return;
        }

        console.log(`✅ Botón ${direccion} detectado correctamente.`);

        // ⏳ Agregar eventos de presionar y soltar (touch y mouse)
        boton.addEventListener("mousedown", () => {
            console.log(`👆 Presionando botón ${direccion}`);
            iniciarMovimiento(direccion);
        });

        boton.addEventListener("mouseup", () => {
            console.log(`👆 Soltando botón ${direccion}`);
            detenerMovimiento();
        });

        boton.addEventListener("mouseleave", () => {
            detenerMovimiento();
        });

        boton.addEventListener("touchstart", (e) => {
            e.preventDefault(); // Evita el zoom en móviles
            iniciarMovimiento(direccion);
        });

        boton.addEventListener("touchend", () => {
            detenerMovimiento();
        });
    });
}


// 📌 Exportamos las funciones para usarlas en otros archivos si es necesario
export { configurarTeclado, configurarBotones };
