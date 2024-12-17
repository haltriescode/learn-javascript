// setTimeout
// set delay for a function to be executed
// it can be used to simulate asynchronous process

console.log("Start");

setTimeout(() => {
    console.log("This code runs after 5 seconds");
}, 5000);

console.log("Load");


// Callback
// callback is a function that is pased as an argument to another function
// Synchronous callback
function greet(name, callback){
    console.log(`Hello, ${name}`);
    callback();
}

function sayName(){
    console.log("My name is Hal. Nice to meet you.");
}

greet("Ana", sayName); // sayNAme runs after the console.log inside greet()

// Asynchronous callback
// callback in async is used to control the flow of the program
function doTask(callback){
    console.log("Starting a task");
    setTimeout(() => {
        console.log("Task completed!");
        callback();
    }, 5000);
};
// code here will be executed before doTask()
console.log("Another task")
function notify(){
    console.log("Notification: Task is done!");
}

doTask(notify);
// output asynchronous callback
// Starting a task
// Another task
// Task completed!
// Notification: Task is done!


// Asynchronous without callback
/**
 * function doTask(){
 * console.log("Starting a task");
 * setTimeout(() => {
 *  console.log("Task completed!")
 * }, 5000);
 * }
 * 
 * doTask();
 * console.log("Notification: Task is done!")
 */

/**
 * output
 * Starting a task
 * Notification: Task is done!
 * Task completed!
 */

// Error Handling with Callback

// Promise

// async - await



