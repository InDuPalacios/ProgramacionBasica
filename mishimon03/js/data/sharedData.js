import { Mishimon, asignarAtaques } from '../class/characters/datamishimon.js';

// -------- Declarar variables globales -----------------------------------------------
export let mishimonJugadorSet = {};  
export let mishimonEnemigoSet = {};
export let ataqueJugador, ataqueEnemigo;
export let vidasJugador = 3, vidasEnemigo = 3;
export let ataquesJugadorDisponibles = [], ataquesEnemigoDisponibles = [];
export let rondasJugadas = 0;

export const canvasData = {
    lienzo: null,
    fondoMapa: null,
    mapaCargado: false,
    velocidad: 2,
    direccion: { x: 0, y: 0 },
    movimientoActivo: false,
};



// 📌 Creación de los Mishimones del jugador
export let mishimonJugador = [
    new Mishimon('Waltermon', './assets/mishimon__waltermon.svg', 5),
    new Mishimon('Growmon', './assets/mishimon__growmon.svg', 5),
    new Mishimon('Firemon', './assets/mishimon_firemon.svg', 5)
];

// 📌 Creación de los Mishimones enemigos
export let mishimonEnemigo = [
    new Mishimon('Dewatermon', './assets/mishimon__dwather.svg', 5),
    new Mishimon('Defiremon', './assets/mishimon_defire.svg', 5),
    new Mishimon('Dearthmon', './assets/mishimon_desheet.svg', 5)
];

// Asignar ataques a cada Mishimon
asignarAtaques(mishimonJugador[0], 'agua');
asignarAtaques(mishimonJugador[1], 'tierra');
asignarAtaques(mishimonJugador[2], 'fuego');

asignarAtaques(mishimonEnemigo[0], 'agua');
asignarAtaques(mishimonEnemigo[1], 'fuego');
asignarAtaques(mishimonEnemigo[2], 'tierra');

export let mishimones = mishimonJugador;
export let enemigos = mishimonEnemigo;

// ------- Declarar constantes y obtener objetos html del DOM por ID ------------------
export const sectionSeleccionarAtaque = document.getElementById("sectionSeleccionarAtaque");
export const sectionBtnReiniciar = document.getElementById("sectionBtnReiniciar");
export const sectionSeleccionarMascota = document.getElementById("sectionSeleccionarMascota")
export const sectionVerMapa = document.getElementById("sectionVerMapa");
export const sectionConfirmSelection = document.getElementById("sectionConfirmSelection");
export const divTarjetas = document.getElementById('divTarjetas');
export const divAtaquesDisponiblesEnemigo = document.getElementById("divAtaquesDisponiblesEnemigo");
export const divAtaquesPosiblesJugador = document.getElementById("divAtaquesPosiblesJugador")
export const btnMascota = document.getElementById("btnMascota");
export const btnProbarOtro = document.getElementById("btnProbarOtro")
export const btnConfirmarSeleccion = document.getElementById("btnConfirmarSeleccion")
export const btnReiniciar = document.getElementById("btnReiniciar");
export const contenedorAtaquesJugador = document.getElementById("divAtaquesPosiblesJugador");
export const contenedorAtaquesEnemigo = document.getElementById("divAtaquesPosiblesEnemigo");
export const contenedorAtaquesEnemigoDisponibles = document.getElementById("divAtaquesDisponiblesEnemigo");
export const modal = document.getElementById("sectionConfirmSelection");
export const infoMascota = document.getElementById("infoMascotaSeleccionada");
export const canvasMapa = document.getElementById("canvasMapa");

