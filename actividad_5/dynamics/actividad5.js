//Recepción de datos
let texto = prompt("Ingrese un texto en este sitio completamente indefenso que no es una trampa");

let numScript = texto.match(/<script>.*<\/script>/);
let numEquisde = texto.match(/equisde/g);

if (numScript == null){
  numScript =  new Array();
}
if (numEquisde == null) {
  numEquisde = new Array();
}

if (numScript.length == 1 && numEquisde.length == 5){
  alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso.");
}
else if (numScript.length == 1 || numEquisde.length == 5){
  alert("¿Bob?\n ¿Wade?")
}
else{
  alert("¿Cómo encontraste este sitio?\nSal de aquí")
}
console.log(numScript.length);
console.log(numEquisde.length);
