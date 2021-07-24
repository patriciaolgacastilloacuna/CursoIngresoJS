/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let  respuesta;
	let numero;
	
	do{
		numero = parseInt(prompt("ingrese un numero: "));
		acumulador = acumulador + numero;
		contador++;
        respuesta = prompt("quiere ingresar otro numero? si o no");
	}while(respuesta == "si");
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


	
}//FIN DE LA FUNCIÓN