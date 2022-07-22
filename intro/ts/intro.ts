namespace TSNamespace {

    interface Product {
        price: number;
        getPrice(): string;
    }

    class Drink {

        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        info(): string {
            return this.name;
        }
    }

    class Beer extends Drink implements Product {

        private alcohol: number;
        price: number;

        constructor(name: string, alcohol: number, price: number) {
            super(name);
            this.alcohol = alcohol;
            this.price = price;
        }

        info(): string {
            return super.info() + ' ' + this.alcohol;
        }

        getPrice(): string {
            return `La cerveza ${super.info()} cuesta $ ${this.price}`

        }

    }

    class Snack implements Product {

        name: string;
        price: number;

        constructor(name: string, price: number) {
            this.name = name;
            this.price = price
        }

        getPrice(): string {
            return `El producto ${this.name} cuesta $ ${this.price}`
        }
    }

    const products: Product[] = [
        new Beer("Corona", 5.8, 27),
        new Beer("Stella", 7.8, 23),
        new Snack("Papas", 12),
    ];

    function getPrices(items: Product[]) {
        for(const item of items) {
            console.log(item.getPrice());
        }
    }

    getPrices(products)
}