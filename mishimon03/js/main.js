// -------- Importar funciones / variables / clases desde submodulos JS ---------------

import { iniciarJuego } from './ui/coreMishimonGame.js'
import { mishimonJugador, mishimonEnemigo } from './class/characters/datamishimon.js';

import "./mishimon.js";
import "./movimiento.js";
import "./inputs.js";

// -------- Declarar variables globales -----------------------------------------------
let mishimones = mishimonJugador;
let enemigos = mishimonEnemigo;
let ataqueJugador, ataqueEnemigo;
let vidasJugador = 3, vidasEnemigo = 3;
let ataquesJugadorDisponibles = [], ataquesEnemigoDisponibles = [];
let rondasJugadas = 0;
// -----------------------------------------------------------------------------------

// ------- Declarar constantes y obtener objetos html del DOM por ID ------------------
const divTarjetas = document.getElementById('divTarjetas');
const sectionSeleccionarAtaque = document.getElementById("sectionSeleccionarAtaque");
const sectionBtnReiniciar = document.getElementById("sectionBtnReiniciar");
const divAtaquesDisponiblesEnemigo = document.getElementById("divAtaquesDisponiblesEnemigo");
const sectionVerMapa = document.getElementById("sectionVerMapa");
const btnMascota = document.getElementById("btnMascota");
const btnReiniciar = document.getElementById("btnReiniciar");
const contenedorAtaquesJugador = document.getElementById("divAtaquesPosiblesJugador");
const contenedorAtaquesEnemigo = document.getElementById("divAtaquesPosiblesEnemigo");
const contenedorAtaquesEnemigoDisponibles = document.getElementById("divAtaquesDisponiblesEnemigo");
// -----------------------------------------------------------------------------------

// ----------- 🔥 Iniciar juego -----------------------------------------------------
window.addEventListener(
    "load", 
    () => {
        iniciarJuego(
            sectionSeleccionarAtaque, 
            sectionBtnReiniciar, 
            divAtaquesDisponiblesEnemigo, 
            sectionVerMapa, 
            btnMascota, 
            btnReiniciar,
            divTarjetas,
            mishimones,
            ataquesEnemigoDisponibles,
            ataquesJugadorDisponibles,
            enemigos,
            contenedorAtaquesEnemigoDisponibles,
            mishimones
        );
    }
);