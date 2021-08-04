function mostrar()
{
	 let nombre;
	 let edad; 
	 let genero;
	 let vacuna;
	 let temperaturaCorporal = 0;
	 let vacunaMasAplicada;
	 let nbAstraZenecaOtra = 0;
	 let edadMMenor37 = 0;

	 let mayorTemperatura = 0;
	 let nombreMayorTemperatura;
	 let vacunaMayorTemperatura;
	 let banderaTemperatura = 1;
	 let respuesta = "si";

	 let acumuladorSputnikV = 0; 
	 let acumuladorAstraZeneca = 0;
	 let acumuladorOtra = 0;
	 let acumuladorTemperatura = 0;
	 let acumuladorEdad = 0;
	 let acumuladorF = 0;
	 let acumuladorM = 0;
	 let acumuladorNb = 0;
	 let acumuladorFSputnikV = 0;
	 let acumuladorNbAstraZeneca = 0;
	 let acumuladorNbOtra = 0;
	 let acumuladorMSputnikV = 0;
	 let acumuladorAstraZenecaMayor38 = 0;
	 let acumuladorSputnikVMenor37 = 0;
	 let acumuladorSputnikVEdad= 0;
	 let acumuladorAstraZenecaEdad = 0;
	 let acumuladorOtraEdad = 0;


	 let porcentajeAstraZeneca = 0;
	 let promedioSputnikV = 0;
	 let promedioAstraZeneca = 0;
	 let promedioOtras = 0;
	 let porcentajeGeneroF = 0;
	 let porcentajeGeneroM = 0;
	 let porcentajeGeneroNb = 0;
	 let promedioEdadSputnikVMenor37 = 0;


	while(respuesta == "si"){

	
	  nombre = prompt("ingrese nombre");

	  genero = prompt("ingrese su gnero F, M o NB: ").toLowerCase();
	  while(!(genero == "f" || genero == "m" || genero == "nb")){
		prompt("sexo ingresado ioncorrecto").toLowerCase;
		
	  }
	  switch(genero){
		  case "f":
			  acumuladorF++;
			  if(vacuna == "sputnikv"){
				  acumuladorFSputnikV++
               }
			   break;
			  
		  case "m":
			  acumuladorM++
			  if(vacuna == "sputnikv"){
				  acumuladorMSputnikV++;
			  }
			  break;
		  case "nb":
			  acumuladorNb++;
			  if(vacuna == "astrazeneca"){
				  acumuladorNbAstraZeneca++;
			  }else if(vacuna == "otra"){
				  acumuladorNbOtra++;
			  }
			  break;

	  }

	  edad = parseInt(prompt("ingrese su edad"));
	  while(isNaN(edad)){
		edad = parseInt(prompt("Eso no es un numero. Ingrese su edad: "));
	 	}
		 	acumuladorEdad++;
		

	 

	  vacuna = prompt("ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.").toLowerCase();
	  while(!(vacuna == "sputnikv" || vacuna == "astrazeneca" || vacuna == "otra")){
		 prompt("vacuna ingresada incorrecta.ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”." )
	  }
	  switch(vacuna){
		  case "sputnikv":
			  acumuladorSputnikV++;
			  acumuladorSputnikVEdad = acumuladorSputnikVEdad + edad;
			  if (vacuna == "sputnikv" && temperaturaCorporal <= 37){
				  acumuladorSputnikVMenor37++;
				  edadMMenor37 = edadMMenor37 + edad;
			  }
			  break;
		  case "astrazeneca":
			  acumuladorAstraZeneca++;
			  acumuladorAstraZenecaEdad = acumuladorAstraZenecaEdad + 1
			  if(vacuna == "astrazeneca" && temperaturaCorporal > 38){
				  acumuladorAstraZenecaMayor38++;
			  }
			  break;
		  case "otra":
			  acumuladorOtra++;
			  acumuladorOtraEdad = acumuladorOtraEdad + edad;
			  break;
			}
	
      temperaturaCorporal = parseFloat(prompt("ingrese tu temperatura corporal durante la primer noche "));
	  while(isNaN(temperaturaCorporal)){
		temperaturaCorporal = parseInt(prompt("Eso no es un numero. Ingrese su temperatura corporal durante su primer noche : "));
	  }
      if(banderaTemperatura == 1 ){
		mayorTemperatura = temperaturaCorporal;
		vacunaMayorTemperatura = vacuna;
        nombreMayorTemperatura = nombre;
		acumuladorTemperatura++;
		banderaTemperatura = 0;
	  }else if (temperaturaCorporal > mayorTemperatura){
		mayorTemperatura = temperaturaCorporal;
	  }
	

	    respuesta = prompt("Desea seguir ingresando numeros? si/no");

		while(respuesta != "si" && respuesta != "no"){
			alert("Valor incorrecto. responda correctamente");
			respuesta = prompt("Desea seguir ingresando numeros? si/no");
		}
	}

	 porcentajeAstraZeneca = (100 / acumuladorAstraZeneca) / (acumuladorAstraZeneca + acumuladorSputnikV + acumuladorOtra);
	 promedioSputnikV = acumuladorSputnikVEdad / acumuladorSputnikV;
	 promedioAstraZeneca = acumuladorAstraZenecaEdad / acumuladorAstraZeneca;
	 promedioOtras = acumuladorOtraEdad / acumuladorOtra;
	 porcentajeGeneroF = (100 / acumuladorF) / (acumuladorF + acumuladorM + acumuladorNb);
	 porcentajeGeneroM = (100/ acumuladorM) / (acumuladorF + acumuladorM + acumuladorNb);
	 porcentajeGeneroNb = (100 / acumuladorNb) + (acumuladorF + acumuladorM + acumuladorNb);
	 nbAstraZenecaOtra = acumuladorNbAstraZeneca + acumuladorNbOtra;
	 promedioEdadSputnikVMenor37 = edadMMenor37 / acumuladorSputnikVMenor37;

	 if(acumuladorSputnikV > acumuladorAstraZeneca && acumuladorSputnikV > acumuladorOtra){
		 vacunaMasAplicada = "SputnikV";
	 }else if(acumuladorAstraZeneca > acumuladorOtra){
		 vacunaMasAplicada = "AstraZeneca";
	 }else{
		 vacunaMasAplicada = "Otra";
	 }

	 alert(" el nombre de la persona con mayor temperatura es: " + nombreMayorTemperatura + "y la vacuna que se administro es: " + vacunaMayorTemperatura);

	 alert("la cantidad de personas de genero femenino que se pusieron la vacuna sputnikV es de: " + acumuladorFSputnikV);
	 alert("la cantidad de personas del genero no binario que se colocaron AstraZeneca u Otra es de: " + nbAstraZenecaOtra);
	 alert("Cantidad de personas que se aplicaron la vacuna AstraZeneca y presentaron una temperatura mayor a 38 es de: " + acumuladorAstraZenecaMayor38);
	 if(promedioEdadSputnikVMenor37 == NaN){
		 alert("no se ingresaron datos de los hombres que se aplicaron SputnikV que no presentaron temperatura mayor a 37");
	 }else{
		alert("El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre es de: " + promedioEdadSputnikVMenor37);
	 }
	 alert("el porcentaje de personas que se aplicaron AstraZeneca es de: " + porcentajeAstraZeneca);
	 alert("la vacuna mas aplica fue: " + vacunaMasAplicada);
	 alert("el promedio de edad de la vacuna SputnikV es de: " + promedioSputnikV + "de la vacuna AstraZeneca es de: " + promedioAstraZeneca + "y de otras vacunas es de: " + promedioOtras);
	 alert("el porcentaje de genero femenino es de: " + porcentajeGeneroF + "el porgentaje de genero masculino es de" + porcentajeGeneroM + "y el porcentaje del genero no binario es de: " + porcentajeGeneroNb);	

     


}//FIN DE LA FUNCIÓN