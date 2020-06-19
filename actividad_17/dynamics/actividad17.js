console.log("Xochipilli")
function crearHora(){
  return {
    hora: 0,
    minutos: 0,
    segundo: 0,
    ms: 0
  }
}
console.log(crearHora());
let canvas = getElementById('tempo');
let context = canvas.getContext()