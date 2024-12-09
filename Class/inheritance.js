// Parent Class
class Cryptocurrency {
    constructor(name, ticker, marketCap){
        this.name = name;
        this.ticker = ticker;
        this.marketCap = marketCap;
    }

    getInfo(){
        return `${this.name} ($${this.ticker}) has a market cap of $${this.marketCap} bilion.`;
    }

    transfer(amount, recipient) {
        return `Transferred ${amount} $${this.ticker} to ${recipient}.`;
    }
};

//Child Class
class Altcoin extends Cryptocurrency {
    constructor(name, ticker, marketCap, project) {
        super(name, ticker, marketCap);
        this.project = project; 
    }

    getPurpose() {
        return `${this.name} ($${this.ticker}) is a ${this.project} coin.`;
    }
};


//Example
const doge = new Altcoin('Dogecoin', 'DOGE', 65, 'meme'); //DOGE marketcap currently around $65 bilion.
console.log(doge.getInfo()); 
console.log(doge.getPurpose()); 
console.log(doge.transfer(1000, 'Bob')); 


