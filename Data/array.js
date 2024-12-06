// Creating an array
const array1 = [1,2,3,4];
console.log(array1);

//Indexing array items
//Array index is started from 0

const a = array1[1]; //output will be number 2
console.log(a);

//Adding items to array
// Push
// when we use push() , the item that is added to an array, will be the last element of this array.

array1.push(6);
console.log(array1);

//Manipulate array item
//We can change an array item by re-assigned it.

array1[2] = 10;
console.log(array1);

//Deleting array element

delete array1[3];
console.log(array1); 


// Destructuring Array

const name = ['Ahmad', 'Romadhoni'];
const [frontName, lastName] = name;

console.log(frontName);

// Array Method
// sort
const animals = ["duck", "ants", "whale", "dolphine", "tiger"];
animals.sort();
console.log(animals); // Output => [ 'ants', 'dolphine', 'duck', 'tiger', 'whale' ]

// reverse
animals.reverse();
console.log(animals); // Output => [ 'whale', 'tiger', 'duck', 'dolphine', 'ants' ]

animals.reverse();
console.log(animals); // Output => [ 'ants', 'dolphine', 'duck', 'tiger', 'whale' ]
