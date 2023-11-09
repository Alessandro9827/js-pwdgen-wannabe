/*Resetto il risultato*/
let passwordGenerated = "";

/*Chiedo all'utente il suo nome, cognome e il colore preferito*/
const firstName = (prompt('Scrivi il tuo nome'));
const surName = (prompt('Scrivi il tuo cognome'));
const favouriteColor = (prompt('Scrivi il tuo colore preferito'));

/*Metto insieme il risultato per generare la password*/
passwordGenerated = firstName + surName + favouriteColor;

/*Scrivo il risultato sulla console*/
console.log(passwordGenerated);

document.getElementById('output').innerHTML = 'La tua Password ideale è ' + passwordGenerated + '21';