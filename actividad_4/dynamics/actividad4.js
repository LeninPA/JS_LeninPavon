//Recepción de datos
var num = prompt("Ingrese un número");
if (num <= 1) {
  console.log("Ingrese un número mayor a uno")
}
else {
  var primos = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 53, 59, 67, 71, 73, 79, 83, 89, 97
  ];
  var divisores = [];
  for (valor of primos) {
    if (valor<=num) {
      let div = num%valor;
      if (div == 0) {
        divisores.push(valor);
      }
    }
    else {
      break;
    }
  }
  console.log(divisores);
}
