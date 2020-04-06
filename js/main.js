console.log('TEST OKAY');
/**Descrizione******************************************
* Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
* In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
* Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
* La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
* Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
****************************************************** */

 /******************************************************
  * PSEUDO CODICE:
  * GENERO 16 NUMERI CASUALI CONTENUTI NELL'INTERVALLO CHE VA DA 1 A 100
  * 
  ******************************************************/
// ARRAY CONTENENTE I NUMERI VIETATI
var numeriVietati = [];

for (var i = 1; i <= 16; i++) {
  var numeroRandom = getRandomNumber(1, 100);
  console.table("Il "+ i + "°" + " numero random generato è",numeroRandom);
  numeriVietati.push(numeroRandom);
}
console.log(numeriVietati);




// CREO LA MIA FUNZIONE CHE GENERA UN NUMERO CASUALE PASSANDOGLI DEI PARAMATRI DI MIN E MAX
function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
