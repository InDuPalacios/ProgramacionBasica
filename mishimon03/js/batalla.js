// batalla.js

import { 
    ataqueAleatorioEnemigo } from "./ui/functions/ctrlMishimonGame.js";

import { 
    ataquesEnemigoDisponibles,
    divAreaTarjetasAtaques,
    rondasJugadas,
    divAtaquesDisponiblesEnemigo,
    ataqueSeleccionadoJugador,
    estadoBatalla } from "./data/sharedData.js";

import { 
    crearMensaje, 
    crearMensajeFinal} from "./ui/functions/msgMishimonGame.js";


// Variables para el combate
let vidasJugador = 5;
let vidasEnemigo = 5;



// Función para mostrar el modal
function mostrarVentanaBatalla() {
    sectionSeleccionarAtaque.style.display = "block";
    modalOverlay.style.display = "block";
    console.log("🎬 Ventana de batalla mostrada. Esperando selección del jugador...");
}

function ejecutarTurno() {
    estadoBatalla.ataqueSeleccionadoEnemigo = ataqueAleatorioEnemigo();

    if (!estadoBatalla.ataqueSeleccionadoEnemigo || estadoBatalla.ataqueSeleccionadoEnemigo === "Sin ataque") {
        console.error("❌ Error: ataqueSeleccionadoEnemigo no se generó correctamente.");
        return;
    }

    console.log(`🚀 Turno iniciado: 
        🎯 Jugador: ${estadoBatalla.ataqueSeleccionadoJugador}, 
        👾 Enemigo: ${estadoBatalla.ataqueSeleccionadoEnemigo}`);

    let resultadoTexto = determinarResultadoCombate();
    
    rondasJugadas++; // Aumentamos el contador de rondas

    actualizarVidasEnElDOM(); // Actualizamos la interfaz
    crearMensaje(resultadoTexto);
    registrarAtaques();
    actualizarInterfazAtaquesEnemigo();

    verificarFinDelJuego(); // Revisamos si el juego terminó
}

function actualizarVidasEnElDOM() {
    document.getElementById("pContadorVidasJugador").innerHTML = vidasJugador;
    document.getElementById("pContadorVidasEnemigo").innerHTML = vidasEnemigo;
}

function registrarAtaques() {
    
    let divAtaquesEnemigo = document.getElementById("divAtaquesPosiblesEnemigo");

    if (!divAtaquesDisponiblesEnemigo || !divAtaquesEnemigo) {
        console.error("⚠ Error: No se encontró el contenedor de ataques.");
        return;
    }

    // Agregar ataque del jugador
    let ataqueJugadorElem = document.createElement("p");
    ataqueJugadorElem.innerText = ataqueJugador;
    ataqueJugadorElem.classList.add("ataque-jugador");
    divAtaquesDisponiblesEnemigo.appendChild(ataqueJugadorElem);

    // Agregar ataque del enemigo
    let ataqueEnemigoElem = document.createElement("p");
    ataqueEnemigoElem.innerText = ataqueEnemigo;
    ataqueEnemigoElem.classList.add("ataque-enemigo");
    divAtaquesEnemigo.appendChild(ataqueEnemigoElem);

    console.log(`✅ Ataques registrados: Jugador (${ataqueJugador}), Enemigo (${ataqueEnemigo})`);
}

function actualizarInterfazAtaquesEnemigo() {
    let botonesAtaques = document.querySelectorAll("#divAtaquesDisponiblesEnemigo button");

    botonesAtaques.forEach((boton, index) => {
        let botonTexto = boton.innerText.trim(); // Tomamos solo el texto visible
        let ataqueEncontrado = ataquesEnemigoDisponibles.some(ataque => 
            ataque.nombre.trim() === botonTexto
        );

        if (!ataqueEncontrado) {
            console.log(`✅ Botón ${index + 1} (${botonTexto}) cambiado a gris`);
        
            // Deshabilitar correctamente
            boton.disabled = true;
            boton.setAttribute("disabled", "true");
        
            // Agregar clase para cambiar el estilo visual
            boton.classList.add("boton-deshabilitado");
        
            // Asegurar cambios de color
            boton.style.backgroundColor = "#808080 !important"; // Forzar color gris
            boton.style.color = "#ffffff";
            boton.style.cursor = "not-allowed";
            boton.style.border = "1px solid #666";
            boton.style.opacity = "0.6"; 
        }
         else {
            // Restaurar estilos en los botones aún activos
            boton.disabled = false;
            boton.style.backgroundColor = "";
            boton.style.color = "";
            boton.style.cursor = "pointer";
            boton.style.border = "";
            boton.style.opacity = "1";
        }
    });

    console.log("📌 Ataques restantes del enemigo después de actualizar:", ataquesEnemigoDisponibles.map(a => a.nombre));
}

