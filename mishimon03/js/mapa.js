import { detectarColision, mostrarVentanaEmergente, cerrarVentanaEmergente } from "./batalla.js";
import { mishimonEnemigo } from "./class/characters/datamishimon.js"; // Importando los enemigos correctos


// TIENES QUE HACER QUE LOS BICHOS NO APAREZCAN UNO ENCIMA DE OTRO
// QUE SE APAREZCAN DOS DE MANERA ALEATOREA PORQUE AHORA APARECEN TODOS
let lienzo, canvasMapa, fondoMapa;
let mishimonJugador = null;
let mishimonesEnemigos = [];

function iniciarMapa() {
    canvasMapa = document.getElementById("canvasMapa");

    if (!canvasMapa) {
        console.error("❌ Error: El canvasMapa no está definido en el DOM.");
        return;
    }

    lienzo = canvasMapa.getContext("2d");
    fondoMapa = new Image();
    fondoMapa.src = "./assets/escene.png";

    fondoMapa.onload = () => {
        ajustarCanvas();
        generarEnemigos(); // Generar enemigos correctamente desde el inicio
        requestAnimationFrame(actualizarCanvas);
    };

    window.addEventListener("resize", () => {
        ajustarCanvas();
        generarEnemigos();
    });
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

function generarEnemigos() {
    if (!canvasMapa) return;

    mishimonesEnemigos = [];

    for (let i = 0; i < 3; i++) {
        let enemigoData = mishimonEnemigo[i]; // Toma el enemigo de la lista correcta

        let enemigo = {
            nombre: enemigoData.nombre,
            mapaFoto: new Image(),
            x: Math.random() * (canvasMapa.width - 50) || 50, // Evita NaN
            y: Math.random() * (canvasMapa.height - 50) || 50,
            ancho: 50,
            alto: 50,
        };

        enemigo.mapaFoto.src = enemigoData.foto;

        enemigo.mapaFoto.onload = () => pintarMishimones();
        mishimonesEnemigos.push(enemigo);
    }
}

function actualizarCanvas() {
    if (mishimonJugador && mishimonesEnemigos.length > 0) {
        pintarMishimones();
        for (let enemigo of mishimonesEnemigos) {
            detectarColision(mishimonJugador, enemigo);
        }
    }
    requestAnimationFrame(actualizarCanvas);
}

function pintarMishimones() {
    if (!lienzo || !canvasMapa) return;

    lienzo.clearRect(0, 0, canvasMapa.width, canvasMapa.height);
    lienzo.drawImage(fondoMapa, 0, 0, canvasMapa.width, canvasMapa.height);

    if (mishimonJugador && mishimonJugador.mapaFoto.complete) {
        lienzo.drawImage(
            mishimonJugador.mapaFoto,
            mishimonJugador.x,
            mishimonJugador.y,
            mishimonJugador.ancho,
            mishimonJugador.alto
        );
    }

    mishimonesEnemigos.forEach(enemigo => {
        if (enemigo.mapaFoto.complete) {
            lienzo.drawImage(
                enemigo.mapaFoto,
                enemigo.x,
                enemigo.y,
                enemigo.ancho,
                enemigo.alto
            );
        }
    });
}

function ajustarCanvas() {
    if (!canvasMapa) return;

    const anchoDeseado = window.innerWidth * 0.8;
    const altoDeseado = window.innerHeight * 0.5;
    const tamañoFinal = Math.min(anchoDeseado, altoDeseado, 500);

    canvasMapa.width = tamañoFinal;
    canvasMapa.height = tamañoFinal;

    ajustarElementosCanvas(tamañoFinal);
    pintarMishimones();
}

function ajustarElementosCanvas(nuevoTamaño) {
    if (!mishimonJugador) return;
    const escala = nuevoTamaño / 500;
    mishimonJugador.ancho = 80 * escala;
    mishimonJugador.alto = 80 * escala;
    mishimonJugador.x *= escala;
    mishimonJugador.y *= escala;
}

export { iniciarMapa, asignarMishimonJugador, generarEnemigos, pintarMishimones, mishimonJugador, mishimonesEnemigos };
