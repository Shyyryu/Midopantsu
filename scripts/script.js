// ================================================================================ //
let pantsuRosaKawai = {
    nombre : "pink with a cute bow", 
    archivo : "recursos/Pantsu/rosa-lazo.png",
    ancho : "256px",
    alto : "147px"
}

let pantsuAmarilla = {
    nombre : "yellow",
    archivo : "recursos/Pantsu/amarilla.png",
    ancho : "300px",
    alto : "196px"
}

let pantsuRosaPastel = {
    nombre : "pastel pink",
    archivo : "recursos/Pantsu/rosa-pastel.png",
    ancho : "296",
    alto : "185"
}

// ================================================================================ //
const Elementos = [pantsuRosaKawai, pantsuAmarilla, pantsuRosaPastel]

const fechaLocal = new Date()
const fechaUTC = new Date(fechaLocal.getTime() + (fechaLocal.getTimezoneOffset() * 60000))
const hoy = fechaUTC.toISOString().substring(0, 10)

const fechaGuardada = localStorage.getItem('fechaDeHoy')
let Seleccion
// ================================================================================ //
if(fechaGuardada == hoy){
    Seleccion = JSON.parse(localStorage.getItem('pantsuDiaria'))
} else {
    const mlsHoy = Date.parse(hoy)
    
    const fechaUnix = Math.floor(mlsHoy / 86400000)
    
    const indiceRandom = fechaUnix % Elementos.length
    Seleccion = Elementos[indiceRandom]
    
    localStorage.setItem('fechaDeHoy', hoy)
    localStorage.setItem('pantsuDiaria', JSON.stringify(Seleccion))
}
// ================================================================================ //
document.getElementById("textoDiario").textContent = "Today Mido's pantsu is: " + Seleccion.nombre + "!"
document.getElementById("fotoDiaria").src = Seleccion.archivo

document.getElementById("fotoDiaria").style.width = Seleccion.ancho;
document.getElementById("fotoDiaria").style.height = Seleccion.alto;