/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let aumento;
	let nuevoSueldo;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value );

	aumento = sueldo * 0.1;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);





	

}
