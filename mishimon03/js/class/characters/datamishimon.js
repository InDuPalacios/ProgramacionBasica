// 📌 Definición de la clase Mishimon
class Mishimon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

// 📌 Creación de los Mishimones del jugador
let mishimonJugador = [
    new Mishimon('Waltermon', './assets/mishimon__waltermon.svg', 5),
    new Mishimon('Growmon', './assets/mishimon__growmon.svg', 5),
    new Mishimon('Firemon', './assets/mishimon_firemon.svg', 5)
];

// 📌 Creación de los Mishimones enemigos
let mishimonEnemigo = [
    new Mishimon('Dewatermon', './assets/mishimon__dwather.svg', 5),
    new Mishimon('Defiremon', './assets/mishimon_defire.svg', 5),
    new Mishimon('Dearthmon', './assets/mishimon_desheet.svg', 5)
];

// 📌 Asignación de ataques
const ataques = {
    agua: { nombre: '💧 Agua', id: 'boton-agua' },
    fuego: { nombre: '🔥 Fuego', id: 'boton-fuego' },
    tierra: { nombre: '🌱 Tierra', id: 'boton-tierra' }
};

const asignarAtaques = (mishimon, tipo) => {
    if (tipo === 'agua') {
        mishimon.ataques.push(
            ataques.agua,
            ataques.agua,
            ataques.agua,
            ataques.fuego,
            ataques.tierra
        );
    } else if (tipo === 'tierra') {
        mishimon.ataques.push(
            ataques.tierra,
            ataques.tierra,
            ataques.tierra,
            ataques.fuego,
            ataques.agua
        );
    } else if (tipo === 'fuego') {
        mishimon.ataques.push(
            ataques.fuego,
            ataques.fuego,
            ataques.fuego,
            ataques.agua,
            ataques.tierra
        );
    }
};

// Asignar ataques a cada Mishimon
asignarAtaques(mishimonJugador[0], 'agua');
asignarAtaques(mishimonJugador[1], 'tierra');
asignarAtaques(mishimonJugador[2], 'fuego');
asignarAtaques(mishimonEnemigo[0], 'agua');
asignarAtaques(mishimonEnemigo[1], 'fuego');
asignarAtaques(mishimonEnemigo[2], 'tierra');

// Variables globales
let mishimones = mishimonJugador;
let enemigos = mishimonEnemigo;

// 📌 Exportar variables para usarlas en otros archivos
export { Mishimon, mishimonJugador, mishimonEnemigo, mishimones, enemigos };
