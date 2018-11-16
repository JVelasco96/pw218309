// cargar la aplicacion de electron
const app=require('electron').app;

//crear ventanas del sistema operativo.
const BrowserWindow = require('electron').BrowserWindow;

//Ruta del sistema de archicos del sistema operativo
const path = require('path');
const url = require('url');

//Constantes para imprimir PDF
const electron=require('electron');
//Sistemas de Archivos
const fs = require('fs');
//Sistema operativo
const os = require('os');
//Para aclarar una funcion remota
// IPC = llamada aprocedimiento interno
const ipc = electron.ipcMain;
//Acceso a la terminal o linea de comandos
const shell = electron.shell;

//Otra forma de declarar una constante

//Pantalla principal
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	//creamos pantalla vacia
	PantallaPrincipal = new BrowserWindow({width: 1024, height: 420});

	//Cargamos en la pantalla principal el contenido de nuestra pagina
	PantallaPrincipal.loadURL(
		url.format({
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file',
			slashes: 'true'
		})
	);

	//Mostramos la pantalla 
	PantallaPrincipal.show();
}

//Evento para PDF(declaracion).
ipc.on('print-to-pdf', function(event){
	const pdfPath = path.join(os.tmpdir(), 'print.pdf')
	const win  = BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({}, function(error, data){
		if(error) throw error
		fs.writeFile(pdfPath, data, function(error){
			if(error){
				throw error;
			}
			shell.openExternal('file://' + pdfPath)
		})
	})
})

app.on('ready', muestraPantallaPrincipal);
