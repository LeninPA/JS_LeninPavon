console.log("Xochipilli")
let canvas = document.getElementById("canvas")

let context = canvas.getContext("2d")


function hacerRect(context, color){
  context.clearRect(0, 0, 500, 500);
  context.rect(50, 100, 400, 300);
  context.fillStyle = color;
  context.fill();
  context.stroke();
}
// context.arc(250, 250, 50, 0, 2 * Math.PI);
// hacerRect(context, "#CBE8B9");
function hacerCirc(context, color) {
  context.clearRect(0, 0, 500, 500);
  context.arc(250, 250, 200, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
  context.stroke();
}
// setTimeout(() => {
//   hacerRect(context, "#D5C1CD");
// }, 1000);
// hacerCirc(context, "#CBE8B9");
// setTimeout(() => {
//   hacerCirc(context, "#D5C1CD");
// }, 1000);
function hacerMickey(context, color) {
  context.clearRect(0, 0, 500, 500);
  context.beginPath();
  context.arc(250, 250, 150, 0, 2 * Math.PI);
  context.strokeStyle = color;
  context.fillStyle = color;
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(110, 110, 75, 0, 2 * Math.PI);
  context.strokeStyle = color;
  context.fillStyle = color;
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(390, 110, 75, 0, 2 * Math.PI);
  context.strokeStyle = color;
  context.fillStyle = color;
  context.fill();
  context.stroke();
}
hacerMickey(context, "#CBE8B9");
setTimeout(() => {
  hacerMickey(context, "#D5C1CD");
}, 1000);