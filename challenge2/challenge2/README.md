## Ejercicio: Agregar datos con un prompt y mostrarlos en una lista

**Descripción:**
Este ejercicio consiste en crear una página web donde los usuarios puedan agregar elementos a una lista utilizando un cuadro de diálogo `prompt`. Luego, los elementos ingresados se mostrarán en una lista en la página.

Al pulsar el botón 'agregar elemento' aparecerá el cuadro de dialogo (`prompt`) y ahí se introducirá el elemento que después aparecerá en la lista.

La estructura ya está creada en el HTML, así solo tendrás que trabajar con JavaScript.

**PISTA: Aquí hay unos métodos, eventos, propiedades que pueden ser útiles**

- `addEventListener`
- `getElementById`
- `createElement`
- `appendChild`

Si tienes otra solución que no lleve esos elementos, ¡adelante!

Puedes añadir CSS a tu gusto. Si es así, añade un documento CSS y a trabajar ;

 const enlace =document.createElement("a");
     const nuevoEnlace= document.createElement("li")
        enlace.href ="https://www.youtube.com/watch?v=MXConoQR67g&ab_channel=Camin"
     enlace.textContent="Ver video"
     nuevoEnlace.appendChild(enlace);
     lista.appendChild(nuevoEnlace)
     const texto =document.createElement("p")
     const nuevoTexto = document.createElement("li")
     texto.innerHTML = "lorem"
     nuevoTexto.appendChild(texto)
     nuevoTexto.appendChild(nuevoEnlace)