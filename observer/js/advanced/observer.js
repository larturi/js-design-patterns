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

class ItemsSubject extends Subject {
    constructor() {
        super();
        this.data = []
    }

    add(item) {
        this.data.push(item);
        this.notify(this.data);
    }
}

class ListObserver {
    constructor(element) {
        this.element = element;
    }

    refresh(data) {
        this.element.innerHTML = data.reduce((ac, e) => {
            return ac + `<p>${e}</p>`
        }, "");
    }
}

class CounterObserver {
    constructor(element) {
        this.element = element;
    }

    refresh(data) {
        this.element.innerHTML = data.length;
    }
}

const items = new ItemsSubject();
const div1Observer = new ListObserver(div1);
items.subscribe(div1Observer);

const div2Observer = new CounterObserver(div2);
items.subscribe(div2Observer);

function add() {
    const name = txtName.value;
    items.add(name);
}