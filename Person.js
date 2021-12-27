class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    introduce(){
        return "My name is " + this.firstName + " " + this.lastName + ". I am " + this.age + " years old."
    }

}

let person = new Person("John", "Doe", "25")
console.log(person.introduce())