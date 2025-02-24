"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bikes = [];
var ages = [];
bikes.push("Yamaha");
ages.push(52);
//There is another way to represent array
var schools = [];
schools.push("DAV");
var alluser = []; //this will create an array of 'Users' type.
alluser.push({ firstname: "Kamal", isActive: false });
var MLModels = [
    [568, 745],
    [879, 546, 125]
];
//Read only arrays
var numbers = [1, 2, 3, 4, 5];
var trst = ["Gohan", "Goku", "Madara"]; // this is another way of representing the readonly array
numbers.slice(); // this is okay
// numbers.push(856);        // this will throw an error as this is non-mutable
console.log(numbers);
function r_str(arr) {
    arr.slice();
    // arr.push("hello") this will throw an error as this is read only 
    console.log(arr);
}
