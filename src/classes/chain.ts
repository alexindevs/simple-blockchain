import Transaction from "./transaction";
import Block from "./block";
import crypto from "crypto";

export default class Chain {
    public static instance = new Chain();
    chain: Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        const transaction = new Transaction(100, "genesis", "satoshi");
        return new Block(null, transaction);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    mine(nonce: number) {
        let solution = 1;
        console.log("⛏️  mining...");

        while (true) {
            const hash = crypto.createHash("MD5");
            hash.update((nonce + solution).toString()).end();
            const attempt = hash.digest("hex");

            if (attempt.substr(0, 4) === "0000") {
                console.log("✅  mined:", `${nonce + solution}`);
                return solution;
            }

            solution += 1;
        }
    }

    addBlock(transaction: Transaction, senderPublicKey: string, signature: Buffer) {

        const verifier = crypto.createVerify("SHA256");
        verifier.update(transaction.toString());
        const isValid = verifier.verify(senderPublicKey, signature);

        if (!isValid) throw new Error("Invalid signature");

        const newBlock = new Block(
            this.getLatestBlock().getHash(),
            transaction,
            this.getLatestBlock().timestamp + 1
        );
        this.mine(newBlock.nonce);
        this.chain.push(newBlock);
    }
}