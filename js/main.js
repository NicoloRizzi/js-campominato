/**Descrizione******************************************
* Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
* In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
* Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
* La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
* Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
****************************************************** */

 /******************************************************
  * PSEUDO CODICE:
  * GENERO 16 NUMERI CASUALI
  * VERIFICO CHE NON SIANO PRESNTI NUMERI DOPPI
  * CHIEDO ALL'UTENTE UN NUMERO DA INSERIRE
  * CONTROLLO CHE RIENTRI NEL RANGE DA 1 A 100
  * 
  * 
  ******************************************************/
/**
 * SEZIONE DI IMPOSTAZIONE DELLA DIFFICOLTA'
 * SCEGLIERE LA DIFFICOLTA' TRAMITE PROMPT ATTRAVERSO LA SCELTA DI 3 VALORI 0 (FACILE),1(NORMALE),2 (DIFFICILE)
 * SULLA BASE DEL VALORE OTTENUTO VARIO IL RANGE DELL'INTERVALLO DEI NUMERI
 */
var difficolta = parseInt(prompt("Inserisci la difficolta'"));
var max;
while (difficolta !== 0 || difficolta !== 1 || difficolta !==2){
  if (difficolta === 0) {
    alert("Hai impostato la difficoltà FACILE, il tuo range di numeri varia da 1 a 100");
    max = 100;
    break;
  } else if (difficolta === 1) {
    alert("Hai impostato la difficoltà NORMALE, il tuo range di numeri varia da 1 a 80");
    max = 80;
    break;
  } else if (difficolta === 2) {
    alert("Hai impostato la difficoltà NORMALE, il tuo range di numeri varia da 1 a 50");
    max = 50;
    break;
  } else {
    alert("VALORE NON VALIDO");
    difficolta = parseInt(prompt("Inserisci correttamente la difficolta'"));
  }
}




/**
 * SEZIONE DI SETUP E CREAZIONE BOMBE
 */ 
// ARRAY CONTENENTE I NUMERI VIETATI
var numeriVietati = [];
// ARRAY CONTENTENTE I NUMERI DICHIARATI DAL GIOCATORE
var numeriUtente = [];
// VARIABILE PER ASSEGNAMENTI DEI NUMERI DELL'UTENTE
var numeroUtente = 0;

// VARIABILE CONTENENTE LE POSSIBILITA'
var possibilita = max - 16;

// VARIABILE CONTENENTE IL NUMERO DI TENTATIVI
var tentativi = 0;

// INIZIALIZZO LA GENERAZIONE DI UN CICLO PER 16 NUMERI

while (numeriVietati.length < 16) {
  var numeroRandom = getRandomNumber (100);
  
  // CONTROLLO CHE NON VENGONO INSERITI 2 NUMERI IDENTICI NELL'ARRAY DEI NUMERI VIETATI
  if (numeriVietati.includes(numeroRandom) == false) {
    numeriVietati.push (numeroRandom);
  }

}
console.log("Lista Bombe: ", numeriVietati);


/**
 * SEZIONE RICHIESTA DEI NUMERI DA GIOCARE
 */


while ( (numeriUtente.length < possibilita) && (numeriVietati.includes(numeroUtente) === false) ) {
  numeroUtente = parseInt( prompt("Inserisci un numero da 1 a " + max));

  controlloNumero(numeroUtente);

  // CONTROLLO SUL NUMERO DI TENTATIVI FATTI
  if (numeroUtente.length === possibilita) {
    alert ("COMPLIMENTI HAI VINTO");
  }
}
console.log("------GAME OVER------------");
console.log("Numeri validi inseriti: ", numeriUtente);
console.log("Tentativi riusciti:", tentativi);















/**
 * FUNZIONI
 */
// GENERARE NUMERI CASUALI PASSANDO 2 PARAMETRI DI MINIMO E MASSIMO (CON MASSIMO E MINIMO INCLUSI)
function getRandomNumber (max) {
  return Math.floor(Math.random () * max ) + 1;
}


// FUNZIONE PER CONTROLLO DEL VALORE
function controlloNumero (number){

  // CASO DI VERIFICA 1) IL NUMERO E' PRESENETE NELLA LISTA DEI NUMERI VIETATI
  if ( numeriVietati.includes(number) ){
    alert("Peccato hai perso :( \n" + tentativi + " sono le volte che hai provato prima di trovare la bomba" )
  } // CASO DI VERIFICA 2 ) L'UTENTE INSERISCE DUE VOLTE LO STESSO NUMERO E VISULIZZO UN MESSAGGIO DI ALERT
  else if (numeriUtente.includes(number) ){
    alert("ATTENZIONE, il numero è già presente nell'elenco. Inserisci un nuovo numero!")
  } else if (numeroUtente < 1 || numeroUtente > max){
    alert("ATTENZIONE IL NUMERO E' FUORI DAL RANGE")
  }// CASO DI VERIFICA 3) IL NUMERO E' VALIDO
  else if (numeriUtente.includes(number) === false) {
    numeriUtente.push(number);
    // UPDATE DEL NUMERO TENTATIVI
    tentativi++;
  }
}

