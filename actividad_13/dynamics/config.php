<?php
/******************************************
 * Se debe cambiar este archivo para poder
 * acceder a la base de datos
 *****************************************/
define('servername', '127.0.0.1');
define('username', 'root');
define('password', 'root');
define('database', 'productos');

function connect()
{
	$conn = mysqli_connect(servername, username, password, database);

	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	return $conn;
}
