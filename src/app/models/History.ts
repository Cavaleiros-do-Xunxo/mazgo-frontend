import { logging } from 'protractor';

export default class History {
    public id: string;
    public product: any[];
    public quantity: number;
    public action: string;
    public imageUrl: string;
    public timestamp: string;

    constructor(id :string, product: any[], quantity: number, action: string,  imageUrl?: string, timestamp?: string) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
        this.action = action;
        this.imageUrl = imageUrl;
        this.timestamp = timestamp;
    }
};
