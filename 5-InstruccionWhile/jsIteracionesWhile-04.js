/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	while(!(numeroIngresado >= 0 && numeroIngresado <= 9 )) {
		numeroIngresado = parseInt(prompt("Numero ingresado incorrecto. Reingrese un mumero entre 0 al 9."));
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN