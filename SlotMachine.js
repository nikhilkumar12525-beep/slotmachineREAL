class SlotMachine {

    constructor() {
        this.symbols = ["🍒", "🍋", "7️⃣", "💎", "⭐"];
        this.reels = ["", "", ""];
    }

    spin() {
        for (let i = 0; i < this.reels.length; i++) {
            let randomIndex = Math.floor(Math.random() * this.symbols.length);
            this.reels[i] = this.symbols[randomIndex];
        }
    }

    getReels() {
        return this.reels;
    }

    checkWin() {

        if (this.reels[0] === this.reels[1] &&
            this.reels[1] === this.reels[2]) {
            return 100;
        }

        if (this.reels[0] === this.reels[1] ||
            this.reels[1] === this.reels[2] ||
            this.reels[0] === this.reels[2]) {
            return 20;
        }

        return 0;
    }
}
