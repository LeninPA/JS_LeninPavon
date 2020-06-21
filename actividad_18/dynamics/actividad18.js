let contador = 1;
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
function elim(){
  if (contador > 0){
    let filaElim = $("#fila" + contador);
    filaElim.remove();
    contador--;
  }
}


function graficar(){
  let aux1 = contador;

  let titulo = $("#titulo").val();
  if(titulo == ""){
    titulo = "Gráfica"
  }
  let ctx = $("#graf")[0].getContext('2d');
  let graf = new Chart(ctx, {
    type: $("#tipo").val(),
    data: {
      labels: [
        'Uwu', 'Awa', 'Ewe'
      ],
      datasets: [{
        backgroundColor: ["#FFFFFF", "#FFF000", "#FFF000"],
        data: [69230, 62300, 35550]
      }],
      options: {
        title: {
          display: true,
          text: "'" + titulo + "'"
        }
      }
    }
  });
}