namespace DecoratorNameSpace {

    interface Component{
        getDetail() : string;
    }

    class ProductComponent implements Component {
        protected name: string;

        constructor(name: string){
            this.name = name;
        }

        public getDetail(): string {
            return `${this.name}`;
        }
    }

    abstract class ProductDecorator implements Component{
        protected component: Component;

        constructor(component: Component){
            this.component = component;
        }

        getDetail(){
            return this.component.getDetail();
        }
    }

    class CommercialInfoProductDecorator extends ProductDecorator{

        private tradename: string;
        private brand: string;

        constructor(component: Component, tradename: string, brand: string){
            super(component);
            
            this.tradename = tradename;
            this.brand = brand;
            
        }

        getDetail(): string{
            return `${super.getDetail()} ${this.tradename} ${this.brand}`;
        }
    }


    class StoreProductDecorator extends ProductDecorator{
        private price: number;

        constructor(component: Component, price: number){
            super(component);
            this.price = price;
        }

        getDetail(): string{
            return super.getDetail() + ` $${this.price}`;
        }
    }

    class HTMLProductDecorator extends ProductDecorator{
        getDetail() : string{
            return `<h1>Información del producto</h1><p>${super.getDetail()}</p>`;
        }
    }

    // Ejecución

    // Component
    const productComponent = new ProductComponent("Cerveza");
    console.log(productComponent.getDetail());

    // Decorator 1 con Component
    const commercialInfoProduct = 
        new CommercialInfoProductDecorator(productComponent, "Patagonia", "1L");
    console.log(commercialInfoProduct.getDetail());

    // Decorator 2 con Component
    const storeProduct = new StoreProductDecorator(productComponent, 15.5);
    console.log(storeProduct.getDetail());

    // Decorator 2 con Decorator 1
    const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5);
    console.log(storeProduct2.getDetail());

    // Decorator 3 con Decorator 2 con Decorator 1
    const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
    console.log(htmlProductDecorator.getDetail());
        

}