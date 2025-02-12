// Variables globales
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");

const contenedorAtaquesJugador = document.getElementById("ataques-del-jugador");
const contenedorAtaquesEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorAtaquesEnemigoDisponibles = document.getElementById("ataques-enemigo-disponibles");

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
let lienzo=mapa.getContext("2d")

let mishimones = [];
let enemigos = [];
let ataqueJugador, ataqueEnemigo;
let vidasJugador = 3, vidasEnemigo = 3;
let ataquesJugadorDisponibles = [], ataquesEnemigoDisponibles = [];
let rondasJugadas = 0;

class Mishimon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
    }
}

// 🔹 Definimos los Mishimones con sus ataques
let growmon = new Mishimon('Growmon', './assets/mishimon__growmon.webp', 5);
let firemon = new Mishimon('Firemon', './assets/mishimon_firemon.webp', 5);
let waltermon = new Mishimon('Waltermon', './assets/mishimon__waltermon.webp', 5);
let dewatermon = new Mishimon('Dewatermon', './assets/mishimon__dwather.webp', 5);
let defiremon = new Mishimon('Defiremon', './assets/mishimon_defire.webp', 5);
let dearthmon = new Mishimon('Dearthmon', './assets/mishimon_desheet.webp', 5);

dewatermon.ataques.push(
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' }
);

dearthmon.ataques.push(
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '💧 Agua', id: 'boton-agua' }
);

defiremon.ataques.push(
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' }
);

waltermon.ataques.push(
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' }
);

growmon.ataques.push(
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '💧 Agua', id: 'boton-agua' }
);

firemon.ataques.push(
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' }
);

mishimones.push(waltermon, growmon, firemon)
enemigos.push(dewatermon, defiremon, dearthmon);

