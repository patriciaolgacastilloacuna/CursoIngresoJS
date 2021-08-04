function mostrar()
{

	let numero;

	for(;;)
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		if(numero == 9)
		{
			break;
		}

		alert("usted ingreso el numero " + numero);
	}


}//FIN DE LA FUNCIÓN