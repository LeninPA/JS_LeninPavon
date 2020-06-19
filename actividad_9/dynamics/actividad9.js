console.log("Xochipilli");
//Creación de elementos
function num() {
  return Math.round(Math.random() * 99) + 1;
}
function terminarJuego() {
  document.cookie = `intento=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `victoria=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
function lectura_cookies(cookie) {
  let c = document.cookie
  let cookies = c.split(";");
  let regex = new RegExp(cookie, "i");
  for (indice in cookies) {
    let coincidencia = cookies[indice].search(regex);
    if (coincidencia > -1) {
      var posCookie = indice;
      break;
    }
    else {
      var posCookie = -1;
    }
  }
  if (posCookie != -1) {
    let valor_cookie = cookies[posCookie].split("=")[1];
    return valor_cookie
  }
  else {
    return false
  }
}

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

let vVictoria = lectura_cookies("victoria");
if(vVictoria === false || vVictoria == 1){
  let posCookie = lectura_cookies("intento");
  if (posCookie === false) {
    document.cookie = "intento=1";
    var valor_cookie = 1;
  }
  else{
    var valor_cookie = posCookie;
  }
  var nums_a_pedir = simon(valor_cookie, () => {
    let numero = num();
    console.log(numero);
    return numero;
  })
  setTimeout(() => {
    let c_nums_a_pedir = nums_a_pedir.toString();
    document.cookie = `nums_simon=${c_nums_a_pedir}`;
    setTimeout(() => {
      window.location = "./actividad9_1.html";
    }, 1000);
  }, valor_cookie * 1550);
  valor_cookie++;
  document.cookie = "intento=" + valor_cookie;
}else if(vVictoria == 0){
  console.log("Simón está triste, te has equivocado :c");
  terminarJuego();
}else{
  console.log("Ganaste uwu");
  terminarJuego();
}
