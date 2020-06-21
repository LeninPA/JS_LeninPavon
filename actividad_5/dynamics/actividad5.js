/**Este programa recibe una cadena de texto y busca 
 * detectar etiqueta de apertura y cierre de script y 5 'equisde'. En cuyo caso
 * imprime un aviso. También detecta si solo se cumplió una condición o si no
 * se cumplio ninguna.
 */
//Recepción de datos
let texto = prompt("Ingrese un texto en este sitio completamente indefenso que no es una trampa");
// Creación de regex
let numScript = texto.match(/<script>.*<\/script>/);
let numEquisde = texto.match(/equisde/g);
// Validación de regex sin coincidencias
if (numScript == null){
  numScript =  new Array();
}
if (numEquisde == null) {
  numEquisde = new Array();
}
// Casos
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
