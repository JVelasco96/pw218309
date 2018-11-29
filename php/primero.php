<?php

    $variable = 10;
    for($i = 0; $i < $variable; $i++){
?>        
        Hola PHP <br>
   
<?php
    }
?>

<?php
    
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $basedatos = "pw09";

    $conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
    $sql = "select ncontrol, nombre, apellido, edad from alumnos";
    $resultados = mysqli_query($conexion, $sql); 
    $arregloDatos = array();   
    if(mysqli_num_rows($resultados) > 0){
        while($resgistro = mysqli_fetch_array($resultados)){
            $arregloDatos[] = $resgistro;
        }
    }
    print($arregloDatos);//en pantalla
    // y si quiero JSON
    print json_encode($arregloDatos);
?>  