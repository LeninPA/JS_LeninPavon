console.log("Xochipilli");
/**Este programa recibe un número entero y genera un tablero de ajedrez
 */
let bool = false;
var num = prompt("Ingresa la longitud de los lados");
// Creación de elementos
var tabla = document.createElement("table");
var filas = new Array();
var celdas = new Array();
for (let i = 0; i < num; i++) {
  filas[i] = document.createElement("tr");
  celdas[i] = new Array();
}
for(indice in filas){
  for (let i = 0; i < num; i++) {
    celdas[indice][i] = document.createElement("td");
    // Asigna los colores
    if ((i%2==0&&indice%2==0)||(i%2!=0&&indice%2!=0)) 
      celdas[indice][i].classList.add("par");
    else
      celdas[indice][i].classList.add("impar");
    filas[indice].appendChild(celdas[indice][i]);
  }
  tabla.appendChild(filas[indice]);
}
// Imprime la tabla
var body = document.getElementsByTagName("body");
body[0].appendChild(tabla);
