var _ = require("underscore")
console.log("------------------Start-----------------")

var fs = require('fs');
fs. readFile('./flower.txt', function(err, Data) {
console.log(" 1- Count the number of rows is " + Data.toString().split('\n').length)
console.log("----------------------------------------")

var StartWithS = _.filter(Data.toString().split('\n'), function(flower){ return flower.startsWith("S"); });
console.log("2. List the flower name that start with letter 'S'.\n" + StartWithS)
console.log("----------------------------------------")

console.log("3. Count the number of flower that not start with letter 'S' ", Data.toString().split('\n').length - StartWithS.length)
console.log("----------------------------------------")


var StartWithA = _.filter(Data.toString().split('\n'), function(flower){ return flower.startsWith("A"); });
console.log("4. List the flower start with first letter of your name if your name start with 'S' use second letter.\n" + StartWithA)
console.log("----------------------------------------")

var length5 = _.filter(Data.toString().split('\n'), function(flower){ return flower.length==5; });
console.log("5. List all the flower the name length is 5. \n" + length5)
console.log("----------------------------------------")


console.log("------------------END------------------")
})
