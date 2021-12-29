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

class Student extends Person {
    constructor(firstName, lastName, age, school, major) {
        super(firstName, lastName, age);
        this.school = school
        this.major = major

    }

    introduce() {
        return super.introduce() + " My school is " + this.school + " and I am studying " + this.major;
    }


}

class Vehicle{

}

{
    let student = new Student("Mike", "Parker", 21, "MIT", "Science")
    console.log(student.introduce())
    // duck typing
    student = 5
    console.log(student instanceof Vehicle)
}