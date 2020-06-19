<?php
/***********************************
 * Devuelve todas las coincidencias
 * de un producto que se les pasan
 * por_GET['name']
 ***********************************/
include('config.php');
function getProducts($name, $f1, $f2, $f3, $f4, $f5)
{
	$con = connect();
	$result = mysqli_query($con,"SELECT product.id, product.name, product.disponibilidad, tipo.name AS tipo FROM product JOIN tipo ON product.tipo=tipo.id WHERE UPPER(product.name) LIKE UPPER('%$name%') AND tipo.name IN ('$f1', '$f2', '$f3', '$f4', '$f5')");
	$response = [];
	while($row = mysqli_fetch_assoc($result))
	{
		array_push($response, $row);
	}

	return $response;
}

if (isset($_GET['name'])) {
	// getProducts($_GET['name'], $_GET['f1'], $_GET['f2'], $_GET['f3'], $_GET['f4'], $_GET['f5']);
	echo json_encode(getProducts($_GET['name'], $_GET['f1'], $_GET['f2'], $_GET['f3'], $_GET['f4'], $_GET['f5']));
}
else	
	echo json_encode(1);