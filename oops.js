/**
 * Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. 
 * Create two instances of the 'Person' class and display their details.
 */

/**
 * Create a class named Person with properties name, age and country
 */

class Person {
    constructor(name, age, country) {
        this.name = name,
            this.age = age,
            this.country = country
    }

    displayDetail() {
        // Sanish is 27yrs young and lives in Nepal
        // Template Literals -> allows us to use JS values inside strings
        // return this.name + "is" + this.age + "years young and lives in" + this.country;
        return `${this.name} is ${this.age} years young and lives in ${this.country}`
    }
}

const person = new Person('Sanish', '27', 'Nepal')
const person1 = new Person('Anish', '25', 'America')
const person2 = new Person('Manish', '26', 'USA')
const person3 = new Person('Ganesh', '22', 'UK')

console.log(person.displayDetail())
console.log(person1.displayDetail())
console.log(person2.displayDetail())
console.log(person3.displayDetail())
/**
 * {
 * name: 'Sanish',
 * age: 27,
 * country:'Nepal'
 * displayDetail: function(){
 *    return `${this.name} is ${this.age} years young and lives in ${this.country}`
 * }
 * }
 */