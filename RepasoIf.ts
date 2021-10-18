//>>>>>>>>>>>>>>>>>> PUNTO 1 - Funcion signo zodiacal<<<<<<<<<<<<<<<<<<<<<<<

function signoZodiacal (dia:number, mes:string){
    if ((dia >= 21 && mes == "marzo") || (dia <= 20 && mes == "abril")){
        console.log("Tu signo zodiacal es: Aries");
    }
    else if(dia >= 21 && mes == "abril" || dia <= 21 && mes == "mayo"){
        console.log ("Tu signo zodiacal es: Tauro");
    }
    else if(dia >= 22 && mes == "mayo" || dia <= 21 && mes == "junio"){
        console.log ("Tu signo zodiacal es: Geminis");
    }
    else if(dia >= 22 && mes == "junio" || dia <= 23 && mes == "julio"){
        console.log ("Tu signo zodiacal es: Cancer");
    }
    else if(dia >= 24 && mes == "julio" || dia <= 23 && mes == "agosto"){
        console.log ("Tu signo zodiacal es: Leo");
    }
    else if(dia >= 24 && mes == "agosto" || dia <= 23 && mes == "septiembre"){
        console.log ("Tu signo zodiacal es: Virgo");
    }
    else if(dia >= 24 && mes == "septiembre" || dia <= 23 && mes == "octubre"){
        console.log ("Tu signo zodiacal es: Libra");
    }
    else if(dia >= 24 && mes == "octubre" || dia <= 22 && mes == "noviembre"){
        console.log ("Tu signo zodiacal es: Escorpio");
    }
    else if(dia >= 23 && mes == "noviembre" || dia <= 21 && mes == "diciembre"){
        console.log ("Tu signo zodiacal es: Sagitario");
    }
    else if(dia >= 22 && mes == "diciembre" || dia <= 20 && mes == "enero"){
        console.log ("Tu signo zodiacal es: Capricornio");
    }
    else if(dia >= 21 && mes == "enero" || dia <= 19 && mes == "febrero"){
        console.log ("Tu signo zodiacal es: Acuario");
    }
    else if(dia >= 20 && mes == "febrero" || dia <= 20 && mes == "marzo"){
        console.log ("Tu signo zodiacal es: Piscis");
    }
}

signoZodiacal(5, "junio");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PUNTO 2 - funcion imprimir continente<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function continentes (pais:string){
    if(pais == "alemania" || pais =="italia" || pais =="suiza" || pais =="españa" || pais =="reino unido"){
        console.log(" Estas en : EUROPA");
    }
    else if(pais == "china" || pais =="japon" || pais =="pakistan" || pais =="filipinas" || pais =="tailandia"){
        console.log(" Estas en : ASIA ");
    }
    else if(pais == "cabo verde" || pais =="egipto" || pais =="etiopia" || pais =="kenia" || pais =="madagascar"){
        console.log(" Estas en : AFRICA");
    }
    else if(pais == "ecuador" || pais =="peru" || pais =="argentina" || pais =="bolivia" || pais =="brasil"){
        console.log(" Estas en : AMERICA");
    }
    else if(pais == "australia" || pais == "fiyi" || pais =="micronesia" || pais =="nueva zelanda" || pais =="tuvalu"){
        console.log(" Estas en : OCEANIA");
    }else{
        console.log("Introduce un pais correcto");
    }
}

continentes("australia");









