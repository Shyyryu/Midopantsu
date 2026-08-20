window.onload = function() {
    localStorage.clear();
};

// = Panties = Panties = Panties = Panties = Panties = Panties = Panties = Panties = Panties = Panties = //
let bowRosaBlanco= {
    nombre : "white with a pink bow",
    archivo : "recursos/Pantsu/bowblanco.jpg",
    ancho : "",
    alto : ""
}

let bowRosaMorado= {
    nombre : "purple with a pink bow",
    archivo : "recursos/Pantsu/bowmorado.jpg",
    ancho : "",
    alto : ""
}

let blanco= {
    nombre : "white",
    archivo : "recursos/Pantsu/cblanco.jpg",
    ancho : "",
    alto : ""
}

let morado= {
    nombre : "purple",
    archivo : "recursos/Pantsu/cmorado.jpg",
    ancho : "",
    alto : ""
}

let negro= {
    nombre : "black",
    archivo : "recursos/Pantsu/cnegro.jpg",
    ancho : "",
    alto : ""
}

let hiloAzul= {
    nombre : "a blue micro bikini",
    archivo : "recursos/Pantsu/hazul.jpg",
    ancho : "",
    alto : ""
}

let hiloMorado= {
    nombre : "a purple micro bikini",
    archivo : "recursos/Pantsu/hmorado.jpg",
    ancho : "",
    alto : ""
}

let hiloNegro= {
    nombre : "a black micro bikini",
    archivo : "recursos/Pantsu/hnegro.jpg",
    ancho : "",
    alto : ""
}

let hiloRosa= {
    nombre : "a pink micro bikini",
    archivo : "recursos/Pantsu/hrosa.jpg",
    ancho : "",
    alto : ""
}

let lunaresMorados= {
    nombre : "white with purple polka dot",
    archivo : "recursos/Pantsu/lmorados.jpg",
    ancho : "",
    alto : ""
}

let lunaresRosas= {
    nombre : "white with pink polka dot",
    archivo : "recursos/Pantsu/lrosas.jpg",
    ancho : "",
    alto : ""
}

let rayasCelestes= {
    nombre : "white with light blue stripes",
    archivo : "recursos/Pantsu/rcelestes.jpg",
    ancho : "",
    alto : ""
}

let rayasMoradas= {
    nombre : "white with purple stripes",
    archivo : "recursos/Pantsu/rmoradas.jpg",
    ancho : "304px",
    alto : "171px"
}

let corazon= {
    nombre : "a heart-shaped micro bikini",
    archivo : "recursos/Pantsu/xcorazon.jpg",
    ancho : "",
    alto : ""
}

let huesos= {
    nombre : "white with bones print ",
    archivo : "recursos/Pantsu/xhuesitos.jpg",
    ancho : "",
    alto : ""
}

let mesugaki= {
    nombre : " ...a mesugaki?",
    archivo : "recursos/Pantsu/xmesugaki.jpg",
    ancho : "",
    alto : ""
}

let ruta21= {
    nombre : "white with a road sign print",
    archivo : "recursos/Pantsu/xruta21.jpg",
    ancho : "",
    alto : ""
}

let nadaPuesto= {
    nombre : "... o///o",
    archivo : "recursos/Pantsu/cunny.png",
    ancho : "",
    alto : ""
}
// = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = Random = //
const Elementos = [bowRosaBlanco, morado, hiloAzul, lunaresRosas, rayasCelestes, corazon, bowRosaMorado, blanco, hiloNegro, lunaresMorados, rayasMoradas, nadaPuesto, negro, hiloRosa, huesos, hiloMorado, mesugaki, ruta21]

const fechaLocal = new Date()
const fechaUTC = new Date(fechaLocal.getTime() + (fechaLocal.getTimezoneOffset() * 60000))
const hoy = fechaUTC.toISOString().substring(0, 10)

const fechaGuardada = localStorage.getItem('fechaDeHoy')
let Seleccion
// = Seleccion = Seleccion = Seleccion = Seleccion = Seleccion = Seleccion = Seleccion = Seleccion = Seleccion = Seleccion = Seleccion = Seleccion = //
    const mlsHoy = Date.parse(hoy)
    
    const fechaUnix = Math.floor(mlsHoy / 86400000)
    
    const indiceRandom = fechaUnix % Elementos.length
    Seleccion = Elementos[indiceRandom]
    
    localStorage.setItem('fechaDeHoy', hoy)
    localStorage.setItem('pantsuDiaria', JSON.stringify(Seleccion))
// = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = Escrito = //
document.getElementById("textoDiario").textContent = "Today Mido's pantsu is: " + Seleccion.nombre + "!"
document.getElementById("fotoDiaria").src = Seleccion.archivo

document.getElementById("fotoDiaria").style.width = Seleccion.ancho;
document.getElementById("fotoDiaria").style.height = Seleccion.alto;