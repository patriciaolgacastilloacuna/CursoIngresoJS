function mostrar()
{
	let numero;
	let contadorPares = 0;

	numero = parseInt(prompt("ingrese un numero: "));

	for (let i= 1; i <= numero; i++)
	{
		if (i % 2 == 0)
		{
			contadorPares++;
			console.log(i);
		}
	}
	console.log("Pares encontrados " + contadorPares);



}//FIN DE LA FUNCIÓN