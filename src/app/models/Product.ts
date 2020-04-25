export default class Product {
    public id: number;
    public name: string;
    public quantityOnStock: number;
    public imageUrl: string;

    constructor(name: string, quantityOnStock: number, imageUrl?: string) {
        this.name = name;
        this.quantityOnStock = quantityOnStock;
        this.imageUrl = imageUrl;
    }
};