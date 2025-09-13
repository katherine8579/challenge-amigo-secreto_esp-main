// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos el array para almacenar los nombres
let amigos = [];

// esta funcion es para agregarle nombre a la array

function agregarAmigo () {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre); // Aqui se agrega el nombre al array
    mostrarLista();      // Actualizar la lista en pantalla
    input.value = "";   // Limpiar el campo
} 

// Función para mostrar la lista de amigos en el HTML
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpiar lista antes de agregar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement ("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
    alert("Agregar al menos un amigo antes de sortear.");
    return;
    }

 // Generar indice aleatorio 
 const indice = Math.floor(Math.random() * amigos.length);

 // Obtener y eliminar el nombre sorteado del array
 const amigoSecreto = amigos.splice(indice, 1)[0];

 //Mostrar resultado en el HTML
 const resultado = document.getElementById("resultado");
 resultado.innerHTML = `<li> 🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

 // Actualizar la lista de amigos para reflejar los que quedan
 mostrarLista();

}