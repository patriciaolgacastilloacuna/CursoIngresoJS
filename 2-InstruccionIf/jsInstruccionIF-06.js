function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad>=18){
		alert("es un adulto");
	}

    else{
	    if(edad<=12){
		alert("es niño");
	    }
	    else{
	    alert("es adolescente");
	}
}

}//FIN DE LA FUNCIÓN