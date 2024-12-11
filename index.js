// 1) Quali sono i tipi primitivi principali in TypeScript?
// string
// boolean
// number
// any
// undefined
// null
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = 'Tommaso';
var myAge = 21;
var myBoolean = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
var greet = function (name) {
    return 'Ciao' + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var calculateIva = function (price) {
    var iva = 0.22;
    return price + price * iva;
};
console.log(calculateIva(10));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatString = function (str1, str2) {
    var strings = str1 + str2;
    return strings.length;
};
console.log(concatString('Hello', 'World'));
// 7) Cos'è un Type Union e come si scrive?
var value;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var UndefiNull = 33;
var d1 = 'Lunedì' + 1;
var d2 = 'Martedì' + 2;
var d3 = 'Mercoledì' + 3;
var d4 = 'Giovedì' + 4;
var d5 = 'Venerdì' + 5;
var d6 = 'Sabato' + 6;
var d7 = 'Domenica' + 7;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tuple1 = [
    'ciao',
    'mondo',
    'epicode',
    2,
    3,
];
var Student = [
    {
        name: 'Mario',
        value: 6,
        address: 'via antonio 89',
    },
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myAuto = {
    marca: 'Lancia',
    modello: 'Ypsilon',
    anno: 2022,
    colore: 'grigio',
    porte: 5,
};
