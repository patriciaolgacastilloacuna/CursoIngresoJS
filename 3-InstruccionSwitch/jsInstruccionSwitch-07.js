function mostrar()
{
let destino;
destino = document.getElementById("txtIdDestino").value;

switch(destino){
	case "Bariloche":
		alert("se encuentra en el oeste");
		break;
	case "Cataratas":
		alert("se encuentra en el norte");
		break;
	case "Mar del plata":
		alert("se encuentra en el este");
		break;
	case "Ushuaia":
		alert("se encuentra en el sur");
		break;
}
}//FIN DE LA FUNCIÓN