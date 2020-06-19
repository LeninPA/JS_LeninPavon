<?php
  define("DBUSER","root");
  define("DBHOST","127.0.0.1");
  define("PASSWORD","root");
  function connect () {
    return mysqli_connect(DBHOST, DBUSER, PASSWORD);
  }
  function connectDB1 ($conexion, $base) {
    return mysqli_select_db($conexion, $base)
    or die("F. No pude entrar a la base");
  }
  function connectDB2 ($base) {
    echo $base;
    $con = mysqli_connect(DBHOST, DBUSER, PASSWORD, $base);
    echo mysqli_error($con);
    if (!$con)
    {
      echo "No se ha podido acceder a la base. <br>";
    }
    return $con;
  }
?>
