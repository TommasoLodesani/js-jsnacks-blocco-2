// PRIMO ESERCIZIO

// const myArr = [];
// while(myArr.length < 10){
//     let randNum = (Math.floor(Math.random() * 100) + 1);

//     if(!myArr.includes(randNum)){
//         myArr.push(randNum);
//     }

// }

// console.log(myArr);



// SECONDO ESERCIZIO

const myArr = [];

let sommaNumeriUtente = 0;

while(sommaNumeriUtente < 50) {

    let numeroUtente = parseInt(prompt("Inserisci numero"));
    myArr.push(numeroUtente);
    sommaNumeriUtente += numeroUtente;
}

console.log("Hai finito");