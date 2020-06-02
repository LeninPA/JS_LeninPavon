//Recepción de datos
var gama = prompt("Ingresa el piso donde te encuentras");
var a = prompt("Ingresa el piso donde se encuentra el elevador A");
var b = prompt("Ingresa el piso donde se encuentra el elevador B");

if (gama==null||a==null||b==null) {
  console.log("Recargue la página e ingrese los tres valores")
}
else {
  var distanciaA = gama - a;
  var distanciaB = gama - b;

  if (distanciaA < 0) {
    distanciaA *= -1;
  }
  if (distanciaB < 0) {
    distanciaB *= -1;
  }

  console.log("Gama se encuentra en el piso " + gama);
  console.log("El elevador A se encuantra en el piso " + distanciaA);
  console.log("El elevador B se encuantra en el piso " + distanciaB);

  if (distanciaA<distanciaB) {
    console.log("A");
  }
  else if(distanciaA>distanciaB) {
    console.log("B");
  }
  else {
    console.log("Es indiferente");
  }
}
