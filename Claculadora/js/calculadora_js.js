window.onload=function(){
		var operador=""
		var coloramarillo = function() {
			this.style.background = "Yellow";
		}
		var colorblanco = function() {
			this.style.background = "white";
		}

		var numeros = function () {
			var op1= document.getElementById('operando1').value;
			var op2= document.getElementById('operando2').value;
			if (operador == "") {
				if (op1 == "0"){
				document.getElementById("operando1").value="";
			}
			document.getElementById("operando1").value+=this.value;
		}
		else {
			if (op2== "0") {
				document.getElementById("operando2").value="";
			}
			document.getElementById("operando2").value+=this.value;
		}
		}
		var operadores =function () {
			operador =this.value
		}

		var resultadoigual = function () {
			oper1=document.getElementById ('operando1').value
			oper2=document.getElementById ('operando2').value
			document.getElementById ('resultado').value=eval(oper1+operador+oper2)

		}
		var reinicio =function () {
			document.getElementById('operando1').value="0"
			document.getElementById('operando2').value="0"
			document.getElementById('resultado').value="0"
			operador=""
		}
 
 		var operando1 = document.getElementById("operando1")
		var operando2 = document.getElementById("operando2")
		var resultado = document.getElementById("resultado")
		var cero = document.getElementById("cero")
		var uno= document.getElementById("uno")
		var dos= document.getElementById("dos")
		var tres= document.getElementById("tres")
		var cuatro= document.getElementById("cuatro")
		var cinco= document.getElementById("cinco")
		var seis= document.getElementById("seis")
		var siete= document.getElementById("siete")
		var ocho= document.getElementById("ocho")
		var nueve= document.getElementById("nueve")
		var suma= document.getElementById("suma")
		var resta= document.getElementById("resta")
		var multiplicacion= document.getElementById("multiplicacion")
		var division= document.getElementById("division")
		var igual= document.getElementById("igual")
		var reiniciar = document.getElementById("reiniciar")

		operando1.addEventListener('focus',coloramarillo)
		operando1.addEventListener('focusout',colorblanco)
		operando2.addEventListener('focus',coloramarillo)
		operando2.addEventListener('focusout',colorblanco)
		resultado.addEventListener('focus',coloramarillo)
		resultado.addEventListener('focusout',colorblanco)
		reiniciar.addEventListener('click',reinicio)

		cero.addEventListener('click',numeros)
		uno.addEventListener('click',numeros)
		dos.addEventListener('click',numeros)
		tres.addEventListener('click',numeros)
		cuatro.addEventListener('click',numeros)
		cinco.addEventListener('click',numeros)
		seis.addEventListener('click',numeros)
		siete.addEventListener('click',numeros)
		ocho.addEventListener('click',numeros)
		nueve.addEventListener('click',numeros)
		
		suma.addEventListener('click',operadores)
		resta.addEventListener('click',operadores)
		multiplicacion.addEventListener('click',operadores)
		division.addEventListener('click',operadores)

		igual.addEventListener('click',resultadoigual)





}




