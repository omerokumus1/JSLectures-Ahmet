// create an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    sampleMethod: function () {
        console.log("sample method")
    }
}
// access properties and methods
console.log("person name: " + person.firstName)
console.log("person last name: " + person.lastName)
console.log("person age: " + person.age)
person.sampleMethod()

// Iterate over the object
for (const personKey in person) {
    console.log(person[personKey])
}

// Delete a property
delete person.age
for (const personKey in person) {
    console.log(person[personKey])
}

let earphoneBox = {
    weight: "50gr",
    volume: "100cm3",
    color: "gray",
    earphones: [
        {id: "left", color: "light gray", weight: "15gr" },
        {id: "right", color: "light gray", weight: "15gr" },
    ],
    battery: 70,
    // get fonksiyon değildir, property olarak geçer
    get getBattery() {
        return this.battery + "%"
    },
    set setColor(c) {
        this.color = c
    }
}

// inherited toString
console.log(earphoneBox)
// getBattery fonksiyon olmadığı için parantez () ile kullanılmaz
console.log(earphoneBox.getBattery)

earphoneBox.setColor = "black"
console.log(earphoneBox.color)
