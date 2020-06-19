//Recepción de datos
// var num = prompt("Ingrese un número");
let texto= new String("<script>equisdeequisdeequisdeequisdeequisde</script>");

let numScript = texto.match(/<script>.*<\/script>/);
let numEquisde = texto.match(/equisde/g);

console.log(numScript.length);
console.log(numEquisde.length);
