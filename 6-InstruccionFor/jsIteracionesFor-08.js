function mostrar()
{
	let numero;
	let contador = 0;

	numero = parseInt(prompt("ingrese un numero: "));
	while (isNaN(numero)) {
		numero = parseInt(prompt("debe ingresar un numero"));
	}
	contador = 0;
	for (let i= 1; i <= numero; i++)
	{
		if (!(numero % i))
		{
			contador++;

		}
	}
	if(contador == 2){
		alert(numero + " es primo");
	}else{
		alert(numero + " no es primo");
	}





}//FIN DE LA FUNCIÓN