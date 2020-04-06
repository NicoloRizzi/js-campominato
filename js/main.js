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
  * CHIEDO ALL'UTENTE UN NUMERO DA INSERIRE
  * 
  ******************************************************/
// ARRAY CONTENENTE I NUMERI VIETATI
var numeriVietati = [];
// ARRAY CONTENTENTE I NUMERI DICHIARATI DAL GIOCATORE
var numeriUtente = [];
// VARIABILE PER ASSEGNAMENTI DEI NUMERI CASUALI SIA ARRAY VIETATI CHE NUMERI UTENTE
var numeroRandom = 0;
// INIZIALIZZO LA GENERAZIONE DI UN CICLO PER 16 NUMERI (PER IL MOMENTO)
for (var i = 1; i <= 16; i++) {
  numeroRandom = getRandomNumber(1, 100);
  //console.table("Il "+ i + "°" + " numero random generato è",numeroRandom);
  numeriVietati.push(numeroRandom);
}
// PRINT DELL'ARRAY VIETATI
console.table(numeriVietati);
//console.log("TERMINE DEL CICLO NUMERI RANDOM ARRAY", numeroRandom);

// INIZIALIZZO IL CICLO PER UN NUMERO DI TENTATIVI MASSIMO DI 84 (PER IL MOMENTO)
for (var tentativi = 1; tentativi <= 5; tentativi++){
  var numeroRandom = parseInt(prompt("Inserisci il tuo numero da giocare compreso tra 1 e 100"));
  if (numeroRandom < 0 || numeroRandom > 100) {
    while (numeroRandom < 0 || numeroRandom > 100) {
      var numeroRandom = parseInt(prompt("Attenzione hai inserito un numero che non è compreso!"));
      console.log("QUI SEI NEL CICLO DI ERRORE",numeroRandom);
      if (numeroRandom >= 0 || numeroRandom <= 100) {
        numeriUtente.push(numeroRandom);
   }  
  }
 }  numeriUtente.push(numeroRandom);
}
console.table("ARRAY DELL'UTENTE",numeriUtente);




// CREO LA MIA FUNZIONE CHE GENERA UN NUMERO CASUALE PASSANDOGLI DEI PARAMATRI DI MIN E MAX
function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
