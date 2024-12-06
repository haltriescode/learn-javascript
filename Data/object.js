// Creating an Object

const coins = {
    ticker : 'BTC',
    founder : 'Satoshi Nakamoto'
};


// Accessing object property
// Using dot
console.log(coins.founder);

// Using square bracket
console.log(coins['founder']);

// Using object destructuring
const username = {
    frontName : "Satoshi",
    lastName : "Nakamoto"
};

const {frontName , lastName} = username;
console.log(frontName); // Output => Satoshi;


// Change Object Property

username.frontName = 'Vitalik';
username.lastName = 'Buterin';

console.log(username.frontName , username.lastName); // Output => Vitalik Buterin

// Delete Object Property
delete username.lastName;
console.log(username);


