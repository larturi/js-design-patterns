class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsuscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(e => {
            e.refresh(data)
        });
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn;
    }

    refresh(data) {
        this.fn(data);
    }
}

const s = new Subject();
const o1 = new Observer(data => {
    div1.innerHTML = data.toUpperCase();
});
s.subscribe(o1);

const o2 = new Observer(data => {
    div2.innerHTML = data.length;
});
s.subscribe(o2);

const o3 = new Observer(data => {
    div3.innerHTML = data.split("").reverse().join("");
});
s.subscribe(o3);

function change() {
    s.notify(myText.value)
}