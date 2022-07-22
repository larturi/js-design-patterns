class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        this.random = Math.random();
        if (Singleton.instance) {
            console.log("Instance already exists");
            return Singleton.instance;
        }

        console.log("Create a new Singleton instance");
        Singleton.instance = this;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();

console.log('Imprime random desde singleton1', singleton1.random);
console.log('Imprime random desde singleton2', singleton2.random);
console.log('Imprime random desde singleton3', singleton3.random);
console.log('Evalua si las 3 instancias son iguales:', singleton1 === singleton2 && singleton2 === singleton3);