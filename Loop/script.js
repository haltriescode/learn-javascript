// for loop

for (let i = 0; i < 7; i++){
    console.log(`number ${i}`);
}


// for in

const coin = { name : "Bitcoin", ticker : "BTC", founder : "Satoshi Nakamoto"};

for (const property in coin){
    console.log(`${property} is ${coin[property]}`)
};


// for of

const fruits = ["apple", "banana", "grape", "orange"];

for (const item of fruits){
    console.log(`${item} fruit`)
};



// while

let a = 0;

while ( a < 3 ){
    console.log(`${a}`);
    a++;
};




// do - while

let i = 0;
 
do {
    console.log(`number ${i}`)
    i++;
} while (i < 12);



// continue & break statement
// continue
i = 0;
for (let i = 0; i < 7; i++){
    if ( i == 3 ){
        continue; //number 3 will be skipped
    }
    console.log(`number ${i}`);
}

// break
i = 0;
while (i < 12){
    if ( i == 3 ){
        break; //iteration is stopped
    }
    console.log(`number ${i}`);
    i++;
};
