// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//agregue la varible amigos para crear el ray
let amigos = [];

// esta funcion es para agregarle nombre a la array

function introducirAmigo () {
    const input = document.getElementById("input-nombre");
    const nombre = input. value. trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }

    amigos.push(nombre); // Aqui se agrega el nombre al array
    mostrarLista();
    input. value = "";
} 

