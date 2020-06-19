console.log("Xochipilli");
function terminarJuego() {
  document.cookie = `intento=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
function lectura_cookies (cookie) {
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
  else{
    return false
  }
}
let intento = lectura_cookies("intento");
let nums_simon = new String(lectura_cookies("nums_simon"));
let valores = nums_simon.split(",");
let termino = 1;
for (valor of valores) {
  var romper = false;
  let num_usr = prompt("Ingrese el término " + termino);
  console.log(num_usr)
  if(num_usr != valor){
    romper = true;
  }
  termino++;
}
if (romper === true) {
  document.cookie = "victoria=0";
}
if (intento < 6 && !romper) {
  document.cookie = "victoria=1";
}
else if (!romper)
{
  document.cookie = "victoria=2";
}
window.location = "./actividad9.html"