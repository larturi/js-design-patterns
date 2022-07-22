class Singleton {

    private static instance: Singleton;
    public random: number;

    private constructor() {
        this.random = Math.random();
    }

    public static getInstance(): Singleton {
        if(!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }
}

const singleton = Singleton.getInstance();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log('Imprime random desde singleton1', singleton1.random);
console.log('Imprime random desde singleton2', singleton2.random);
console.log('Evalua si las 2 instancias son iguales:', singleton1 === singleton2);

console.log('Modifico el objeto: singleton1.random = 10')
singleton1.random = 10;
console.log('Imprime random desde singleton1', singleton1.random);
console.log('Imprime random desde singleton2', singleton2.random);
console.log('Evalua si las 2 instancias son iguales:', singleton1 === singleton2);
