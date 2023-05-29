/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa = "stringa"; //per rappresentare del testo o caratteri bisogna scriverle all'interno gli apici
let numeri = 10; // a differenza delle stringhe i numeri vengono scritti senza apici
let veroOfalso = true; // i valori booleani indicano solo vero o falso e si scrivono senza apici
let indefinito; // undefind cioè valore non definito, come una variabile mai stata definita
let nulla = null; // null si riferisce ad un valore volutamente vuoto
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Mirko";
console.log("controllo name ", name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 12;
let n2 = 20;
let somma = n1 + n2;
console.log("controllo somma di n1 e n2 ", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log("controllo la x ", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//riprendo let name e la cambio, in console cambia
name = "Parente";
console.log("controllo il cambio valore a name ", name);

//con Const il cambio valore da errore in console

const Name = "Mirko";
Name = "Parente";
console.log("controllo il cambio const ", Name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4;
let sottrazione = x - y;
console.log(
  "controllo la sottrazione di x (dichiarata prima) e y ",
  sottrazione
);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jhon";
let name2 = "Jhon";
let comparison = name1 === name2;
console.log("controllo se name1 e name2 solo uguali", comparison);

//extra
comparison = name1.toLowerCase === name2.toLowerCase;
console.log(
  "controllo se name1 e name2 solo uguali con .toLowerCase ",
  comparison
);
