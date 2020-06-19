console.log("Xochipilli");

function terminarJuego(){
  document.cookie = `t1=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `t2=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `t3=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `tiempo=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};

function guardarTiempo(tiempo){
  document.cookie = "tiempo=" + tiempo;
}

function leerTiempo(){
  let t = lectura_cookies("tiempo");
  if (t != false) {
    return t
  }
  else{
    return 0
  }
}

function guardarJuego(tablero){
  let t1 = tablero[0].join();
  let t2 = tablero[1].join();
  let t3 = tablero[2].join();
  document.cookie = "t1=" + t1;
  document.cookie = "t2=" + t2;
  document.cookie = "t3=" + t3;
}

function crearTiempo() {
  let d = new Date();
  d.getTime();
  return d
}

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
function crearTorres(){
  let t1 = lectura_cookies("t1");
  let t2 = lectura_cookies("t2");
  let t3 = lectura_cookies("t3");
  
  if (t1 === false || t2 === false || t3 === false){
    t1 = new String("1,2");
    t2 = new String("");
    t3 = new String("3,4,5");
  }
  
  t1 = t1.split(",");
  t2 = t2.split(",");
  t3 = t3.split(",");
  
  let torres = new Array(t1, t2, t3);
  return torres;
}
function pideNums(torres){
  let tor_igual = true;
  do {
    let max = torres.length + 1;
    var a = -1;
    var b = -1;
    while (a < 1 || a > max){
      a = prompt("Ingresa la torre inicial");
      if (!(a >= 1 && a <= max))
      {
        alert("Ingrese un número de torre válido");
        a = -1;
      }
      else if ((torres[a - 1].length == 1 && torres[a - 1][0] == "")||torres[a - 1].length == 0){
        alert("La torre inicial seleccionada está vacía \n Ingrese una torre válida")
        a = -1;
      }
    }
    while (b < 1 || b > max) {
      b = prompt("Ingresa la torre final");
      if (!(b >= 1 && b <= max)) {
        alert("Ingrese un número de torre válido");
        b = -1;
      }
    }
    if(a == b){
      alert("La torre incial y la torre final no pueden tener el mismo valor")
    }
    else{
      tor_igual = false
    }
  } while (tor_igual);
  a--;
  b--;
  let pos = new Array(a, b);
  return pos
}
function moveDisco (torres, tInicio, tFinal){
  let disc = torres[tInicio].shift();
  torres[tFinal].forEach((element, index) => {
    if(element === ""){
      torres[tFinal].splice(index)
    }
  })
  if (torres[tFinal].length == 0 || torres[tFinal][0] > disc){
    torres[tFinal].unshift(disc);
  }
  else{
    torres[tInicio].unshift(disc);
    alert("Movimiento inválido")
  }
  return torres;
}
// let torresMod = false;
let ganar = false;
let torres = crearTorres();
console.log(leerTiempo())
let tiempoT = 0;
do{
  let fechaIni = crearTiempo();
  console.log(torres.join("/"))
  let pos = pideNums(torres);
  torres = moveDisco(torres, pos[0], pos[1]);
  console.log("Torre 1: " + torres[0]);
  console.log("Torre 2: " + torres[1]);
  console.log("Torre 3: " + torres[2]);
  let fechaFini =  crearTiempo();
  tiempoT += fechaFini - fechaIni;
  if(torres[1].length == 5 || torres[2].length == 5){
    tiempoT/= 1000;
    alert("Ganaste\n Tardaste " + tiempoT + " segundos")
    ganar = true;
  }
  guardarJuego(torres);
  guardarTiempo(tiempoT);
} while (ganar == false);
terminarJuego();
// //DOM
// let torrecita1 = document.createElement("div");
// let torrecita2 = document.createElement("div");
// let torrecita3 = document.createElement("div");

// let palito1 = document.createElement("div");
// let palito2 = document.createElement("div");
// let palito3 = document.createElement("div");

// let body = document.getElementsByTagName("body");

// // palito1.classList.add("palitos");
// // palito2.classList.add("palitos");
// // palito3.classList.add("palitos");

// let disco1 = document.createElement("div");
// let disco2 = document.createElement("div");
// let disco3 = document.createElement("div");
// let disco4 = document.createElement("div");
// let disco5 = document.createElement("div");

// torrecita1.classList.add("torre");
// disco1.classList.add("disco1");
// disco2.classList.add("disco2");
// disco3.classList.add("disco3");
// disco4.classList.add("disco4");
// disco5.classList.add("disco5");

// torrecita1.prepend(palito1, disco1, disco2, disco3, disco4)
// body[0].prepend(torrecita1, torrecita2, torrecita3);
// // body[0].prepend(torrecita2, torrecita3);