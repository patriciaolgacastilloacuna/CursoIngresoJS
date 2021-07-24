/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//declado las variables 
	let numero;
	let acumuladorNegativo = 1; //se pone uno para poder multiplicar si es que no se ingresa numeros negativos.
	let acumuladorPositivo = 0;
	let respuesta = "si";
	let contadorNegativo=0;
    
	//genero bucle do-while
	do{
		//pido un numero
		numero = parseInt(prompt("ingrese un numero :"));
		//valido que sea un numero
		while(isNaN(numero)){
			numero = parseInt(prompt("eso no es un numero. Por favor ingrese un numero:"));
		}
		//analizo el signo del numero
		if(numero >=0){
			acumuladorPositivo = acumuladorPositivo + numero;	
		}
	    else{	
			contadorNegativo = contadorNegativo + 1;
			acumuladorNegativo = acumuladorNegativo * numero;
		}

		respuesta = prompt("quiere ingresar otro numero? si o no");

	}while(respuesta == "si");

	if (contadorNegativo == 0) {
		acumuladorNegativo = 0;
	}
	document.getElementById("txtIdProducto").value = acumuladorNegativo;
	document.getElementById("txtIdSuma").value = acumuladorPositivo;




}//FIN DE LA FUNCIÓN