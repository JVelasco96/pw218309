window.onload = function(){

	var colorAmarillo = function(){
		this.style.background = "yellow";
	}
	var colorBlanco = function(){
		this.style.background = "white";
	}

	var operando1 = document.getElementById("operando1");
	operando1.addEventListener("focus", colorAmarillo);
	operando1.addEventListener("focusout", colorBlanco);

	var operador = "";
	var numeros = function(){
	var valor = this.value;

		if(operador == ""){ // Operando 1
			var valorInput = document.getElement("operando1").value;
			if(valorInput == "0"){
				document.getElementById("operando1").value = "";
			
		}
		document.getElementById("operando1").value += valor;
		}else{//Operando 2
			document.getElementById("operando2").value = "";
			document.getElementById("operando2").value += valor;
		}

	}

	var uno = document.getElementById("uno")
	uno.addEventListener("click", numeros);


	
}




