/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar(){	
	let banderaDelPrimero =1;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta = "si";
	
	do{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
      
	    while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Eso no es un numero. Por favor ingrese un numero"));
		} 
		if( banderaDelPrimero == 1){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		    banderaDelPrimero = 0;
		}
	
	     else if(numeroIngresado > numeroMaximo){
		numeroMaximo = numeroIngresado;
	}
	      else{if(numeroIngresado < numeroMinimo){
          numeroMinimo = numeroIngresado;
	      }
	      }
	
		respuesta = prompt("Desea seguir ingresando numeros? si/no");

		while(respuesta != "si" && respuesta != "no"){
			alert("Valor incorrecto. responda correctamente");
			respuesta = prompt("Desea seguir ingresando numeros? si/no");
		}

	}while(respuesta != "no");

document.getElementById("txtIdMaximo").value = numeroMaximo;
document.getElementById("txtIdMinimo").value = numeroMinimo;
}