export default class Entry {
    _id: string;
    name: string;
    description: string;
    amount: number;

    constructor(name: string, description: string, amount: number) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this._id = '0';
    }
}
