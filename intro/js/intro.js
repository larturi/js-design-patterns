// Funcion de primer orden: pueden asignarse a variables
function suma(a, b) {
    return a + b;
}

const fSum = suma;
result = fSum(6, 8);
console.log("Funcion de primer orden: pueden asignarse a variables")
console.log(result);
printSeparador();

// Funcion de orden superior: recibe fx como parametro
function operation(fn, a, b) {
    console.log("Funcion de orden superior: recibe fx como parametro");
    console.log(fn(a, b));
}
operation(suma, 5, 7);
printSeparador();

// Arrow function
let funcAnonima = () => console.log("Funcion Anonima");
operation((a, b) => a * b, 4, 5);
printSeparador();

// Foreach
const names = ["Leandro", "Candelaria", "Lisandro"];
console.log("Foreach. Es un metodo inmutable (no modifica el array)");
names.forEach((name) => console.log(name.toUpperCase()))
printSeparador();

names.sort()
console.log("Sort. Es un metodo mutable (modifica el array)");
console.log(names);
printSeparador();

// Map
const namesUpper = names.map(name => name.toUpperCase());
console.log("Map. Es un metodo inmutable (no modifica el array)");
console.log('names', names);
console.log('namesUpper', namesUpper);
printSeparador();

// Reduce
const numbers = [5, 7, 3, 2, 6, 8, 9, 6];
console.log("Reduce. Recibe dos parametros, un acumulador y el valor a iterar");
const total = numbers.reduce((ac, number) => {
    return ac + number;
}, 0);
console.log('Total: ' + total);
printSeparador();

// POO

// Clases
class Drink {
    constructor(name) {
        this.name = name;
    }

    info() {
        return this.name
    }
}

// Functional
function Drink2(name) {
    this.name = name;

    this.info = function() {
        return this.name;
    }
}

console.log('POO con Clases:');
const drink = new Drink("Cerveza");
console.log(drink.info());
printSeparador();

console.log('POO con Funciones:');
const drink2 = new Drink2("Agua");
console.log(drink2.info());
printSeparador();

// Herencia
class Beer extends Drink {
    constructor(name, alcohol) {
        super(name);
        this.alcohol = alcohol;
    }

    info() {
        return super.info() + " " + this.alcohol;
    }
}
console.log('Herencia:');
const newBeer = new Beer("Salta", 8.5);
console.log(newBeer.info());
printSeparador();

function printSeparador() {
    console.log('\n' + "-----------------------------------------------------------------");
}