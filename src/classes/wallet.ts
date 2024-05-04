import crypto from "crypto";
import Chain from "./chain";
import Transaction from "./transaction";


export default class Wallet {
    public balance: number;
    public publicKey: string;
    public privateKey: string;
    constructor() {
        const keypair = crypto.generateKeyPairSync("rsa", {
            modulusLength: 2048,
            publicKeyEncoding: { type: "spki", format: "pem" },
            privateKeyEncoding: { type: "pkcs8", format: "pem" }
        });

        this.privateKey = keypair.privateKey;
        this.publicKey = keypair.publicKey;

        this.balance = 0;
    }

    sendMoney(amount: number, payeePublicKey: string) {

        if (amount > this.balance) {
            console.log("Not enough balance");
            return;
        }
        const transaction = new Transaction(amount, payeePublicKey, this.publicKey);
        const sign = crypto.createSign("SHA256");
        sign.update(transaction.toString()).end();
        const signature = sign.sign(this.privateKey);

        Chain.instance.addBlock(transaction, this.publicKey, signature);
    }
}