let ataqueJugador 
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

//Escuchando los botones
function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    let sectionReiniciarJuego = document.getElementById("reiniciar")
    sectionReiniciarJuego.style.display = "none"


    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

//Seleccion de mascotas
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota =  document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputGrowmon = document.getElementById("growmon")
    let inputFiremon = document.getElementById("firemon")
    let inputWaltermon = document.getElementById("waltermon")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

   if (inputGrowmon.checked){
    spanMascotaJugador.innerHTML = "GROWMON"
   }
   else if (inputFiremon.checked){
    spanMascotaJugador.innerHTML = "FIREMON"
   }
   else if (inputWaltermon.checked){
    spanMascotaJugador.innerHTML = "WALTERM"
   }
   else {
    alert ("No has selecionado tu mascota")
   } 

   seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaEnemigo = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    
    if (mascotaEnemigo == 1){
        spanMascotaEnemigo.innerHTML = "DEARTHMON"
       }
       else if (mascotaEnemigo == 2){
        spanMascotaEnemigo.innerHTML = "DEFIREMON"
       }
       else {
        spanMascotaEnemigo.innerHTML = "DEWATERMON"
       }
}

//Seleccion de ataque
function ataqueTierra(){
    ataqueJugador = "TIERRA"

    ataqueAleatorioEnemigo()
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

//Ataque del enemigo
function ataqueAleatorioEnemigo(){
    let ataqueAletorio = aleatorio(1,3)
    
    if (ataqueAletorio == 3){
        ataqueEnemigo = "AGUA"
    }
    else if (ataqueAletorio == 2){
        ataqueEnemigo = "TIERRA"
    }
    else{
        ataqueEnemigo = "FUEGO"
    }

    combate()
}

//COMBATE
function combate (){
    let vidasTotalJugador = document.getElementById ("vidas-jugador")
    let vidasTotalEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueJugador == ataqueEnemigo) {
        resultado= "Es un trágico EMPATE!!🫣🫢"
        crearMensaje()
      } 
      else if ((ataqueJugador  == "TIERRA" && ataqueEnemigo == "AGUA") || 
      (ataqueJugador  == "FUEGO" && ataqueEnemigo == "TIERRA") || 
      (ataqueJugador  == "AGUA" && ataqueEnemigo == "FUEGO")) {
        resultado= "Acabas de GANAR!! 👏🤩🏅"
        crearMensaje()
        vidasEnemigo --
        vidasTotalEnemigo.innerHTML = vidasEnemigo
      }
      else {
        resultado= "PERDISTE!! 🤕🤕🤕"
        crearMensaje()
        vidasJugador --
        vidasTotalJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas (){
    if (vidasJugador == 0){
        crearMensajeFinal("💀 Lo siento, acabas de PERDER 💀 Me debes un helado 😋🍨")
    }
    else if (vidasEnemigo == 0){
        crearMensajeFinal("YEEEEH GANASTE 🤗🤗🤗 Felicitaciones!!!🌟🌟🌟")
    }
}

function crearMensaje(){
    let sectionMensaje = document.getElementById("mensajes")
    let parrafo = document.createElement("p")

    parrafo.innerHTML= "Tu mascota ataco con " + ataqueJugador +", la mascota de tu enemigo ataco con " + 
    ataqueEnemigo + " -  "  + resultado  

    sectionMensaje.appendChild(parrafo)
}

//Resultado final de la partida
function crearMensajeFinal(resultadoFinal){
    let sectionReiniciarJuego = document.getElementById("reiniciar")
    sectionReiniciarJuego.style.display = "block"

    let sectionMensaje = document.getElementById("mensajes")
    let parrafo = document.createElement("p")

    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.disabled = true
}

//Reiniciar juego
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)