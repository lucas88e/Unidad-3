let puntJugador1 = 0;
let puntComputer = 0;

const botonJugada = document.querySelectorAll(".boton-jugada");
const resultado = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

botonJugada.forEach(botonJugada => {
    botonJugada.addEventListener("click",function(){
    obtenerResultado(this.dataset.jugada,jugadaComputer());
    mostrarResultado();
    }
    );
})

function jugadaComputer(){
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random()*3)];
}

function obtenerResultado(resultadoPlayer,resultadoComputer){

    if (resultadoPlayer === resultadoComputer){
        //empate
        resultado.textContent=resultadoPlayer+" empata contra "+resultadoComputer;
    }
    else if(
        (resultadoPlayer === "papel" && resultadoComputer==="piedra") ||
        (resultadoPlayer === "tijera" && resultadoComputer==="papel") ||
        (resultadoPlayer === "piedra" && resultadoComputer==="tijera")){
        //victoria
        puntJugador1++;
        resultado.textContent=resultadoPlayer+" GANA contra "+resultadoComputer;
        
    }else{
        //derrota
        puntComputer++;
        resultado.textContent=resultadoPlayer+" PIERDE contra "+resultadoComputer;
    } 

}

function mostrarResultado(){
    contadorUsuario.textContent="Tus puntos: "+puntJugador1;
    contadorOrdenador.textContent="Puntos de la máquina: " +puntComputer;
    
}

