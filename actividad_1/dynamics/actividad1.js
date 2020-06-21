/**Este programa toma 3 valores numéricos y regresa cual de los últimos
 * dos valores es el más cercano al primero
 */
//Recepción de datos
var gama = prompt("Ingresa el piso donde te encuentras");
var a = prompt("Ingresa el piso donde se encuentra el elevador A");
var b = prompt("Ingresa el piso donde se encuentra el elevador B");
// Validación primitiva de los datos
if (gama==null||a==null||b==null) {
  console.log("Recargue la página e ingrese los tres valores")
}
else {
  // Generación de distancias
  var distanciaA = gama - a;
  var distanciaB = gama - b;
  // Obteniendo el valor absoluto de las distancias
  if (distanciaA < 0) {
    distanciaA *= -1;
  }
  if (distanciaB < 0) {
    distanciaB *= -1;
  }
  // Regresa los valores ingresados
  console.log("Gama se encuentra en el piso " + gama);
  console.log("El elevador A se encuentra en el piso " + distanciaA);
  console.log("El elevador B se encuentra en el piso " + distanciaB);
  // Imprime cual de los pisos es el más cercano a gama
  console.log("El elevador más cercano a Gama es:")
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
