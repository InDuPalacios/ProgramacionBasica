// 3️⃣ Función para seleccionar la mascota
function seleccionarMascotaJugador() {
    const seleccionada = mishimones.find(m => document.getElementById(m.nombre).checked);

    if (seleccionada) {
        let contenedorMascotaJugador = document.getElementById("mascota-jugador");
        contenedorMascotaJugador.innerHTML = `
            <img src="${seleccionada.foto}" alt="${seleccionada.nombre}" width="120px">
            <p>${seleccionada.nombre}</p>`;

        ataquesJugadorDisponibles = seleccionada.ataques;
        mostrarBotonesAtaque();

        document.getElementById("seleccionar-mascota").style.display = "none";
        document.getElementById("seleccionar-ataque").style.display = "flex";

        seleccionarMascotaEnemigo();
    } else {
        alert("No has seleccionado tu mascota");
    }
}

// 5️⃣ Función para seleccionar la mascota enemiga
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

// 📌 Exportamos las funciones para usarlas en otros archivos
export { seleccionarMascotaJugador, seleccionarMascotaEnemigo };