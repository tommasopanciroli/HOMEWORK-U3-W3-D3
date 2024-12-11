// 1) Quali sono i tipi primitivi principali in TypeScript?

// string
// boolean
// number
// any
// undefined
// null

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const myName: string = 'Tommaso'
const myAge: number = 21
const myBoolean: boolean = true

// 3) Tipizza il parametro della seguente funzione:

// const greet = (name) => {  return "Ciao " + name }

const greet = (name: string): string => {
  return 'Ciao' + name
}

// 4) Specifica il tipo di ritorno della seguente funzione:

// const sum = (a: number, b: number) => {  return a + b }

const sum = (a: number, b: number): number => {
  return a + b
}

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const calculateIva = (price: number): number => {
  const iva: number = 0.22
  return price + price * iva
}

console.log(calculateIva(10))

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatString = (str1: string, str2: string): number => {
  const strings = str1 + str2
  return strings.length
}

console.log(concatString('Hello', 'World'))

// 7) Cos'è un Type Union e come si scrive?

let value: string | number

// 8) Crea una variabile che possa contenere un numero, null o undefined.

const UndefiNull: number | null | undefined = 33

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type giorniDellaSettimana = string | number

let d1: giorniDellaSettimana = 'Lunedì' + 1
let d2: giorniDellaSettimana = 'Martedì' + 2
let d3: giorniDellaSettimana = 'Mercoledì' + 3
let d4: giorniDellaSettimana = 'Giovedì' + 4
let d5: giorniDellaSettimana = 'Venerdì' + 5
let d6: giorniDellaSettimana = 'Sabato' + 6
let d7: giorniDellaSettimana = 'Domenica' + 7

// 10) Tipizza il seguente array di numeri nei due modi possibili:

// const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3]
const numbers2: Array<number> = [1, 2, 3]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

let tuple1: [string, string, string, number, number] = [
  'ciao',
  'mondo',
  'epicode',
  2,
  3,
]

// 12) Qual è la differenza tra type e interface?

// un'interfaccia è un modello, uno "schema" che definisce proprietà e metodi di un oggetto servono soprattutto per indicare la forma degli OGGETTI, mentre i type si utilizzano più per le unioni di tipi PRIMITIVI

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Student {
  firstname: string
  lastname: string
  age: number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface User {
  email: string
  telephone?: number
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface SchoolStudent {
  name: string
  value: number
  address?: string
}

const Student: SchoolStudent[] = [
  {
    name: 'Mario',
    value: 6,
    address: 'via antonio 89',
  },
]

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  marca: string
  modello: string
  anno: number
}

interface Auto extends Veicolo {
  colore: string
  porte: number
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const myAuto: Auto = {
  marca: 'Lancia',
  modello: 'Ypsilon',
  anno: 2022,
  colore: 'grigio',
  porte: 5,
}

// 18) Cosa sono i Generics in TypeScript?

// un GENERIC è un TIPO di dato passato come PARAMETRO per un'interfaccia  il suo scopo è rendere più GENERICA, RIUTILIZZABILE un'INTERFACCIA

// 19) È possibile avere più tipi generici in un'interfaccia?

//si

// 20) Crea un'interfaccia generica per una risposta API.

interface API<data> {
  success: boolean
  message: string
  data: data
}
