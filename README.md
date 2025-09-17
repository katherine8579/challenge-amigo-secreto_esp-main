# 🎁 Challenge: Amigo Secreto

Este proyecto forma parte del curso **Lógica de Programación - Alura Latam**. El objetivo es desarrollar una aplicación web que permita a los usuarios ingresar nombres en una lista y realizar un sorteo aleatorio para determinar quién será el "amigo secreto".

## 🧠 Objetivo del desafío

Aplicar conceptos fundamentales de programación como **funciones**, **listas (arrays)** y **bucles (loops)** para construir una solución modular, reutilizable y funcional. El enfoque está en la manipulación eficiente de datos y en el diseño de una interfaz clara para el usuario.

## ⚙️ Funcionalidades implementadas

- ✍️ **Agregar nombres**: El usuario escribe el nombre de un amigo en un campo de texto y lo agrega a una lista visible al hacer clic en el botón **"Adicionar"**.
- 🚫 **Validar entrada**: Si el campo está vacío, el programa muestra una alerta solicitando un nombre válido.
- 👀 **Visualizar la lista**: Los nombres ingresados se muestran dinámicamente en una lista debajo del campo de entrada.
- 🎲 **Sorteo aleatorio**: Al hacer clic en el botón **"Sortear Amigo"**, se selecciona aleatoriamente un nombre de la lista y se muestra en pantalla.

## 🛠️ Tecnologías utilizadas

- **HTML5**: estructura de la página
- **CSS3**: estilos visuales
- **JavaScript**: lógica del juego

## 🚀 Cómo ejecutar el proyecto  
1. Clona este repositorio en tu computadora:  
   ```bash
 (https://github.com/katherine8579/challenge-amigo-secreto_esp-main.git)
2. Abre el archivo index.html en tu navegador.

3. ¡Listo! Ya puedes empezar a agregar nombres y realizar el sorteo.

⚠️ Posibles problemas y soluciones

| Problema                             | Posible causa                                       | Solución                                                        |
| ------------------------------------ | --------------------------------------------------- | --------------------------------------------------------------- |
| El botón "Sortear Amigo" no funciona | No hay amigos en la lista                           | Asegúrate de agregar al menos un nombre antes de sortear        |
| Los nombres se repiten en el sorteo  | No se eliminan del arreglo después de ser sorteados | Implementar `splice()` o lógica para remover el nombre sorteado |
| No aparecen los nombres en la lista  | El DOM no se actualiza correctamente                | Revisa el uso de `document.getElementById()` y `innerHTML`      |
| La página no carga bien              | Se abrió un archivo diferente a `index.html`        | Abre directamente `index.html` en el navegador                  |


## 👩‍💻 Autora

**Katherine Abreu**  
Estudiante de Ingeniería en Ciberseguridad con formación en lógica de programación, desarrollo web y gestión de proyectos.  
Apasionada por el aprendizaje técnico, la organización académica y la mejora continua.  
Comprometida con el desarrollo de soluciones funcionales, claras y bien estructuradas.
