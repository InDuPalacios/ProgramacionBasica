// 📌 Definición de la clase Mishimon
class Mishimon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

// 📌 Creación de los Mishimones
let growmon = new Mishimon('Growmon', './assets/mishimon__growmon.webp', 5);
let firemon = new Mishimon('Firemon', './assets/mishimon_firemon.webp', 5);
let waltermon = new Mishimon('Waltermon', './assets/mishimon__waltermon.webp', 5);
let dewatermon = new Mishimon('Dewatermon', './assets/mishimon__dwather.webp', 5);
let defiremon = new Mishimon('Defiremon', './assets/mishimon_defire.webp', 5);
let dearthmon = new Mishimon('Dearthmon', './assets/mishimon_desheet.webp', 5);

// 📌 Asignación de ataques
const ataques = {
    agua: { nombre: '💧 Agua', id: 'boton-agua' },
    fuego: { nombre: '🔥 Fuego', id: 'boton-fuego' },
    tierra: { nombre: '🌱 Tierra', id: 'boton-tierra' }
};

dewatermon.ataques.push(
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' }
);

dearthmon.ataques.push(
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '💧 Agua', id: 'boton-agua' }
);

defiremon.ataques.push(
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' }
);

waltermon.ataques.push(
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' }
);

growmon.ataques.push(
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '💧 Agua', id: 'boton-agua' }
);

firemon.ataques.push(
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '🔥 Fuego', id: 'boton-fuego' },
    { nombre: '💧 Agua', id: 'boton-agua' },
    { nombre: '🌱 Tierra', id: 'boton-tierra' }
);

// 📌 Exportar variables para usarlas en otros archivos
export { Mishimon, growmon, firemon, waltermon, dewatermon, defiremon, dearthmon };
