function getName() {
  let check1 = document.getElementById("f1").checked;
  if (check1){
    check1 = document.getElementById("f1").value;
  }
  else{
    check1 = "";
  }
  let check2 = document.getElementById("f2").checked;
  if (check2){
    check2 = document.getElementById("f2").value;
  }
  else{
    check2 = "";
  }
  let check3 = document.getElementById("f3").checked;
  if (check3){
    check3 = document.getElementById("f3").value;
  }
  else{
    check3 = "";
  }
  let check4 = document.getElementById("f4").checked;
  if (check4){
    check4 = document.getElementById("f4").value;
  }
  else{
    check4 = "";
  }
  let check5 = document.getElementById("f5").checked;
  if (check5){
    check5 = document.getElementById("f5").value;
  }
  else{
    check5 = "";
  }
  if (!check1 && !check2 && !check3 && !check4 && !check5) {
    alert("No ha seleccionado ninguna categoría\n Se mostrará vacío")
  }
  console.log("name=" + document.getElementById("clave").value + "&f1=" + check1 + "&f2=" + check2 + "&f3=" + check3 + "&f4=" + check4 + "&f5=" + check5);
  return "name=" + document.getElementById("clave").value + "&f1=" + check1 + "&f2=" + check2 + "&f3=" + check3 + "&f4=" + check4 + "&f5=" + check5;
}
console.log(getName())
function getProducts() {
  fetch(`dynamics/getProducts.php?${getName()}`, {
    method: 'GET'
  }).then((response) => {
    return response.json();
  }).then((data) => {
    let table = document.getElementById('table-content');
    table.innerHTML = "";

    data.forEach(element => {
      let new_td = document.createElement("tr");
      new_td.innerHTML = `<td>${element.id}</td><td>${element.name}</td><td>${element.disponibilidad}</td><td>${element.tipo}</td>`;
      table.appendChild(new_td);
    });
  })
}

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  getProducts();
})