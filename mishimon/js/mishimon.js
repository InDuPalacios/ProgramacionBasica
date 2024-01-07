function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipodogue = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")

   if (inputHipodogue.checked){
    alert("Seleccionaste HIPODOGE")
   }
   else if (inputCapipepo.checked){
    alert("Seleccionaste CAPIPEPO")
   }
   else if (inputRatigueya.checked){
    alert("Seleccionaste RATIGUEYA")
   }
   else {
    alert ("no seleccionaste tu mascota")
   }
 
    
       
}
   

window.addEventListener("load", iniciarJuego)