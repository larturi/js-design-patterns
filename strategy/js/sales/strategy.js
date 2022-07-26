const data = [{
        name: 'Quilmes',
        country: 'Argentina',
        info: 'Quilmes es una cerveza argentina de ingredientes argentinos. Fue fundada por Otto Bemberg en la ciudad homónima en el año 1888, y el 31 de mayo de 1890 se lanzó al público. Desde 2006 es parte de la empresa Anheuser-Busch InBev.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Quilmes_bluelogo.png',
    },

    {
        name: 'Corona',
        country: 'Mexico',
        info: 'Corona es el nombre de una marca de cerveza mexicana fundada en 1926 muy popular en todo el mundo, ​elaborada por el Grupo Modelo, que a su vez forma parte de la multinacional belga AB Inbev.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46_tMMkQzWilQ1UsC7JXYUnNAP189x00PZ5W6iJ7kCGr0hNRlSrGFvyAroMHxL2m6ec8&usqp=CAU',
    },

    {
        name: 'Brahma',
        country: 'Argentina',
        info: 'Brahma es una cerveza brasileña lanzada en 1888 cuando el suizo Joseph Villiger, radicado en Río de Janeiro, decidió fabricar su propia cerveza para satisfacer su exigente paladar por medio de la cervecería Manufactura de Cerveja Brahma Villiger & Companhia. Desde 1999 forma parte del portafolio de AmBev tras la fusión de Brahma y Antarctica.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo-cerveza-brahma.svg/2560px-Logo-cerveza-brahma.svg.png',
    },
]

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    show() {
        this.strategy.show(this.data, this.element)
    }
}

class BasicListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `
                <div>
                    <h2>${beer.name}</h2>
                    <p>${beer.country}</p>
                </div>
                <hr>`
        }, "");
    }
}

class DetailedListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `
                <div>
                    <h2>${beer.name}</h2>
                    <p>${beer.country}</p>
                    <p>${beer.info}</p>
                </div>
                <hr>`
        }, "");
    }
}

class ListWithImageStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `
                <div>
                    <h2>${beer.name}</h2>
                    <p><img src="${beer.img}" alt="${beer.name}" style="width: 100px;"></p>
                </div>
                <hr>`
        }, "");
    }
}

const strategies = [
    new BasicListStrategy(),
    new DetailedListStrategy(),
    new ListWithImageStrategy(),
];

const info = new InfoContext(new BasicListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
});