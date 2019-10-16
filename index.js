
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
    let scissors = "tijera"
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
    let contadorVictorias = 0;
    let contadorDerrotas = 0;
    let jugador1 = document.querySelectorAll("input")[0].value
    let jugador2 = document.querySelectorAll("input")[1].value
    if (jugador1 === jugador2){
        document.querySelectorAll("input")[2].value = "Empate"
    } else if (jugador1 === "piedra" && jugador2 === "papel"){
        document.querySelectorAll("input")[2].value = "Jugador 2 gana"
        contadorDerrotas = contadorDerrotas + 1
        document.querySelectorAll("input")[4].value = contadorDerrotas
    } else if (jugador1 === "piedra" && jugador2 == "tijera"){
        document.querySelectorAll("input")[2].value = "Jugador 1 gana"
        contadorVictorias = contadorVictorias + 1
        document.querySelectorAll("input")[3].value = contadorVictorias
    } else if (jugador1 === "papel" && jugador2 === "piedra"){
        document.querySelectorAll("input")[2].value = "Jugador 1 gana"
        contadorVictorias = contadorVictorias + 1
        document.querySelectorAll("input")[3].value = contadorVictorias
    } else if (jugador1 === "papel" && jugador2 === "tijera"){
        document.querySelectorAll("input")[2].value = "Jugador 2 gana"
        contadorDerrotas = contadorDerrotas + 1
        document.querySelectorAll("input")[4].value = contadorDerrotas
    } else if (jugador1 === "tijera" && jugador2 === "papel"){
        document.querySelectorAll("input")[2].value = "Jugador 1 gana"
        contadorVictorias = contadorVictorias + 1
        document.querySelectorAll("input")[3].value = contadorVictorias
    } else if (jugador1 === "tijera" && jugador2 === "piedra"){
        document.querySelectorAll("input")[2].value = "Jugador 2 gana"
        contadorDerrotas = contadorDerrotas + 1
        document.querySelectorAll("input")[4].value = contadorDerrotas
    }
    return true
}


let botonPiedra = document.querySelectorAll("button")[0]
botonPiedra.addEventListener("click", piedra)



let botonPapel = document.querySelectorAll("button")[1]
botonPapel.addEventListener("click", papel)


let botonTijera = document.querySelectorAll("button")[2]
botonTijera.addEventListener("click", tijera)



let botonJugador2 = document.querySelectorAll("button")[3]
botonJugador2.addEventListener("click", azarJugador2)

let botonResultado = document.querySelectorAll("button")[4]
botonResultado.addEventListener("click", resultadoJuego)
botonResultado.addEventListener("mouseover", cambioColor)
botonResultado.addEventListener("mouseout", quitarColor)



function cambioColor() {
    document.querySelectorAll("button")[4].style.color = "red";
}

function quitarColor() {
    document.querySelectorAll("button")[4].style.color = "black";

}