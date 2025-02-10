// 1️⃣ Variables globales
const botonesAtaque = ["tierra", "fuego", "agua"];
const mascotas = ["Growmon", "Firemon", "Waltermon"];
const enemigos = ["Dearthmon", "Defiremon", "Dewatermon"]; 
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const ataques = ["Agua", "Tierra", "Fuego"];

const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");

let mishimones = []
let ataqueJugador, ataqueEnemigo, resultado, opcionDeMishimones;
let vidasJugador = 3, vidasEnemigo = 3;

class Mishimon{
    constructor(nombre, foto, vida,){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let growmon = new Mishimon('Growmon', './assets/mishimon__growmon.webp', 5)
let firemon = new Mishimon('Firemon', './assets/mishimon_firemon.webp', 5)
let waltermon = new Mishimon('Waltermon', './assets/mishimon__waltermon.webp', 5)

waltermon.ataques.push(
    { nombre:'💧', id: 'boton-agua' },
    { nombre:'💧', id: 'boton-agua' },
    { nombre:'💧', id: 'boton-agua' },
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'🌱', id: 'boton-tierra' }
)

growmon.ataques.push(
    { nombre:'🌱', id: 'boton-tierra' },
    { nombre:'🌱', id: 'boton-tierra' },
    { nombre:'🌱', id: 'boton-tierra' },
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'💧', id: 'boton-agua' }
)

firemon.ataques.push(
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'💧', id: 'boton-agua' },
    { nombre:'🌱', id: 'boton-tierra' }
)

mishimones.push(waltermon,growmon,firemon)

// 2️⃣ Función que inicia el juego
function iniciarJuego() {
    document.getElementById("seleccionar-ataque").style.display = "none";
    document.getElementById("reiniciar").style.display = "none";

    mishimones.forEach((mishimon) => {
        opcionDeMishimones = `
        <input type="radio" name="mascota" id=${mishimon.nombre} />
                <label class="tajeta-de-mishimon" for=${mishimon.nombre} >
                    <p>${mishimon.nombre}</p>
                    <img src=${mishimon.foto} alt=${mishimon.nombre}>
                </label>`
        contenedorTarjetas.innerHTML += opcionDeMishimones;

    });
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonReiniciar.addEventListener("click", () => location.reload());

    botonesAtaque.forEach(tipo => {
        document.getElementById(`boton-${tipo}`).addEventListener("click", () => {
            ataqueJugador = tipo.charAt(0).toUpperCase() + tipo.slice(1);
            ataqueAleatorioEnemigo();
        });
    });
}

// 3️⃣ Función para seleccionar la mascota
function seleccionarMascotaJugador() {
    const seleccionada = mishimones.find(m => document.getElementById(m.nombre).checked);
    
    if (seleccionada) {
        // Mostrar el nombre del Mishimon seleccionado
        document.getElementById("mascota-jugador").innerHTML = seleccionada.nombre;

        // Crear y mostrar la imagen del Mishimon seleccionado
        const imagenMishimon = document.createElement("img");
        imagenMishimon.src = seleccionada.foto;
        imagenMishimon.alt = seleccionada.nombre;
        imagenMishimon.style.width = "120px";
        imagenMishimon.style.display = "block";

        // Obtener el contenedor donde se muestra la mascota del jugador
        const contenedorMascotaJugador = document.getElementById("mascota-jugador");

        // Limpiar contenido previo para evitar duplicados
        contenedorMascotaJugador.innerHTML = "";
        
        // Agregar la imagen y el nombre al contenedor
        contenedorMascotaJugador.appendChild(imagenMishimon);
        contenedorMascotaJugador.appendChild(document.createTextNode(seleccionada.nombre));

        // Ocultar selección y mostrar la pantalla de ataques
        document.getElementById("seleccionar-mascota").style.display = "none";
        document.getElementById("seleccionar-ataque").style.display = "flex";

        seleccionarMascotaEnemigo();
    } else {
        alert("No has seleccionado tu mascota");
    }
}


