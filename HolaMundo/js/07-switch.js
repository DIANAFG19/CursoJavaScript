'use strict'

var edad = 18;
var imprime = "";

switch (edad) {
	case 18:
		imprime = "Acabas de cumplir la mayoría de edad.";
	break;
	case 25:
		imprime = "Ya eres un adulto.";
	break; 
	case 40:
		imprime = "Estás en a crisis de los 40's.";
	break;
	case 75:
		imprime = "Ya eres un anciano.";
	break; 
	default:
		imprime = "Tú edad es neutra.";
	break;
}

console.log(imprime);
