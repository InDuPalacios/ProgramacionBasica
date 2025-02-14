//mapa.js
import { detectarColision, mostrarVentanaEmergente, cerrarVentanaEmergente } from "./batalla.js";

let lienzo, mapa, fondoMapa;
let mishimonJugador = null;
let mishimonEnemigo = null;

function iniciarMapa() {
    mapa = document.getElementById("mapa");
    lienzo = mapa.getContext("2d");
    fondoMapa = new Image();
    fondoMapa.src = "./assets/escene.png";

    fondoMapa.onload = () => {
        ajustarCanvas(); // 🔥 Ajustar tamaño antes de empezar
        requestAnimationFrame(actualizarCanvas);

        // 💡 Esperar un pequeño tiempo antes de generar al enemigo
        setTimeout(() => {
            if (!mishimonEnemigo) {
                asignarMishimonEnemigo({ 
                    nombre: "Enemigo", 
                    foto: "./assets/mishimon-enemigo.png" 
                });
            }
        }, 100); // Esperamos 100ms para asegurarnos de que el mapa tenga dimensiones
    };

    // Ajustar el canvas cuando se cambia el tamaño de la ventana
    window.addEventListener("resize", ajustarCanvas);
}


function asignarMishimonJugador(mishimon) {
    if (!mishimonJugador) {
        mishimonJugador = {
            nombre: mishimon.nombre,
            mapaFoto: new Image(),
            x: 100,
            y: 100,
            ancho: 50,
            alto: 50,
        };
        mishimonJugador.mapaFoto.src = mishimon.foto;
    }
}

function asignarMishimonEnemigo(mishimon) {
    // 💡 Asegurarse de que el mapa tiene dimensiones válidas antes de asignar posiciones aleatorias
    if (!mapa || mapa.width === 0 || mapa.height === 0) {
        console.warn("El mapa aún no tiene dimensiones correctas. Reintentando...");
        setTimeout(() => asignarMishimonEnemigo(mishimon), 50); // Reintenta después de 50ms
        return;
    }

    const margen = 20;
    const maxX = mapa.width - 80 - margen;
    const maxY = mapa.height - 80 - margen;

    mishimonEnemigo = {
        nombre: mishimon.nombre,
        mapaFoto: new Image(),
        x: Math.random() * (maxX - margen) + margen, 
        y: Math.random() * (maxY - margen) + margen,
        ancho: 80,
        alto: 80,
    };

    mishimonEnemigo.mapaFoto.src = mishimon.foto;

    mishimonEnemigo.mapaFoto.onload = () => {
        pintarMishimones();
    };

    mishimonEnemigo.mapaFoto.onerror = () => {
        console.error("Error al cargar la imagen del enemigo.");
    };
}


function actualizarCanvas() {
    if (mishimonJugador && mishimonEnemigo) { 
        pintarMishimones();
        detectarColision(mishimonJugador, mishimonEnemigo);
    }

    requestAnimationFrame(actualizarCanvas);
}

function pintarMishimones() {
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(fondoMapa, 0, 0, mapa.width, mapa.height);

    // Dibujar el Mishimon del jugador
    if (mishimonJugador && mishimonJugador.mapaFoto.complete) {
        lienzo.drawImage(
            mishimonJugador.mapaFoto,
            mishimonJugador.x,
            mishimonJugador.y,
            mishimonJugador.ancho,
            mishimonJugador.alto
        );
    }

    // Dibujar el Mishimon enemigo
    if (mishimonEnemigo && mishimonEnemigo.mapaFoto.complete) {
        lienzo.drawImage(
            mishimonEnemigo.mapaFoto,
            mishimonEnemigo.x,
            mishimonEnemigo.y,
            mishimonEnemigo.ancho,
            mishimonEnemigo.alto
        );
    }
}
// Ajustes de canvas para responsive
function ajustarCanvas() {
    const anchoDeseado = window.innerWidth * 0.8;
    const altoDeseado = window.innerHeight * 0.5;
    const tamañoFinal = Math.min(anchoDeseado, altoDeseado, 500);

    mapa.width = tamañoFinal;
    mapa.height = tamañoFinal;

    ajustarElementosCanvas(tamañoFinal);
    pintarMishimones();
}


function ajustarElementosCanvas(nuevoTamaño) {
    if (!mishimonJugador) return;
    const escala = nuevoTamaño / 500;
    mishimonJugador.ancho = 80 * escala;
    mishimonJugador.alto = 80 * escala;
    mishimonJugador.x = mishimonJugador.x * escala;
    mishimonJugador.y = mishimonJugador.y * escala;
}

// Exportar funciones necesarias
export { iniciarMapa, asignarMishimonJugador, asignarMishimonEnemigo, pintarMishimones, mishimonJugador, mishimonEnemigo };


