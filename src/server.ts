import crypto from 'crypto';

import Transaction from './classes/transaction';
import Wallet from './classes/wallet';
import Chain from './classes/chain';

const alexin = new Wallet();
const tobe = new Wallet();
const laura = new Wallet();

alexin.balance = 200;
tobe.balance = 100;
laura.balance = 450;

alexin.sendMoney(50, tobe.publicKey);
laura.sendMoney(200, alexin.publicKey);
tobe.sendMoney(100, alexin.publicKey);

console.log(Chain.instance);