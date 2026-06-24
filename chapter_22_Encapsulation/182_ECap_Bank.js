class ICICI {
    #balance; // # means private in JS, In Typescript - private

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let shivani = new ICICI("Prrammod", 1000);
console.log(shivani.getBalance());
shivani.setBalance(10000000, false);
console.log(shivani.getBalance());

let shivani_father = new ICICI("shivani", 2000);
console.log(shivani_father.getBalance());
shivani_father.setBalance(300000, true);
console.log(shivani_father.getBalance());