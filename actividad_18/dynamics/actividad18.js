/**Este programa genera una gráfica a partir de un formulario */
let contador = 0;
// Se agregan nuevos valores
function agregar(){
  contador++;

  let table = $("#datos");

  let fila = $("<tr>");
  let ctitulo = $("<td>");
  let cvalor = $("<td>");
  let ccolor = $("<td>");

  let titulo = $("<input>");
  let valor = $("<input>");
  let color = $("<input>");

  // Tipos en input
  titulo.attr('type', 'text');
  valor.attr('type', 'number');
  color.attr('type', 'color');
  // Nombres
  titulo.attr('name', 'titulo');
  valor.attr('name', 'valor');
  color.attr('name', 'color');
  // id
  fila.attr('id', 'fila' + contador)
  titulo.attr('id', 'titulo' + contador);
  valor.attr('id', 'valor' + contador);
  color.attr('id', 'color' + contador);
  //Funciones

  ctitulo.append(titulo);
  cvalor.append(valor);
  ccolor.append(color);

  fila.prepend(ctitulo, cvalor, ccolor);
  table.append(fila)

}
// Se eliminan los valores
function elim(){
  if (contador > 0){
    let filaElim = $("#fila" + contador);
    filaElim.remove();
    contador--;
  }
}
// Se realiza la gráfica
function graficar(){
  // Se le asigan título
  let titulo = $("#titulo").val();
  if(titulo == ""){
    titulo = "Gráfica"
  }
  // Se crean los valores
  let titulos = new Array();
  let colores = new Array();
  let data = new Array();
  for (let i = 0; i <= contador; i++){
    titulos.push($("#titulo" + i).val());
    console.log(titulos)
  }
  for (let i = 0; i <= contador; i++) {
    colores.push($("#color" + i).val());
    console.log(colores)
  }
  for (let i = 0; i <= contador; i++) {
    data.push($("#valor" + i).val());
    console.log(data)
  }
  // Se dibuja la gráfica
  let ctx = $("#graf")[0].getContext('2d');
  let graf = new Chart(ctx, {
    type: $("#tipo").val(),
    data: {
      labels: titulos,
      datasets: [{
        backgroundColor: colores,
        data: data
      }],
      options: {
        title: {
          display: true,
          text: titulo
        }
      }
    }
  });
}