// 📌 Definición de la clase Mishimon
class Mishimon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

// 📌 Definición de ataques
const ataques = {
    agua: { nombre: '💧 Agua', id: 'boton-agua' },
    fuego: { nombre: '🔥 Fuego', id: 'boton-fuego' },
    tierra: { nombre: '🌱 Tierra', id: 'boton-tierra' }
};

// 📌 Asignación de ataques
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

// 📌 Exportar variables para usarlas en otros archivos
export { Mishimon, asignarAtaques };
