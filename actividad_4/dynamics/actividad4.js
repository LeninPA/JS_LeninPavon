/**
 * Este programa toma un número mayor entero a 1 y menor a 100 lo descompone en 
 * sus factores primos únicos. Es decir, que si se ingresan 6 o 12, se obtendrá 
 * el mismo resultado: 2 y 3.
 */
// Recepción de datos
var num = prompt("Ingrese un número");
// Verificación de datos
if (num <= 1) {
  console.log("Ingrese un número mayor a uno")
}
else {
  // Creación de primos
  var primos = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 53, 59, 67, 71, 73, 79, 83, 89, 97
  ];
  var divisores = [];
  for (valor of primos) {
    if (valor<=num) {
      // Verifica la divisibilidad
      let div = num%valor;
      if (div == 0) {
        divisores.push(valor);
      }
    }
    else {
      // Si un primo es mayor al número, se rompe el recorrido, porque ya no hay más primos
      break;
    }
  }
  // Imprime los resultados
  console.log(divisores);
}
