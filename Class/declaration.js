//class declaration
class Coin {
    constructor(name, ticker){
        this.name =name;
        this.ticker = ticker;
    }
    buy(){
        console.log(`Buy $${this.ticker}`);
    }
}

// Creating instance from Coin
const coin1 = new Coin('Bitcoin','BTC');
const coin2 = new Coin('Bitcoin','ETH');

console.log(coin1.name); // Output : Bitcoin

coin1.buy(); // Output : Buy $BTC 