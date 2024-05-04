export default class Transaction {
    constructor(
        public amount: number,
        public payee: string,
        public payer: string,
    ) {}

    toString() {
        return JSON.stringify(this);
    }
}