

var muestraAlumnos = function(){
    fetch('http://localhost/pw21830server/alumnos.php')
    .then(datos=> datos.json())
    .then(datos=>{
        var resultado = '';
        for (let i = 0; i < datos.length; i++) {
            resultado+=`
                <li>${datos[i].ncontrol} ${datos[i].nombre} ${datos[i].apellidos} ${datos[i].edad}</li>            
            `            
        }
        document.getElementById('ulAlumnos').innerHTML = resultado;
    })
}

muestraAlumnos();