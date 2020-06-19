console.log("uwu");
//Creación de elementos
var bigContainer = document.createElement("div");
var header = document.createElement("h1");
var subHeader = document.createElement("h2");
var midHeader = document.createElement("h2");
var jelou = document.createElement("h3");
var smoll = document.createElement("h3");
//Creación de hiperenlaces
var enlace1 = document.createElement("a");
var enlace2 = document.createElement("a");
//Inserción de enlaces
header.appendChild(enlace1);
midHeader.appendChild(enlace2);
//Creación de clases
bigContainer.classList.add("grey");
jelou.classList.add("red");
enlace2.classList.add("italian");
//Texto
enlace1.innerText = "Soy el más grande..."
enlace2.innerText = "Mediano"
subHeader.innerText = "Curso Web 2020";
jelou.innerText = "Jelou";
smoll.innerText = "Estoy medio chiquito :(";
//Body
var body = document.getElementsByTagName("body");
bigContainer.prepend(header, subHeader, midHeader, jelou, smoll);
body[0].appendChild(bigContainer);
