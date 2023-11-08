// Esercizio 1
// Sulla base delle lezioni di Lunedì, ricrea la funzione calcolatricde utilizzando le callbacks.
//Fate in modo che possa calcolare le quattro operazioni base matematiche (+,-,* e /) e che prenda non due ma tre numeri sui quali queste operazioni.
//in questo caso, potete aiutarvi con il codice della lezione.

const calculator = (operation) => {

const sum = (numOne, numTwo, numThree) => numOne + numTwo + numThree;
if (operation === "+") {
    return numOne + numTwo + numThree;
} 
 const sub = (numOne, numTwo, numThree) => numOne - numTwo - numThree;
 if (operation === "-") {
    return numOne - numTwo - numThree 
}


const mul = (numOne, numTwo, numThree) => numOne * numTwo * numThree;
if (operation === "*") {
    return numOne * numTwo * numThree 
}
const div = (numOne, numTwo, numThree) => numOne / numTwo / numThree;
 if (numTwo === 0 || nemThree === 0) { return nan;
 return numOne / numTwo / numThree;

};
}
if (isNaN (result)) {
    return "Operazione non valida";
} else  {
    return result;
}

//Esarcizio 2
// Creare un array di oggetti che simuli la lista del carrello di un e-commerce.
// Ogni oggetto deve avere l suo interno un id, un nome, un indirizzo per immagine, e una descrizione.
// Processate il seguente array di oggetti con map me forEach, e scriverne in comento la differenza.
// Basta solo stamparne il contenuto.

const cart = [
    {
        id:1,
        name: "Don Papa Masskara",
        price: "40,50 €",
        description: "70 cl, 45.0 % vol.",
        urlImg: "https://placehold.co/600x400",
        
    },

     {
        id: 2,
        name: "Jack Daniel's",
        price: "29,00 €",
        description:"70 cl,45.0 % vol. ",
        urlImg: "https://placehold.co/600x400",
     },

       {
        id: 3,
        name: "Jagermeister",
        price: "11,90 €",
        description:"70 cl, 35.0 % vol.",
        urlImg: "https://placehold.co/600x400",
       }
]

cart.map(item => {
    console.log (`ID:${item.id}, name:${item.name}, price:${item.price}, description:${item.description}`);
});

cart.forEach (item => {
    console.log (`ID:${item.id}, name:${item.name}, price:${item.price}, description:${item.description}`);
});