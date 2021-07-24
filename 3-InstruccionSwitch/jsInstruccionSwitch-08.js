function mostrar()
{
	let destino;
destino = document.getElementById("txtIdDestino").value;

switch(destino){
	case "Bariloche":
	case "Ushuaia":
		alert("en este destino hace frio");
		break;
	case "Cataratas":
	case "Mar del plata":
        alert("en este destino hace calor");
		break;
}

}//FIN DE LA FUNCIÓN