function mostrar()
{
  let precio = 15000;
  let destino;
  let estacion;
  let precioFinal;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
	  case "Invierno":
		  if (destino == "Bariloche") {
			  precioFinal = precio * 1.2;
		  }else if (destino == "Mar del plata") {
			  precioFinal = precio * 0.80;
		  }else {
			  precioFinal = precio * 0.90;
		  }
		  break;

	  case "Verano":
		  if (destino == "Bariloche") {
			  precioFinal = precio * 0.80;
		  }else if (destino == "Mar del plata") {
			  precioFinal = precio * 1.2;
		  }else {
			  precioFinal = precio * 1.1;
		  }
	  case "Otoño":
	  case "Primavera":
		  if (destino == "Cordoba") {
			  precioFinal = precio;
		  }else {
			  precioFinal = precio * 1.1;
		  }
		  break;

  }
        alert("El precio final es $ " + precioFinal);
}//FIN DE LA FUNCIÓN