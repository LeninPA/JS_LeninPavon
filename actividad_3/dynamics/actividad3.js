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

while (!esquinasJuntas) {
  for (valor of fibonacci[supIzq]) {
    if (elementos.indexOf(valor) == -1) {
      elementos.push(valor);
    }
  }
  for (indice in fibonacci) {
    if (indice != supIzq && elementos.indexOf(fibonacci[indice][supDer]) == -1) {
      elementos.push(fibonacci[indice][supDer]);
    }
  }
  fibonacci[infIzq].reverse();
  for (indice in fibonacci[infIzq]) {
    if(indice != supIzq && elementos.indexOf(fibonacci[infIzq][indice]) == -1)
    {
      elementos.push(fibonacci[infIzq][indice]);
    }
  }
  fibonacci[infIzq].reverse();
  fibonacci.reverse();
  for (indice in fibonacci)
  {
    if (indice != supIzq && indice != infIzq && elementos.indexOf(fibonacci[indice][supIzq]) == -1) {
      elementos.push(fibonacci[indice][supIzq]);
    }
  }
  fibonacci.reverse();
  supIzq+=1;
  supDer-=1;
  infIzq-=1;
  if (supIzq > infIzq) {
    esquinasJuntas = true;
  }
}

console.log(elementos)
