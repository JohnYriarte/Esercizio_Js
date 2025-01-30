/*
1) Creazione e utilizzo di un oggetto semplice
Obiettivo: Creare un oggetto JavaScript e accedere alle sue proprietà.

Istruzioni:

Crea un oggetto libro con le seguenti proprietà:
titolo (string)
autore (string)
annoPubblicazione (number)
Stampa l'oggetto in console.
Stampa il titolo del libro accedendo alla proprietà titolo.
*/

const libro = {
  titolo: "JavaScript",
  autore: "Unknown",
  annoPubblicazione: 333,
};

console.log(libro);
console.log(libro.titolo);

/*
2: Metodi all'interno di un oggetto
Obiettivo: Aggiungere un metodo a un oggetto e richiamarlo.

Istruzioni:

Estendi l'oggetto libro aggiungendo un metodo stampaDettagli() che stampi in console le informazioni del libro.
Chiama il metodo per visualizzare i dettagli.
*/

libro.dettagli = function () {
  console.log(
    `Titolo: ${this.titolo} Autore: ${this.autore} AnnoPubblicazione: ${this.annoPubblicazione}`
  );
};
libro.dettagli();

/*
3: Creazione di una funzione costruttrice
Obiettivo: Creare oggetti usando una funzione costruttrice.

Istruzioni:

Definisci una funzione costruttrice Libro con parametri per titolo, autore e annoPubblicazione.
Aggiungi un metodo stampaDettagli() all'interno della funzione costruttrice.
Crea due oggetti Libro e chiama il metodo stampaDettagli().
*/

function Libro(titolo, autore, annoPubblicazione) {
  this.titolo = titolo;
  this.autore = autore;
  this.annoPubblicazione = annoPubblicazione;
  this.dettagli = function () {
    console.log(
      `Titolo: ${this.titolo} Autore: ${this.autore} AnnoPubblicazione: ${this.annoPubblicazione}`
    );
  };
}
const libro1 = new Libro("Libro1", "Autore1", 2000);
libro1.dettagli();
const libro2 = new Libro("Libro2", "Autore2", 2002);
libro2.dettagli();

/*
4. Partendo da questa documentazione: https://www.w3schools.com/js/js_classes.aspCollega a un sito esterno.

Uso delle classi in JavaScript
Obiettivo: Creare una classe in ES6 per gestire gli oggetti.

Istruzioni:

Crea una classe Libro con un costruttore che accetta titolo, autore, e annoPubblicazione.
Aggiungi un metodo stampaDettagli() alla classe.
Crea due oggetti Libro e chiama il metodo su entrambi.
*/

class Libro2 {
  constructor(titolo, autore, annoPubblicazione) {
    this.titolo = titolo;
    this.autore = autore;
    this.annoPubblicazione = annoPubblicazione;
  }

  dettagli() {
    return `Titolo: ${this.titolo} Autore: ${this.autore} AnnoPubblicazione: ${this.annoPubblicazione}`;
  }
}

const libro3 = new Libro2("Libro3", "Autore3", 2003);
const libro4 = new Libro2("Libro4", "Autore4", 2004);
console.log(libro3.dettagli());
console.log(libro4.dettagli());

/*

5. Classi e DOM

Crea un oggetto dipendenti con le seguenti proprietà:
*/

class Dipendente {
  constructor(nome, eta, ruolo) {
    this.nome = nome;
    this.eta = eta;
    this.ruolo = ruolo;
    this.settore = "IT";
  }
}

const dipendente1 = new Dipendente("Mario", 30, "Sviluppatore");
const dipendente2 = new Dipendente("Luca", 40, "Manager");
const dipendente3 = new Dipendente("Alessia", 25, "Sistemista");

let dipendenti = [dipendente1, dipendente2, dipendente3];
const container = document.getElementById("container");

for (let dipendente of dipendenti) {
  // Dettagli dipendente
  const nome = dipendente.nome;
  const eta = dipendente.eta;
  const ruolo = dipendente.ruolo;

  //  Creazione div card
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";

  // Creazione div card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Creazione card title
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  const cardTitleNode = document.createTextNode(`${nome} (${eta})`);
  cardTitle.appendChild(cardTitleNode);

  // Creazione card sub-title
  const cardSubTitle = document.createElement("h6");
  cardSubTitle.classList.add("card-subtitle", "mb-2", "text-body-secondary");
  const cardSubTitleNode = document.createTextNode(ruolo);
  cardSubTitle.appendChild(cardSubTitleNode);

  // Creazione card text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  const cardTextNode = document.createTextNode(
    "Some quick example text to build on the card title and make up the bulk of the card's content."
  );
  cardText.appendChild(cardTextNode);

  // Append Elements
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  container.appendChild(card);
}
