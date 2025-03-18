import { mishimonJugador, mishimonEnemigo } from './class/characters/datamishimon.js';

import { crearMensaje } from "./ui/functions/msgMishimonGame.js";
import { revisarVidas } from "./class/mechanics/winCondition.js";

import { asignarMishimonJugador, iniciarMapa, generarEnemigos } from './mapa.js';
 
// Variables globales

let mishimones = mishimonJugador;
let enemigos = mishimonEnemigo;
let ataqueJugador, ataqueEnemigo;
let vidasJugador = 3, vidasEnemigo = 3;
let ataquesJugadorDisponibles = [], ataquesEnemigoDisponibles = [];
let rondasJugadas = 0;

const contenedorAtaquesJugador = document.getElementById("divAtaquesPosiblesJugador");
const contenedorAtaquesEnemigo = document.getElementById("divAtaquesPosiblesEnemigo");
const contenedorAtaquesEnemigoDisponibles = document.getElementById("divAtaquesDisponiblesEnemigo");