function mostrarBotonesAtaque( ataquesJugador) {
    divAreaTarjetasAtaques.innerHTML = ""; 

    ataquesJugador.forEach(ataque => {
        const btnAtaque = document.createElement("button");
        btnAtaque.id = ataque.id;
        btnAtaque.classList.add("boton-de-ataque");
        btnAtaque.innerText = ataque.nombre;

        // Efecto hover dinámico
        btnAtaque.addEventListener("mouseenter", () => {
            if (!btnAtaque.disabled) {
                btnAtaque.style.backgroundColor = "#BB9CC0";
                btnAtaque.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
            }
        });

        btnAtaque.addEventListener("mouseleave", () => {
            if (!btnAtaque.disabled) {
                btnAtaque.style.backgroundColor = "";
                btnAtaque.style.boxShadow = "";
            }
        });

        // Evento al hacer clic (ataque)
        btnAtaque.addEventListener("click", () => {
            if (btnAtaque.disabled) return;

            ataqueSeleccionadoJugador = ataque.nombre;
            console.log(`🎯 Ataque seleccionado por el jugador: ${ataqueSeleccionadoJugador}`);

            // Marcar botón como usado (deshabilitado)
            btnAtaque.disabled = true;
            btnAtaque.style.backgroundColor = "#d3d3d3";
            btnAtaque.style.cursor = "not-allowed";
            btnAtaque.style.filter = "grayscale(100%)";

            ejecutarTurno();
        });

        divAreaTarjetasAtaques.appendChild(btnAtaque);
    });
    console.log("✅ Botones de ataque generados correctamente con:", ataquesJugador );
}

function determinarResultadoCombate() {
    console.log(`📌 
        Ataque del jugador: ${ataqueSeleccionadoJugador}, 
        Ataque del enemigo: ${ataqueEnemigo}`);

    if (!ataqueSeleccionadoJugador || !ataqueEnemigo) {
         console.error("❌ Error: ataqueSeleccionadoJugador o ataqueEnemigo no están definidos.");
        return "⚠ Error en la batalla, intenta de nuevo.";
    }

    if (ataqueSeleccionadoJugador === ataqueEnemigo) {
        return "Es un EMPATE!!";
    } else if (
        (ataqueSeleccionadoJugador === "🔥" && ataqueEnemigo === "🌱") ||
        (ataqueSeleccionadoJugador === "💧" && ataqueEnemigo === "🔥") ||
        (ataqueSeleccionadoJugador === "🌱" && ataqueEnemigo === "💧")
    ) {
        vidasEnemigo--;
        return "GANASTE!! 🎉";
    } else {
        vidasJugador--;
        return "PERDISTE!! 😢";
    }
}

function verificarFinDelJuego() {
    if (rondasJugadas >= 5 || vidasJugador === 0 || vidasEnemigo === 0 || ataquesEnemigoDisponibles.length === 0) {
        if (vidasJugador > vidasEnemigo) {
            crearMensajeFinal("🎉 GANASTE LA PARTIDA! 🎉");
        } else if (vidasEnemigo > vidasJugador) {
            crearMensajeFinal("💀 PERDISTE LA PARTIDA! 💀");
        } else {
            crearMensajeFinal("🤝 EMPATE FINAL! 🤝");
        }
    }
}

// Función para cerrar el modal
function cerrarVentanaBatalla() {
    sectionSeleccionarAtaque.style.display = "none"; // Ocultar el modal
    modalOverlay.style.display = "none"; // Ocultar el fondo oscuro
    console.log("❌ Cerrando el menú de selección de ataque.");
}

if (btnCerrarBatalla) {
    btnCerrarBatalla.addEventListener("click", cerrarVentanaBatalla);
    } else {
       console.warn("⚠ No se encontró el botón 'btnCerrarBatalla'. Asegúrate de que el HTML lo carga antes.");
}


// Exportar las funciones para su uso en otros archivos
export { mostrarVentanaBatalla, cerrarVentanaBatalla, mostrarBotonesAtaque, actualizarInterfazAtaquesEnemigo };
