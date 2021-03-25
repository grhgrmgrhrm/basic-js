const CustomError = require("../extensions/custom-error");

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {

    constructor (reverse) {
        if (reverse === true || (reverse == undefined)) {
            this.reverse = true;
        } else if (reverse === false) {
            this.reverse = false;
        }
    }

    encrypt(msg, key) {
        if (!msg || !key) throw new Error();

        let encryptMsg = msg.toUpperCase().split('');
        let encryptKey = key.toUpperCase().split('');
        let result = [];

        for (let i = 0; i < encryptMsg.length; i++) {
            if (alphabet.includes(encryptMsg[i])) {
                if (encryptKey.length < encryptMsg.length) encryptKey.push(encryptKey[i]);

                let indexNewChar = 0;
                let sumIndex = alphabet.indexOf(encryptMsg[i]) + alphabet.indexOf(encryptKey[i]);

                if (sumIndex >= 26) {
                    indexNewChar = sumIndex - 26;
                } else {
                    indexNewChar = sumIndex;
                }
                result.push(alphabet[indexNewChar]);
            } else {
                result.push(encryptMsg[i]);
                encryptKey.splice(i, 0, ' ');
            }
        }

        if (!this.reverse) result = result.reverse();

        return result.join('').toUpperCase();
    }

    decrypt(msg, key) {
        if (!msg || !key) throw new Error();

        let decryptMsg = msg.toUpperCase().split('');
        let decryptKey = key.toUpperCase().split('');
        let result = [];

        for (var i = 0; i < decryptMsg.length; i++) {
            if (alphabet.includes(decryptMsg[i])) {
                if (decryptKey.length < decryptMsg.length) decryptKey.push(decryptKey[i]);

                let indexNewChar = 0;
                let diffIndex = alphabet.indexOf(decryptMsg[i]) - alphabet.indexOf(decryptKey[i]);

                if (diffIndex < 0) {
                    indexNewChar = diffIndex + 26;
                } else {
                    indexNewChar = diffIndex;
                }
                result.push(alphabet[indexNewChar]);
            } else {
                result.push(decryptMsg[i]);
                decryptKey.splice(i, 0, ' ');
            }
        }

        if (!this.reverse) result = result.reverse();

        return result.join('').toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
