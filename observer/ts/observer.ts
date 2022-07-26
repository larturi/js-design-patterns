namespace ObserverNameSpace {

    interface IObserver<T> {
        refresh(value: T): void;
    }

    interface ISubject<T> {
        observers: IObserver<T>[];

        subscribe(observer: IObserver<T>) : void;
        unsubscribe(observer: IObserver<T>) : void;
        notify(value: T) : void;
    }

    class Subject<T> implements ISubject<T> {
        observers: IObserver<T>[];

        constructor() {
            this.observers = [];
        }

        subscribe(observer: IObserver<T>) : void {
            this.observers.push(observer);
        };

        unsubscribe(observer: IObserver<T>) : void {
            this.observers = this.observers.filter(obs => observer !== obs);
        };

        notify(value: T) : void {
            this.observers.forEach(e => {
                e.refresh(value);
            })
        };
    }

    class Observer<T> implements IObserver<T> {
        private fn: (value: T) => void;

        constructor(fn: (value: T) => void) {
            this.fn = fn;
        }

        refresh(value: T): void {
            this.fn(value);
        }
    }

    function factorial(n: number): number { 
        if (n == 0){ 
            return 1; 
        }
        return n * factorial (n-1); 
    }

    // Numbers

    const subjectNumber = new Subject<number>();

    const obs1 = new Observer<number>((n) => {
        console.log(`El cuadrado de ${n} es: ${n * n}`);
    });

    const obs2 = new Observer<number>((n) => {
        console.log(`El factorial de ${n} es: ${factorial(n)}`);
    });

    subjectNumber.subscribe(obs1);
    subjectNumber.subscribe(obs2);

    subjectNumber.notify(4);
    subjectNumber.notify(5);

    // Strings

    const subjectString = new Subject<string>();

    const obs3 = new Observer<string>((userName) => {
        console.log(`Bienvenido ${userName}!`);
    });

    const obs4 = new Observer<string>((userName) => {
        console.log(`Nombre en mayusculas: ${userName.toUpperCase()}`);
    });

    subjectString.subscribe(obs3);
    subjectString.subscribe(obs4);
    subjectString.notify("Leandro");


}