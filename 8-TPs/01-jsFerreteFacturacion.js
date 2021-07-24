/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = precioUno + precioDos + precioTres;

    alert ("el subtotal de sus productos es $" + resultado);


}
function Promedio () 

    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    promedio = (precioUno + precioDos + precioTres) / 3;
    alert("el promedio es" + promedio);






{
	
}
function PrecioFinal () 
{
	
    let precioUno;
    let precioDos;
    let precioTres;
    let subtotalPrecios;
    let resultado

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    subtotalPrcios = precioUno + precioDos + precioTres;
    resultado = subtotalPrecios + subtotalPrecios * 0.21;
    alert("el total de sus productos es $" + resultado);




}