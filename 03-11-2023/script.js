   //Es.1
  // Sulla base della lezione del giorno, scrivereuna funzione che simuli il comportamento di un termometro. Prende un solo argomentoche rappresenta i gradi e restituisce uno dei seguenti valori: caldo-freddo-mite.

function getTemperature(Degrees) {

    if (Degrees < 18){
    return "Freddo"
  
   } else if (Degrees >=18 && Degrees <=24 ){
  return "Mite"

   } else if (Degrees >=30 ){
  return "Caldo"
    }else {
  return "Gradi non percepiti"
}
}
    console.log (getTemperature())
 

//Es. 2
//Creare un oggetto che vi identifichi come persona, inserite quindi almeno 5 proprietà e 1 metodo al suo interno.
//Andate ad eseguire l'esecuzione del metodo all'interno del programma.

const myPerson = {
    name: "Celeste",
    surname: "Massaro",
    height: "1.48",
    age: "32",
    eyes:"brown",
    whoIAm: function () {

    }
};

myPerson.whoIAm()
console.log(myPerson)

//Es.3
// 1. Creare un array vuoto chiamato preferiti;

 let preferiti=[];
 
// 2. Scrivere una funzione aggiungiAPreferiti che prende una stringa come parametro (che rappresenta l'oggetto del preferito, come il titolo di un film) e aggiunge quell'elemento all'array preferiti;
   
function aggiungiAiPreferiti (TitleMovies){
    preferiti.push (movies);
    }
 

// 3. Scrivere una funzione mostraPreferiti che stampa tutti gli elementi nell'array preferiti;

function mostraPreferiti (Preferiti) {
      for (let i=0; i < Preferiti.length; i ++) {
        console.log (Preferiti [i]);
      }
    }
    
    const Preferiti = [
     "Le Ali della libertà",
     "Godzilla",
     "Il Pianista",
     "Balto",
     "ironman",
    ] ;
 mostraPreferiti(Preferiti);

// 4. Scrivere una funzione rimuoviDaPreferiti che prende una stringa come parametro e rimuove quell'elemento dall'array preferiti, se esiste.

function rimuoviDaPreferiti ( Titolo,preferiti ){
    const index = Preferiti.indexOf(Titolo);
    if (index !== -1){
        preferiti.splice (index, 1);
        console.log ();
    } else {
            console.log ();
        }
    }

rimuoviDaPreferiti ("Godzilla",Preferiti);
console.log (Preferiti)