// 4️⃣ Función para seleccionar la mascota enemiga
function seleccionarMascotaEnemigo() {
    console.log("Función seleccionarMascotaEnemigo() ejecutada");

    // Seleccionamos aleatoriamente un enemigo de la lista
    const indiceEnemigo = aleatorio(0, enemigos.length - 1);
    const nombreEnemigo = enemigos[indiceEnemigo];

    console.log("Enemigo seleccionado:", nombreEnemigo);

    // ✅ Definir correctamente la variable `imagenesEnemigos`
    const imagenesEnemigos = {
        "Dewatermon": "./assets/mishimon__dwather.webp",
        "Defiremon": "./assets/mishimon_defire.webp",
        "Dearthmon": "./assets/mishimon_desheet.webp"
    };

    // Crear la imagen del Mishimon enemigo
    const imagenEnemigo = document.createElement("img");
    imagenEnemigo.src = imagenesEnemigos[nombreEnemigo] || "./assets/default_mishimon.webp"; // Imagen por defecto si no se encuentra
    imagenEnemigo.alt = nombreEnemigo;
    imagenEnemigo.style.width = "120px";
    imagenEnemigo.style.display = "block";

    // Si la imagen no se carga, mostrar un mensaje en la consola
    imagenEnemigo.onerror = function () {
        console.error("No se pudo cargar la imagen del enemigo:", imagenEnemigo.src);
    };

    // Obtener el contenedor donde se muestra la mascota del enemigo
    const contenedorMascotaEnemigo = document.getElementById("mascota-enemigo");

    // Limpiar contenido previo para evitar duplicaciones
    contenedorMascotaEnemigo.innerHTML = "";

    // Crear el elemento de texto con el nombre del enemigo
    const nombreEnemigoElemento = document.createElement("p");
    nombreEnemigoElemento.innerText = nombreEnemigo;
    nombreEnemigoElemento.classList.add("mascota-nombre");  // Aplicar negrilla con CSS

    // Agregar imagen y nombre al contenedor
    contenedorMascotaEnemigo.appendChild(imagenEnemigo);
    contenedorMascotaEnemigo.appendChild(nombreEnemigoElemento);
}



// 5️⃣ Función para el ataque del enemigo
function ataqueAleatorioEnemigo() {
    ataqueEnemigo = ataques[aleatorio(0, 2)];
    combate();
}

// 6️⃣ Función de combate
function combate() {
    const resultadoTexto = (ataqueJugador === ataqueEnemigo) ? "Es un EMPATE!!"
        : (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") ||
          (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") ||
          (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") 
        ? "GANASTE!! 🎉" : "PERDISTE!! 😢";

    if (resultadoTexto.includes("GANASTE")) vidasEnemigo--;
    if (resultadoTexto.includes("PERDISTE")) vidasJugador--;

    document.getElementById("vidas-jugador").innerHTML = vidasJugador;
    document.getElementById("vidas-enemigo").innerHTML = vidasEnemigo;
    
    crearMensaje(resultadoTexto);
    revisarVidas();
}

// 7️⃣ Revisar si alguien perdió
function revisarVidas() {
    if (vidasJugador === 0) crearMensajeFinal("💀 PERDISTE 💀");
    else if (vidasEnemigo === 0) crearMensajeFinal("🎉 GANASTE 🎉");
}

// 8️⃣ Función para mostrar mensajes
function crearMensaje(resultado) {
    document.getElementById("resultado").innerHTML = resultado;
    ["ataques-del-jugador", "ataques-del-enemigo"].forEach((id, i) => {
        const nuevoAtaque = document.createElement("p");
        nuevoAtaque.innerHTML = i === 0 ? ataqueJugador : ataqueEnemigo;
        document.getElementById(id).appendChild(nuevoAtaque);
    });
}

// 9️⃣ Función para el mensaje final
function crearMensajeFinal(resultadoFinal) {
    document.getElementById("reiniciar").style.display = "flex";
    document.getElementById("resultado").innerHTML = resultadoFinal;
    botonesAtaque.forEach(id => document.getElementById(`boton-${id}`).disabled = true);
}

// 🔟 Función para generar un número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 🔥 Iniciar el juego cuando cargue la página
window.addEventListener("load", iniciarJuego);