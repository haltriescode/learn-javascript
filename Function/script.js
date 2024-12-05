// Function Declaration

function hello()
{
    console.log("Hello world!");
}

// Calling a function

hello();


// Return Value
function sum( num1, num2){
    return num1 + num2;
}

const a = sum (1,2);
console.log(a); //Output will be 3;


// Function Expression
const color = function(n){
    return console.log(`it has ${n} color!`)
};

color("yellow");


//Arrow Function
const myName = (name) => {
    return console.log(`Hi, my name is ${name}, nice to meet you!`);
};

myName("Hall");