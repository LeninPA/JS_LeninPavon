/**Este programa genera de una figura escogida en un formulario.
 * Se selecciona un color de relleno y una de borde con la que se colorearán
 * las imágenes.
 */
console.log("Xochipilli");
// Obtención del canvas
let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")
// Funciones para dibujar
// Rectángulos
function hacerRect(context, color, border){
  context.clearRect(0, 0, 500, 500);
  context.beginPath();
  context.strokeStyle = border;
  context.rect(50, 100, 400, 300);
  context.fillStyle = color;
  context.fill();
  context.stroke();
}
// Círculos
function hacerCirc(context, color, border) {
  context.clearRect(0, 0, 500, 500);
  context.beginPath();
  context.strokeStyle = border;
  context.arc(250, 250, 200, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
  context.stroke();
}
// Mickey Mouse
function hacerMickey(context, color, border) {
  context.clearRect(0, 0, 500, 500);
  // Círculo grande
  context.beginPath();
  context.arc(250, 250, 150, 0, 2 * Math.PI);
  context.strokeStyle = border;
  context.fillStyle = color;
  context.fill();
  context.stroke();
  // Oreja 1
  context.beginPath();
  context.arc(110, 110, 75, 0, 2 * Math.PI);
  context.strokeStyle = border;
  context.fillStyle = color;
  context.fill();
  context.stroke();
  // Oreja 2
  context.beginPath();
  context.arc(390, 110, 75, 0, 2 * Math.PI);
  context.strokeStyle = border;
  context.fillStyle = color;
  context.fill();
  context.stroke();
}
// Creación del evento
document.addEventListener("submit", (event) => {
  event.preventDefault();
  // Obtención de valores
  let fig = document.getElementById("selectFig").value;
  let relleno = document.getElementById("relleno").value;
  let borde = document.getElementById("borde").value;
  // Creación de figuras
  if(fig == "circulo"){
    hacerCirc(context, relleno);
  }
  else if (fig == "rect"){
    hacerRect(context, relleno);
  }
  else if (fig == "mickey"){
    hacerMickey(context, relleno, borde);
  }
})