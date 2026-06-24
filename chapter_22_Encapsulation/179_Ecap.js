class BankAccount {
    #balance = 0;
    // private balance = 0;            // private field — hidden from outside(in TypeScript)

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // this.#balance = this.#balance+ amount;
        }
    }

    getBalance() {
        return this.#balance;  // controlled access
    }
}

const account = new BankAccount();  //use const most of time
//account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());

// console.log(account.balance);  // undefined  (no public field by that name)