console.log("uwu");
//Creación de elementos
function num() {
  return Math.round(Math.random() * 99) + 1;
}
console.log(document.cookie);
function simon(num, callback){
  console.log("Listo?");
  let a = 0;
  let numeros_simon = new Array();
  setTimeout(() => {
    numeros_simon[a] = callback();
    a++;
    if (a < num) {
      setTimeout(() => {
        numeros_simon[a] = callback();
        a++;
        if (a < num) {
          setTimeout(() => {
            numeros_simon[a] = callback();
            a++;
            if (a < num) {
              setTimeout(() => {
                numeros_simon[a] = callback();
                a++;
                if (a < num) {
                  setTimeout(() => {
                    numeros_simon[a] = callback();
                  }, 1500);
                }
              }, 1500);
            }
          }, 1500);
        }
      }, 1500);
    }
  }, 1500);
  return numeros_simon
}
let c = document.cookie
let cookies = c.split(";");
let regex = /intento=/i
for (val of cookies) {
  let coincidencia = val.search(regex)
  if (coincidencia > -1) {
    var posCookie = coincidencia;
    break;
  }
  else{
    var posCookie = -1;
  }
}
console.log(posCookie);
if (posCookie == -1) {
  document.cookie = "intento=1";
  var valor_cookie = 1;
}
else{
  var valor_cookie = cookies[posCookie].split("=")[1];
}
var nums_a_pedir = simon(valor_cookie, () => {
  let numero = num();
  console.log(numero);
  return numero;
})
setTimeout(() => {
  console.log(nums_a_pedir);
  let c_nums_a_pedir = nums_a_pedir.toString();
  document.cookie = `nums_simon=${c_nums_a_pedir}`;
  setTimeout(() => {
    window.location = "./actividad9_1.html";
  }, 1000);
}, valor_cookie * 1550);
valor_cookie++;
document.cookie = "intento=" + valor_cookie;