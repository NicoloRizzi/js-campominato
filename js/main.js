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
  * CONTROLLO CHE RIENTRI NEL RANGE DA 1 A 100
  * 
  ******************************************************/
/**
 * SEZIONE DI SETUP E CREAZIONE BOMBE
 */ 
// ARRAY CONTENENTE I NUMERI VIETATI
var numeriVietati = [];
// ARRAY CONTENTENTE I NUMERI DICHIARATI DAL GIOCATORE
var numeriUtente = [];
// VARIABILE PER ASSEGNAMENTI DEI NUMERI CASUALI SIA ARRAY VIETATI CHE NUMERI UTENTE
var numeroRandom = 0;

// INIZIALIZZO LA GENERAZIONE DI UN CICLO PER 16 NUMERI

for (var i = 1; i <= 16; i++) {
  var numeroRandom = randomNumber (1, 100);
  
  // CONTROLLO CHE NON VENGONO INSERITI 2 NUMERI IDENTICI NELL'ARRAY DEI NUMERI VIETATI
  if (numeriVietati.includes(numeroRandom) == false) {
    numeriVietati.push (numeroRandom);
  }

}
console.log("Lista Bombe: ", numeriVietati);














/**
 * FUNZIONI
 */
// GENERARE NUMERI CASUALI PASSANDO 2 PARAMETRI DI MINIMO E MASSIMO (CON MASSIMO E MINIMO INCLUSI)
function randomNumber (min, max) {
  return Math.floor(Math.random () * max - min + 1) + min;
}