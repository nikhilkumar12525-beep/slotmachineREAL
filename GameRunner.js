const slotMachine = new SlotMachine();
const player = new Player(100);

function playGame() {

    const bet = 10;

    if (player.getBalance() < bet) {
        document.getElementById("result").innerText = "Out of money!";
        return;
    }

    player.placeBet(bet);

    let reel1 = document.getElementById("reel1");
    let reel2 = document.getElementById("reel2");
    let reel3 = document.getElementById("reel3");

    reel1.classList.add("spin");
    reel2.classList.add("spin");
    reel3.classList.add("spin");

    setTimeout(() => {

        slotMachine.spin();

        let reels = slotMachine.getReels();

        reel1.innerText = reels[0];
        reel2.innerText = reels[1];
        reel3.innerText = reels[2];

        reel1.classList.remove("spin");
        reel2.classList.remove("spin");
        reel3.classList.remove("spin");

        let winnings = slotMachine.checkWin();

        if (winnings > 0) {
            player.addMoney(winnings);
            document.getElementById("result").innerText =
                "You won $" + winnings;
        } else {
            document.getElementById("result").innerText =
                "No match";
        }

        document.getElementById("balance").innerText =
            "Balance: $" + player.getBalance();

    }, 1500);
}
