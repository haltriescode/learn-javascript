/***
 * JSON stands for JavaScript Object Notation

    JSON is a lightweight format for storing and transporting data

    JSON is often used when data is sent from a server to a web page
 */

/***
 JSON Syntax Rules
    Data is in name/value pairs,
    Data is separated by commas,
    Curly braces hold objects,
    Square brackets hold arrays.
 */


// Converting JSON to Javascript Object

let text = '{ "employees" : [ ' +
'{"firstName" : "John", "lastName" : "Doe"},' +
'{"firstName" : "Anna", "lastName" : "Smith"},' +
'{"firstName" : "Peter", "lastName" : "Jones"} ]}';

const obj = JSON.parse(text);

// Show data to html page

document.getElementById("demo").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;