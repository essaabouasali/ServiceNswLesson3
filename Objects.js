// let myDog = {};
let myDog = new Object();
let myArray = new Boolean();
console.log(myArray);
myDog.name = "Rex";
myDog.age = 6;

let car = {
    model: "MyCar",
    make: "MyMake",
    year: 2019
}

let myNames = ["Luke", "Dave", "Steve", "Luke", "Luke", "Steve"];

let myNameCounts = [
    {
        name: "Luke",
        count: 3
    }, {
        name: "Dave",
        count: 1
    }, {
        name: "Steve",
        count: 2
    },
];

console.log(myDog.name);
myDog.name = "Buffy";
console.log(myDog.name);
myDog.owner = "Luke";
console.log(myDog);

let propertyIWantToLog = "age";

console.log(myDog[propertyIWantToLog]);