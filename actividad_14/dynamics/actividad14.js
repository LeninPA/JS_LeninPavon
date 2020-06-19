console.log("Xochipilli")
//Creación de objetos
class Tarjeta{
  constructor(number, estado) {
    this.number = number;
    this.estado = estado;
  }
}
class Juego{
  constructor(){
    this.tarjetas = new Array();
    this.restantes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29);
    this.encontrados = new Array();
    this.pEncontrados = this.encontrados.length;
    this.pRestantes = this.restantes.length;
    this.vidas = 10;
  }
  crearTablero (){
    let tablero = lectura_cookies("memorama");
    tablero = false;
    if (tablero == false){
      var tarjetas = new Array();
      for (let i = 0; i < 30; i++) {
        tarjetas.push(i);
        tarjetas.push(i);
      }
      var nTablero = new Array();
      for (let i = 0; i < 60; i++) {
        let bool;
        let num;
        do{
          bool = false;
          num = Math.round(Math.random()*59);
          nTablero.forEach((elem) => {
            if(num == elem){
              bool = true;
            }
          })
        }while (bool)
        nTablero.push(num)
      }
      nTablero.forEach((elem, index) =>{
        nTablero[index] = tarjetas[elem]
      })
      tablero = nTablero
    }
    console.log(tablero);
    return tablero;
  }
  guardarJuego(){
    let aux1 = "";
    this.tarjetas.forEach((elem, index) => {
      aux1 += index + ",";
      aux1 += elem.number + ",";
      aux1 += elem.estado + "/"
    })
    console.log(aux1);
  }
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
let jMemorama = new Juego();
let tablero = jMemorama.crearTablero();
let memorama = new Array();
tablero.forEach((elem, index) => {
  let nTarjeta = new Tarjeta(elem, 0)
  memorama.push(nTarjeta);
})
jMemorama.tarjetas = memorama;
console.log(memorama)
console.log($("#tablero"))
let tarjetas = new Array();
let t = 0;
let restantes = $("#restantes");
restantes.text("Pares restantes: " + jMemorama.pRestantes);
let vidas = $("#vidas");
vidas.text("Vidas: " + jMemorama.vidas);
let encontrados = $("#encontrados");
encontrados.text("Pares encontrados: " + jMemorama.pEncontrados);


memorama.forEach((elem, index) => {
  tarjetas[index] = $("<div>");
  tarjetas[index].addClass("tarjeta");
  // tarjetas[index].innerText("uwu");
  tarjetas[index].click((event)=>{
    let contadorEstados = 0;
    let tarjetaVolteada;
    memorama.forEach((elemento, indice)=>{
      if (elemento.estado == 1){
        contadorEstados++;
        tarjetaVolteada = indice;
      }
    })
    if (contadorEstados < 1 && t < 2 && elem.estado != 3){
      elem.estado = 1;
      tarjetas[index].addClass("t" + elem.number);
      console.log(elem)
      t++;
      console.log(t)
      jMemorama.guardarJuego();
    }
    else if (contadorEstados == 1 && t < 2 && elem.estado != 3){
      tarjetas[index].addClass("t" + elem.number);
      console.log(tarjetas[index]);
      t++;
      console.log(t);
      setTimeout(() => {
        tarjetas[tarjetaVolteada].removeClass("t" + memorama[tarjetaVolteada].number);
        tarjetas[index].removeClass("t" + elem.number);
        if (memorama[tarjetaVolteada].number == elem.number && index != tarjetaVolteada){
          memorama[tarjetaVolteada].estado = 3;
          console.log(memorama);
          elem.estado = 3;
          jMemorama.tarjetas = memorama;
          tarjetas[tarjetaVolteada].addClass("volteada");
          tarjetas[index].addClass("volteada");
          let pos = jMemorama.restantes.indexOf(elem.number);
          let tarjetaEncontrada = jMemorama.restantes.splice(pos, 1);
          jMemorama.encontrados.push(tarjetaEncontrada[0]);
          restantes.text("Pares restantes: " + jMemorama.pRestantes);
          encontrados.text("Pares encontrados: " + jMemorama.pEncontrados);
          console.log(jMemorama.encontrados);
          console.log(jMemorama.restantes);
        }
        else{
          memorama[tarjetaVolteada].estado = 0;
          jMemorama.vidas--;
          vidas.text("Vidas: " + jMemorama.vidas);
          console.log(memorama[tarjetaVolteada])
        }
        t = 0;
        console.log(t);
        jMemorama.guardarJuego();
      }, 1500);
    }
    console.log("uwu");
  })
  $("#tablero").append(tarjetas[index])
})