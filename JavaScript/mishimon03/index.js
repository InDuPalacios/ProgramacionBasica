//index.js

// Métodos HTTP 
// GET = Para obtener datos del servidor (Ej: leer un usuario).
// POST = Para enviar datos al servidor (Ej: crear un usuario).
// PUT = Para actualizar datos en el servidor (Ej: actualizar un usuario).
// DELET = Para eliminar datos en el servidor (Ej: borrar un usuario).

const express = require("express")
const cors = require("cors")

const app = express()
let myInduPort = 8080

app.use(cors())   // Configuración por defecto que me ayuda con express
app.use(express.json())   // Permite recibir JSON en POST

const jugadores = []

class Jugador {
    constructor(id ){
        this.id = id
    }

    asignarMishimon(mishimon){
        this.mishimon = mishimon
    }

    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    }
}

class Mishimon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res)=>{
    const id = `${Math.random().toFixed(4)}`
    const jugador = new Jugador(id);
    jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})


app.post("/mishimon03/:jugadorId", (req, res) =>{
    const jugadorId = req.params.jugadorId || "" 
    const nombre = req.body.mishimon || "" 
    const mishimon = new Mishimon(nombre)
    
    const jugadorIndex = jugadores.findIndex(
        (jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMishimon(mishimon)
    }
    console.log(jugadores)
    console.log (jugadorId)
    res.end()
})
// :jugador es la manera de definir la variable y luego lo
// extraigo con req.params

app.post("/mishimon03/:jugador/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || "" 
    const x = req.body.x || 0 
    const y = req.body.y || 0

    console.log(`📡 Recibido en el servidor: Jugador ${jugadorId}, X=${x}, Y=${y}`); 

    const jugadorIndex = jugadores.findIndex(
        (jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actulizarPoscion(x, y)
    }

    res.end()
})


app.listen(myInduPort, () => {
    console.log(`Servidor funcionando en el puerto ${myInduPort}`);
});
