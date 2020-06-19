console.log("Xochipilli")
const lado = 10;
function verifJuego(cuerpo){
  let arrayVerif = new Array();
  cuerpo.forEach((elem, index)=>{
    let empujar = true;
    arrayVerif.forEach((element)=>{
      if (elem.x == element.x && elem.y == element.y){
        empujar = false;
      }
    })
    if(empujar){
      arrayVerif.push(elem);
    }
  })
  if(arrayVerif.length != cuerpo.length){
    return false;
  }
  else{
    return true;
  }
}
function pacman(i, j){
  if(j < 0)
    j = lado -1;
  else if(i < 0)
    i = lado -1;
  else if(j > lado -1)
    j = 0;
  else if(i > lado -1)
    i = 0;
  let coordenadas = new Array(i, j);
  return coordenadas
}
function generaCord(cuerpo){
  let bool = false;
  do{
    var cord = new Array(0, 0);
    cord[0] = Math.round(Math.random()*9);
    cord[1] = Math.round(Math.random()*9);
    cuerpo.forEach((elem, index) => {
      if (elem.x == cord[0] && elem.y == cord[1]){
        bool = true;
      }
    })
  }while (bool)
  return cord
}
let body= document.getElementsByTagName("body")[0];
let controlador = document.getElementById("controlador")
//Controles
let der= document.createElement("button");
der.classList.add("controles");
der.innerText = "derecha";
let izq= document.createElement("button");
izq.classList.add("controles");
izq.innerText = "izquierda";
let arr= document.createElement("button");
arr.classList.add("controles");
arr.innerText = "arriba";
let aba= document.createElement("button");
aba.classList.add("controles");
aba.innerText = "abajo";
controlador.prepend(der, izq, arr, aba);
class celda{
  constructor(x, y, estado){
    this.x = x;
    this.y = y;
    this.estado = estado;
  }
}
class serpiente{
  constructor(x,y){
    this.x= x;
    this.y= y;
  }
} 
class cabeza extends serpiente{
  constructor(x,y,dir){
    super(x, y);
    this.dir = dir;
  }
} 
let aumentoX = 0;
let aumentoY = 0;
der.onclick = () => {
  aumentoX = 1;
  aumentoY = 0;
}
izq.onclick = () => {
  aumentoX = -1;
  aumentoY = 0;
}
arr.onclick = () => {
  aumentoX = 0;
  aumentoY = -1;
}
aba.onclick = () => {
  aumentoX = 0;
  aumentoY = 1;
}
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if(keyName == "ArrowUp" || keyName == "w"){
    aumentoX = 0;
    aumentoY = -1;
  }
  else if (keyName == "ArrowRight" || keyName == "d"){
    aumentoX = 1;
    aumentoY = 0;
  }
  else if (keyName == "ArrowDown" || keyName == "s"){
    aumentoX = 0;
    aumentoY = 1;
  }
  else if (keyName == "ArrowLeft" || keyName == "a") {
    aumentoX = -1;
    aumentoY = 0;
  }
});


let cuerpo = new Array ();
cuerpo[0] = new cabeza(5, 5, 0)
let frutaInTablero = false;
let ciclos = 0;
let duracion = 1000;
let tiempoFruta = 0; 
let fruta = new celda(-1, -1, 0);
let puntuacion = 0;
setTimeout(function juego() {
  if (!frutaInTablero && ((fruta.estado == 0 && tiempoFruta >= 30000) || (cuerpo.length == 1 && tiempoFruta >= 10000))){
    let nCoordenadas = generaCord(cuerpo);
    fruta.x = nCoordenadas[0];
    fruta.y = nCoordenadas[1];
    fruta.estado = 1;
    frutaInTablero = true;
    tiempoFruta = 0;
    puntuacion++;
  }
  let inFruta = false;
  let deslizar = new cabeza(0,0,0);
  //Coordenadas de cabeza
  deslizar.x = cuerpo[0].x + aumentoX;
  deslizar.y = cuerpo[0].y + aumentoY;
  let coordenadas = pacman(deslizar.x, deslizar.y);
  deslizar.x = coordenadas[0]
  deslizar.y = coordenadas[1]
  cuerpo.unshift(deslizar);
  if(frutaInTablero && cuerpo[0].x == fruta.x && cuerpo[0].y == fruta.y){
    inFruta = true;
    frutaInTablero = false;
    fruta.estado = 0;
    duracion*=.98;
  }
  if(!inFruta){
    cuerpo.pop();
  }
  //Creación de tablero
  let tablero = document.createElement("div");
  tablero.classList.add("tablero");
  let celdas = [];
  let c = 0;
  for(i = 0; i < lado; i++)
  {
    for(j = 0; j < lado; j++)
    {
      celdas[c] = new celda(j, i, 0);
      c++;
    }
  }
  let celda_tablero = [];
  for (indice in celdas)
  {
    celda_tablero[indice] = document.createElement("div");
    cuerpo.forEach((elem, index) => {
      if (elem.x == celdas[indice].x && elem.y == celdas[indice].y){
        celdas[indice].estado = 1;
      }
    })
    if (fruta.estado == 1 && celdas[indice].x == fruta.x && celdas[indice].y == fruta.y){
      celdas[indice].estado = 2;
    }
    //Agregado de clase en celda
    if(celdas[indice].estado == 0){
      celda_tablero[indice].classList.add("celda");
    }
    else if(celdas[indice].estado == 1){
      celda_tablero[indice].classList.add("serpiente");
    }
    else{
      celda_tablero[indice].classList.add("fruta")
    }
    tablero.appendChild(celda_tablero[indice]);
  }
  body.appendChild(tablero);
  tiempoFruta += duracion;
  setTimeout(() => {
    body.removeChild(tablero);
  }, duracion);
  if (verifJuego(cuerpo)){
    setTimeout(juego, duracion)
  }
  else{
    let score = document.createElement("h1");
    score.innerHTML = "Se ha terminado el juego<br> Tu puntuación es de " + puntuacion;
    body.prepend(score);
  }
}, duracion);

