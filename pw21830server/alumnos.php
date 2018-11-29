<?php

    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $basedatos = "alumnos";
    $conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
    $consulta = "select ncontrol, nombre, apellido, edad from alumnositc";
    $resultado = mysqli_query($conexion,$consulta);
    $salida = array();
    if(mysqli_num_rows($resultado) > 0){
        while($registro = mysqli_fetch_array($resultado)){
            array_push($salida, $registro);
        }
    }

    //var_dump($salida);
    print json_encode($salida);
?>