console.log("Xochipilli");
/**Este programa es una representación lógica del juego torres de Hanoi.
 * Recibe los datos a través de prompts y guarda el progreso en cookies
 */
// Elimina las cookies
function terminarJuego(){
  document.cookie = `t1=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `t2=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `t3=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `tiempo=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
// Guarda el tiempo que se ha llevado desde el comienzo de la partida
function guardarTiempo(tiempo){
  document.cookie = "tiempo=" + tiempo;
}
// Si existe una cookie de tiempo, devuelve su valor, de otro modo devuelve 0
function leerTiempo(){
  let t = lectura_cookies("tiempo");
  if (t != false) {
    return t
  }
  else{
    return 0
  }
}
// Guarda la posición actual del tablero
function guardarJuego(tablero){
  let t1 = tablero[0].join();
  let t2 = tablero[1].join();
  let t3 = tablero[2].join();
  document.cookie = "t1=" + t1;
  document.cookie = "t2=" + t2;
  document.cookie = "t3=" + t3;
}
// Obtiene el tiempo actual
function crearTiempo() {
  let d = new Date();
  d.getTime();
  return d
}
// Revibe el nombre de una cookie y devuelve su valor
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
// Crea un nuevo juego de torres de Hanoi
function crearTorres(){
  // Busca valores anteriores del tablero
  let t1 = lectura_cookies("t1");
  let t2 = lectura_cookies("t2");
  let t3 = lectura_cookies("t3");
  // En caso de que no haya crea un nuevo tablero
  if (t1 === false || t2 === false || t3 === false){
    t1 = new String("1,2,3,4,5");
    t2 = new String("");
    t3 = new String("");
  }
  // Convierte las cadenas de texto a arreglo
  t1 = t1.split(",");
  t2 = t2.split(",");
  t3 = t3.split(",");
  
  let torres = new Array(t1, t2, t3);
  return torres;
}
/** Pide los números al usuario y valida hasta que los números ingresados generen
 * un movimiento inválido por tamaño de discos o un movimiento válido.
*/
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
        alert("La torre inicial seleccionada está vacía \nIngrese una torre válida")
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
      alert("La torre inicial y la torre final no pueden tener el mismo valor")
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
// Realiza el movimiento entre los arreglos
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
// Juego
setTimeout(function juego() {
  if(ganar == false){
    let fechaIni = crearTiempo();
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
    setTimeout(()=>{
      juego();
    }, 1000)
  }
  else{
    terminarJuego();
  }
}, 1000);