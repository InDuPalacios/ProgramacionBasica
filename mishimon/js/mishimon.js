let ataqueJugador 
let ataqueEnemigo
let resultado

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
}

function seleccionarMascotaJugador(){
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
    spanMascotaJugador.innerHTML = "WALTERMON"
   }
   else {
    alert ("no seleccionaste tu mascota")
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

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

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
   
    if(ataqueJugador == ataqueEnemigo) {
        resultado= "Es un trágico EMPATE!!🫣🫢"
        crearMensaje()
      } 
      else if ((ataqueJugador  == "TIERRA" && ataqueEnemigo == "AGUA") || 
      (ataqueJugador  == "FUEGO" && ataqueEnemigo == "TIERRA") || 
      (ataqueJugador  == "AGUA" && ataqueEnemigo == "FUEGO")) {
        resultado= "Acabas de GANAR!! 👏🤩🏅"
        crearMensaje()
      }
      else {
        resultado= "PERDISTE!! 🤕🤕🤕"
        crearMensaje()
    }
}


function crearMensaje(){
    let sectionMensaje = document.getElementById("mensajes")
    let parrafo = document.createElement("p")

    parrafo.innerHTML= "Tu mascota ataco con " + ataqueJugador +", la mascota de tu enemigo ataco con " + 
    ataqueEnemigo + " -  "  + resultado  

    sectionMensaje.appendChild(parrafo)

}


    
    


window.addEventListener("load", iniciarJuego)