// Función que inicia el juego
function iniciarJuego() {
    document.getElementById("seleccionar-ataque").style.display = "none";
    document.getElementById("reiniciar").style.display = "none";
    document.getElementById("ataques-enemigo-disponibles").style.display = "none";
    sectionVerMapa.style.display = "none";

    mishimones.forEach((mishimon) => {
        let opcionDeMishimones = `
        <input type="radio" name="mascota" id=${mishimon.nombre} />
        <label class="tajeta-de-mishimon" for=${mishimon.nombre}>
            <p>${mishimon.nombre}</p>
            <img src=${mishimon.foto} alt=${mishimon.nombre}>
        </label>`;
        contenedorTarjetas.innerHTML += opcionDeMishimones;
    });

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

// Función para seleccionar la mascota
function seleccionarMascotaJugador() {
    mishimonJugador = mishimones.find(m => document.getElementById(m.nombre).checked);

    if (mishimonJugador) {
        let contenedorMascotaJugador = document.getElementById("mascota-jugador");
        contenedorMascotaJugador.innerHTML = `
            <img src="${mishimonJugador.foto}" alt="${mishimonJugador.nombre}" width="120px">
            <p>${mishimonJugador.nombre}</p>`;

        ataquesJugadorDisponibles = mishimonJugador.ataques;
        mostrarBotonesAtaque();

        document.getElementById("seleccionar-mascota").style.display = "none";
        sectionVerMapa.style.display = "flex";

        // 🔹 Asegurar que la imagen cargue antes de dibujarla
        mishimonJugador.mapaFoto.onload = function () {
            pintarMishimon();
        };

        if (mishimonJugador.mapaFoto.complete) {
            pintarMishimon();
        }

        seleccionarMascotaEnemigo();
    } else {
        alert("No has seleccionado tu mascota");
    }
}

// Función para mostrar los botones de ataque
function mostrarBotonesAtaque() {
    const contenedorAtaques = document.querySelector(".tarjetas-ataques");
    contenedorAtaques.innerHTML = "";

    ataquesJugadorDisponibles.forEach(ataque => {
        const boton = document.createElement("button");
        boton.id = ataque.id;
        boton.classList.add("boton-de-ataque");
        boton.innerText = ataque.nombre;

        // Efecto hover con JavaScript
        boton.addEventListener("mouseenter", () => {
            if (!boton.disabled) {
                boton.style.backgroundColor = "#BB9CC0";
                boton.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
            }
        });

        boton.addEventListener("mouseleave", () => {
            if (!boton.disabled) {
                boton.style.backgroundColor = ""; // Volver al color original
                boton.style.color = ""; // Volver al color original del texto
                boton.style.border = "";
                boton.style.transform = "";
                boton.style.boxShadow = "";
            }
        });

        boton.addEventListener("click", () => {
            ataqueJugador = ataque.nombre.split(" ")[1];
            ataqueAleatorioEnemigo();
            
            // Marcar el botón como seleccionado y deshabilitarlo
            boton.disabled = true;
            boton.style.backgroundColor = "#BB9CC0";
        });

        contenedorAtaques.appendChild(boton);
    });
}

// Función para mostrar los ataques restantes del enemigo con estilos
function mostrarAtaquesEnemigo() {
    // Limpiamos solo los botones, sin afectar el subtítulo
    contenedorAtaquesEnemigoDisponibles.querySelectorAll("button").forEach(boton => boton.remove());

    // Agregamos los botones de los ataques
    ataquesEnemigoDisponibles.forEach(ataque => {
        let ataqueElemento = document.createElement("button"); 
        ataqueElemento.innerText = ataque.nombre;
        ataqueElemento.classList.add("boton-de-ataque");

        if (ataque.usado) {
            ataqueElemento.style.backgroundColor = "#BB9CC0"; // Indicar que fue usado
        }

        contenedorAtaquesEnemigoDisponibles.appendChild(ataqueElemento);
    });
}

// Función para seleccionar la mascota enemiga
function seleccionarMascotaEnemigo() {
    const indiceEnemigo = aleatorio(0, enemigos.length - 1);
    const enemigo = enemigos[indiceEnemigo];

    ataquesEnemigoDisponibles = [...enemigo.ataques]; 

    let contenedorMascotaEnemigo = document.getElementById("mascota-enemigo");
    contenedorMascotaEnemigo.innerHTML = `
        <img src="${enemigo.foto}" alt="${enemigo.nombre}" width="120px">
        <p>${enemigo.nombre}</p>`;

    document.getElementById("ataques-enemigo-disponibles").style.display = "block";

    mostrarAtaquesEnemigo();
}

// Función para que el enemigo elija un ataque aleatorio
function ataqueAleatorioEnemigo() {
    const ataquesDisponibles = ataquesEnemigoDisponibles.filter(a => !a.usado);
    if (ataquesDisponibles.length === 0) return;

    const indiceAtaque = aleatorio(0, ataquesDisponibles.length - 1);
    ataquesDisponibles[indiceAtaque].usado = true; // Marcar el ataque como usado

    ataqueEnemigo = ataquesDisponibles[indiceAtaque].nombre.split(" ")[1]; // Extraer el nombre del ataque
    mostrarAtaquesEnemigo(); // Actualizar la vista de ataques del enemigo
    combate();
}

// Función de combate
function combate() {
    const resultadoTexto = 
        (ataqueJugador === ataqueEnemigo) ? "Es un EMPATE!!"
        : (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") ||
          (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") ||
          (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego")
        ? "GANASTE!! 🎉" : "PERDISTE!! 😢";

    // Restar vida dependiendo del resultado
    if (resultadoTexto.includes("GANASTE")) vidasEnemigo--;
    if (resultadoTexto.includes("PERDISTE")) vidasJugador--;
    
    rondasJugadas++; // Incrementamos el contador de rondas
    
    // Actualizar vidas en el DOM
    document.getElementById("vidas-jugador").innerHTML = vidasJugador;
    document.getElementById("vidas-enemigo").innerHTML = vidasEnemigo;

    // Mostrar mensaje y registrar los ataques en el marcador
    crearMensaje(resultadoTexto);
    registrarAtaques();
    mostrarAtaquesEnemigo();

    // Revisar si alguien ha perdido o si se han jugado 5 rondas
    if (rondasJugadas >= 5 || vidasJugador === 0 || vidasEnemigo === 0) {
        if (vidasJugador > vidasEnemigo) {
            crearMensajeFinal("🎉 GANASTE LA PARTIDA! 🎉");
        } else if (vidasEnemigo > vidasJugador) {
            crearMensajeFinal("💀 PERDISTE LA PARTIDA! 💀");
        } else {
            crearMensajeFinal("🤝 EMPATE FINAL! 🤝");
        }
    }
}

// Función para registrar los ataques en el marcador
function registrarAtaques() {
    let ataqueJugadorElem = document.createElement("p");
    ataqueJugadorElem.innerText = ataqueJugador;
    contenedorAtaquesJugador.appendChild(ataqueJugadorElem);

    let ataqueEnemigoElem = document.createElement("p");
    ataqueEnemigoElem.innerText = ataqueEnemigo;
    contenedorAtaquesEnemigo.appendChild(ataqueEnemigoElem);
}

// Revisar si alguien ha perdido y mostrar el mensaje final
function revisarVidas() {
    if (vidasJugador === 0) {
        crearMensajeFinal("💀 PERDISTE 💀");
    } else if (vidasEnemigo === 0) {
        crearMensajeFinal("🎉 GANASTE 🎉");
    }
}

// Función para mostrar mensajes en la interfaz
function crearMensaje(resultado) {
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = resultado;
}

// Función para mostrar el mensaje final y desactivar botones de ataque
function crearMensajeFinal(resultadoFinal) {
    document.getElementById("reiniciar").style.display = "flex";
    document.getElementById("resultado").innerHTML = resultadoFinal;

    // Desactivar botones de ataque al finalizar el juego
    document.querySelectorAll(".boton-de-ataque").forEach(boton => {
        boton.disabled = true;
    });
}

// Función para reiniciar el juego
function reiniciarJuego() {
    location.reload();
}

// Generar número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// MOVIMIENTO DE MI PERSONAJE
let mishimonJugador = null;
let enemigoSeleccionado =null;
let intervaloMovimiento;

// Función para iniciar el movimiento continuo
function iniciarMovimiento(direccion) {
    detenerMovimiento(); 

    intervaloMovimiento = setInterval(() => {
        moverMishimon(direccion);
    }, 50); // Se ejecuta cada 50ms para un movimiento fluido
}

// Función para detener el movimiento
function detenerMovimiento() {
    clearInterval(intervaloMovimiento);
}

let fondoMapa = new Image();
fondoMapa.src = "./assets/escene.png";

// Función para dibujar el mishimon
function pintarMishimon() {
    if (!mishimonJugador) return; 

    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(fondoMapa, 0, 0, mapa.width, mapa.height);

    // 🔹 Dibujar al Mishimon del jugador
    lienzo.drawImage(
        mishimonJugador.mapaFoto,
        mishimonJugador.x,
        mishimonJugador.y,
        mishimonJugador.ancho,
        mishimonJugador.alto
    );
    // 🔹 Dibujar al enemigo en su posición aleatoria
    lienzo.drawImage(
        enemigoSeleccionado.mapaFoto,
        enemigoSeleccionado.x,
        enemigoSeleccionado.y,
        enemigoSeleccionado.ancho,
        enemigoSeleccionado.alto
    );
}

// Función para mover al mishimon en cualquier dirección
function moverMishimon(direccion) {
    if (!mishimonJugador) return; 
    const velocidad = 5; 

    if (direccion === "up") mishimonJugador.y -= velocidad;
    if (direccion === "down") mishimonJugador.y += velocidad;
    if (direccion === "left") mishimonJugador.x -= velocidad;
    if (direccion === "right") mishimonJugador.x += velocidad;

    pintarMishimon();
}

// CHAT GPT ME DICE QUE LO PONGA EN INICIAR JUEGO PERO NO ME FUNCIONA ALLI
window.onload = function () {
    pintarMishimon(); // Dibuja el personaje cuando el canvas aparece
};

// Función para ajustar el tamaño del canvas dinámicamente
function ajustarCanvas() {
    const anchoDeseado = window.innerWidth * 0.8; // Ocupa el 80% del ancho de la pantalla
    const altoDeseado = window.innerHeight * 0.5; // Ocupa el 50% del alto de la pantalla

    // Mantener una proporción cuadrada
    const tamañoFinal = Math.min(anchoDeseado, altoDeseado, 500); // Máximo 500px

    // Asignar el tamaño
    mapa.width = tamañoFinal;
    mapa.height = tamañoFinal;

    // Redibujar el Mishimon
    pintarMishimon();
}

function detectarTeclaPresionada(event) {
    const tecla = event.key.toLowerCase();

    if (tecla === "w" || tecla === "arrowup") iniciarMovimiento("up");
    if (tecla === "s" || tecla === "arrowdown") iniciarMovimiento("down");
    if (tecla === "a" || tecla === "arrowleft") iniciarMovimiento("left");
    if (tecla === "d" || tecla === "arrowright") iniciarMovimiento("right");
}

// 🔹 Detener el movimiento cuando se suelta la tecla
function detectarTeclaSoltada(event) {
    detenerMovimiento();
}

// Agregar eventos de teclado
window.addEventListener("keydown", detectarTeclaPresionada);
window.addEventListener("keyup", detectarTeclaSoltada);

// Ajustar el canvas cuando la ventana se redimensiona
window.addEventListener("resize", ajustarCanvas);
window.addEventListener("load", ajustarCanvas);
// Iniciar juego
window.addEventListener("load", iniciarJuego);




