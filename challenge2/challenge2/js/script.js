 // Aquí tu código
const pulse = document.getElementById("agregar")
const lista= document.getElementById("lista")

function pulsarBoton(){
    const nombre = prompt("Introduce aqqui el nombre que quiere añadir a la lista");
    if(nombre){
    const nuevaLista = document.createElement("li");
     nuevaLista.innerHTML= nombre;
     lista.appendChild(nuevaLista);
    
    }else{
        alert("Error ")
    }
}

pulse.addEventListener("click",pulsarBoton)
