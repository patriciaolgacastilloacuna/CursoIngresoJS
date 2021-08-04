/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numero;
	let contadorpositivo = 0;
	let contadornegativo = 0;
	let contadorcero = 0;
	let contadorpares = 0;
	let acumuladorpositivo = 0;
	let acumuladornegativos = 0;
	let promediopositivo = 0;
	let promedionegativo = 0;
	let diferencia;

	do 
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if(numero < 0)
		{
			acumuladornegativos = acumuladornegativos + numero;
			contadornegativo = contadornegativo + 1;
		}
		else
		{
			if(numero == 0)
			{
				contadorcero = contadorcero + 1;
			}
			else
			{
				acumuladorpositivo = acumuladorpositivo + numero;
				contadorpositivo = contadorpositivo + 1;
			}
		}

		if(numero % 2 == 0)
		{
			contadorpares = contadorpares + 1;
		}

		respuesta = prompt("¿Quiere ingresar otro numero? (si/no)");

	} while (respuesta == "si");

	if(contadorpositivo > 0)
	{
		promediopositivo = acumuladorpositivo / contadorpositivo;
	}
	if(contadornegativo > 0)
	{
		promedionegativo = acumuladornegativos / contadornegativo;
	}

	diferencia = contadorpositivo - contadornegativo;

	console.log("1-Suma de los negativos: " + acumuladornegativos);
	console.log("2-Suma de los positivos: " + acumuladorpositivo);
	console.log("3-Cantidad de positivos: " + contadorpositivo);
	console.log("4-Cantidad de negativos: " + contadornegativo);
	console.log("5-Cantidad de ceros: " + contadorcero);
	console.log("6-Cantidad de números pares: " + contadorpares);
	console.log("7-Promedio de positivos: " + promediopositivo);
	console.log("8-Promedios de negativos: " + promedionegativo);
	console.log("9-Diferencia: " + diferencia);

}//FIN DE LA FUNCIÓN