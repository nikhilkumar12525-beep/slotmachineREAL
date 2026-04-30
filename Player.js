class Player {

    constructor(balance) {
        this.balance = balance;
    }

    placeBet(amount) {
        this.balance -= amount;
    }

    addMoney(amount) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}
