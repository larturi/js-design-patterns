class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`;
    }
}

class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent);

        this.tradename = tradename;
        this.brand = brand;

    }

    getDetail() {
        return super.getDetail() + ` ${this.tradename} ${this.brand}`;
    }
}

class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent);

        this.price = price;

    }

    getDetail() {
        return super.getDetail() + ` $${this.price}`;
    }
}

class HTMLProductDecorator extends ProductDecorator {
    getDetail() {
        return `<h1>Información del producto</h1>
                <p>
                    ${super.getDetail()}
                </p>`;
    }
}

// Ejecución
// Component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

// Decorator 1 con Component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "Salta", "Pack 6u");
console.log(commercialInfoProduct.getDetail());

// Decorator 2 con Component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

// Decorator 2 con Decorator 1
const product = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(product.getDetail());

// Decorator 3 con Decorator 2 con Decorator 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();