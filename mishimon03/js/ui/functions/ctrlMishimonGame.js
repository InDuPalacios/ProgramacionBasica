// 📌 ui.js - Manejo de la interfaz del juego
import { asignarMishimonJugador, iniciarMapa, generarEnemigos } from "../../mapa.js"
import { aleatorio } from "../../class/mechanics/iaEnemy.js"

function seleccionarMascotaJugador(
    ataquesEnemigoDisponibles,
    ataquesJugadorDisponibles, 
    enemigos,
    contenedorAtaquesEnemigoDisponibles,
    mishimones
) {
    const seleccionada = mishimones.find(m => document.getElementById(m.nombre).checked);

    if (seleccionada) {
        let contenedorMascotaJugador = document.getElementById("pAvatarMascotaJugador");
        contenedorMascotaJugador.innerHTML = `
            <img src="${seleccionada.foto}" alt="${seleccionada.nombre}" width="120px">
            <p>${seleccionada.nombre}</p>`;

        ataquesJugadorDisponibles = seleccionada.ataques;
        
        //mostrarBotonesAtaque(
        //    ataquesEnemigoDisponibles,
        //    ataquesJugadorDisponibles
        //);

        document.getElementById("sectionSeleccionarMascota").style.display = "none";
        //document.getElementById("sectionSeleccionarAtaque").style.display = "flex";
        document.getElementById("sectionVerMapa").style.display = "flex";

        asignarMishimonJugador(seleccionada);
        seleccionada.mapaFoto = new Image();
        seleccionada.mapaFoto.src = seleccionada.foto;
        seleccionada.mapaFoto.onload = () => {
            // iniciarMapa();
        };
    } else {
        alert("No has seleccionado tu mascota");
    }
}

function seleccionarMascotaEnemigo(
    enemigos,
    contenedorAtaquesEnemigoDisponibles,
    ataquesEnemigoDisponibles
) {
    const indiceEnemigo = aleatorio(0, enemigos.length - 1);
    const enemigo = enemigos[indiceEnemigo];

    generarEnemigos(); 

    let contenedorMascotaEnemigo = document.getElementById("pAvatarMascotaEnemigo");
    contenedorMascotaEnemigo.innerHTML = `
        <img src="${enemigo.foto}" alt="${enemigo.nombre}" width="120px">
        <p>${enemigo.nombre}</p>`;

    document.getElementById("divAtaquesDisponiblesEnemigo").style.display = "block";

    mostrarAtaquesEnemigo(
        contenedorAtaquesEnemigoDisponibles,
        ataquesEnemigoDisponibles
    );
}

function mostrarBotonesAtaque(
    ataquesEnemigoDisponibles, 
    ataquesJugadorDisponibles
) {
    const contenedorAtaques = document.querySelector(".class-div-tarjetas-ataques");
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
            ataqueAleatorioEnemigo(ataquesEnemigoDisponibles);
            
            // Marcar el botón como seleccionado y deshabilitarlo
            boton.disabled = true;
            boton.style.backgroundColor = "#BB9CC0";
        });

        contenedorAtaques.appendChild(boton);
    });
}

function mostrarAtaquesEnemigo(
    contenedorAtaquesEnemigoDisponibles,
    ataquesEnemigoDisponibles
) {
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

// 📌 Exportar funciones para usarlas en otros archivos
export { seleccionarMascotaJugador, mostrarBotonesAtaque, seleccionarMascotaEnemigo };