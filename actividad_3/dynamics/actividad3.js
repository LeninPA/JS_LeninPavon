/**
 * Este programa toma un arreglo de arreglos con elementos de la serie de 
 * fibonacci en espiral y regresa los elementos en orden. Debido a problemas
 * al momento de tratar las dimensiones de los arreglos, el inicio de la serie
 * (0, 1, 1, 2...) se redujo a tres términos (0, 1, 2...)
 */
//Recepción de datos
var fibonacci=[
  [ 0,  1,  1, 2],
  [34, 55, 89, 3],
  [21, 13,  8, 5]
];
var elementos=[];
//Variable de control de while
var verdad = true;
//Esquinas
var supIzq = 0;
var supDer = fibonacci[0].length - 1;
var infIzq = fibonacci.length - 1;
var esquinasJuntas = false
// Recorrido del arreglo
while (!esquinasJuntas) {
  /**Agrega los elementos al conjunto elementos si no se encuentran en él 
   * en la primera fila.
   */
  for (valor of fibonacci[supIzq]) {
    if (elementos.indexOf(valor) == -1) {
      elementos.push(valor);
    }
  }
  /**Agrega los elementos al conjunto elementos si no se encuentran en él
   * ni en la primera fila y están en la última columna
   */
  for (indice in fibonacci) {
    if (indice != supIzq && elementos.indexOf(fibonacci[indice][supDer]) == -1) {
      elementos.push(fibonacci[indice][supDer]);
    }
  }
  // Revierte los elementos en la última fila
  fibonacci[infIzq].reverse();
  for (indice in fibonacci[infIzq]) {
    // Devuelve los elementos que no están en la esquinaizquierda
    if(indice != supIzq && elementos.indexOf(fibonacci[infIzq][indice]) == -1)
    {
      elementos.push(fibonacci[infIzq][indice]);
    }
  }
  // Devuelve los elementos a su lugar
  fibonacci[infIzq].reverse();
  // Altera los índices
  fibonacci.reverse();
  // Devuelve los elementos en la primera columna que no se han impreso
  for (indice in fibonacci)
  {
    if (indice != supIzq && indice != infIzq && elementos.indexOf(fibonacci[indice][supIzq]) == -1) {
      elementos.push(fibonacci[indice][supIzq]);
    }
  }
  // Regresa el arreglo a su orden normal
  fibonacci.reverse();
  // Quita una capa de lados
  supIzq+=1;
  supDer-=1;
  infIzq-=1;
  // Verifica que queden lados
  if (supIzq > infIzq) {
    esquinasJuntas = true;
  }
}
// Imprime la serie en orden
console.log(elementos)
