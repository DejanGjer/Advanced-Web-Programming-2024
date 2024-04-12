export class Product {
    public quantity: number;

    constructor(public name: string,
                public price: number,
                public imageUrl: string,
                public onSale: boolean,
    ) {
        this.quantity = 0;
    }

    canDecrease(): boolean {
        return this.quantity > 0;
    }
}
