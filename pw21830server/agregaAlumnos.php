<?PHP
header("Acces-Control-Allow-Origin: *");
$ncontrol = $_GET["ncontrol"];
$nombre = $_GET["nombre"];
$apellido = $_GET["apellido"];
$edad = $_GET["edad"];

$servidor = "localhost";
$usuario = "root";
$password = "";
$basedatos = "alumnos";
$conexion = mysqli_connect($servidor,$usuario,$password,$basedatos);
$consulta = "insert into alumnositc values('$ncontrol', '$nombre', '$apellido', $edad)";
$respuesta = false;
mysqli_query($conexion, $consulta);
if(mysqli_affected_rows($conexion) > 0){
    $respuesta = true;
}
$salida = array('respuesta' => $respuesta);
print json_encode($salida);
?>