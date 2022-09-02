'use strict'

// BUCLE WHILE
var year = 2022;

while (year <= 2050) {
	console.log("Estamos en el año " + year);

	if (year == 2030) {
		break;
	}

	year++;
}



// BUCLE DO WHILE
var years = 30;

do {
	alert("SOLO CUANDO SEA DIFERENTE A 20.");
	years--;
} while (years > 25)