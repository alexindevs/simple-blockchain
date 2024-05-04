import Transaction from "./transaction";
import crypto from "crypto";

export default class Block {
    public nonce: number = Math.round(Math.random() * 999999999);

    constructor(
        public previousHash: string | null,
        public transactions: Transaction,
        public timestamp = Date.now(),
    ) {}

    getHash() {
        const str = JSON.stringify(this);
        const hash = crypto.createHash("SHA256");
        hash.update(str).end();
        return hash.digest("hex");
    }
}