
//Jugador 1 elige piedra papel o tijera:

function piedra() {
    let stone = "piedra";
    document.querySelectorAll("input")[0].value = stone
    return true
}

function papel() {
    let paper = "papel";
    document.querySelectorAll("input")[0].value = paper
    return true
}
function tijera() {
    let scissors = "tijeras"
    document.querySelectorAll("input")[0].value = scissors
    return true
}

// Jugador 2 elije uno al azar
function azarJugador2() {
    let array = ["piedra", "papel", "tijera"];
    let aleat = Math.round(Math.random()* (array.length -1));
    document.querySelectorAll("input")[1].value = `${array[aleat]}`
    return array[aleat]
}

function resultadoJuego() {
    let jugador1 = document.querySelectorAll("input")[0].value
    let jugador2 = document.querySelectorAll("input")[1].value

    if (jugador1 === jugador2){
        document.querySelectorAll("input")[2].value = "Empate"
    } else if (jugador1 === "piedra" && jugador2 === "papel"){
        document.querySelectorAll("input")[2].value = "Jugador 2 gana"
    } else if (jugador1 === "piedra" && jugador2 == "tijera"){
        document.querySelectorAll("input")[2].value = "Jugador 1 gana"
    } else if (jugador1 === "papel" && jugador2 === "piedra"){
        document.querySelectorAll("input")[2].value = "Jugador 1 gana"
    } else if (jugador1 === "papel" && jugador2 === "tijera"){
        document.querySelectorAll("input")[2].value = "Jugador 2 gana"
    } else if (jugador1 === "tijera" && jugador2 === "papel"){
        document.querySelectorAll("input")[2].value = "Jugador 1 gana"
    } else if (jugador1 === "tijera" && jugador2 === "piedra"){
        document.querySelectorAll("input")[2].value = "Jugador 2 gana"
    }
    return true
}



let botonPiedra = document.querySelectorAll("body > button")[0]
botonPiedra.addEventListener("click", piedra)

let botonPapel = document.querySelectorAll("body > button")[1]
botonPapel.addEventListener("click", papel)

let botonTijera = document.querySelectorAll("body > button")[2]
botonTijera.addEventListener("click", tijera)

let botonJugador2 = document.querySelectorAll("body > button")[3]
botonJugador2.addEventListener("click", azarJugador2)

let botonResultado = document.querySelectorAll("body > button")[4]
botonResultado.addEventListener("click", resultadoJuego)