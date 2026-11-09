
//EXERCISE 1
//Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
// and for..of

// function gretter(myArray, counter) {

//     var greetText = 'Hello ';

//     for (var index = 0; index < myArray.length; index++) {
//         console.log(greetText + myArray[index]);
//     }

// }
// gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

const gretter = (myArray, counter) => {

    const greetText = "Hello";
    for (let name of myArray){
        console.log(`${greetText} ${name}`)
    }
};

gretter(["Munir", "Max", "Danny"], 3)


//EXERCISE 2
// Using destructuring assignment syntax and the spread operator, write a function will capitalize the
// first letter of a string.

const capitalize = (str) => {
    const [first= '', ...rest] = [...str]
    return `${first.toUpperCase()}${rest.join('')}`
}

console.log(capitalize("munir"))



//EXERCISE 3
// Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
// the first character of each Color in the following array..

const color  = ['red', 'blue', 'green']

const capitalizeColors = (input) => input.map(capitalize)


console.log(capitalizeColors(color))


//Exercise 4
// Using array.proto.filter create a function that will filter out all the values of the array that are less
// than twenty.

const values = [1, 60, 34, 30, 20, 5];

const filter = (numbers) => numbers.filter(value => value >= 20)

console.log(filter(values))

//Exercise 5
// Using array.proto.reduce create calculate the sum and product of a given array.

const array = [1,2,3,4];

const sum = (numbers) => numbers.reduce((total, number) => total + number, 0);

const product = (numbers) => numbers.reduce((total, number) => total * number, 1)

console.log(sum(array))
console.log(product(array))

//Exercise 6
// Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
// from Car Class. The parameters for the Car class is the model and year. The parameters for the
// subclass is the model, year and balance.
// Use the super key word in the Sedan subclass to set the model and name in base Car
// constructor.

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
}

const mySedan = new Sedan('Honda Civic', 2020, 15000);

console.log(mySedan.model)

