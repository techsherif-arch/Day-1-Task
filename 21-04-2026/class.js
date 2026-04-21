class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}
let person1 = new Person("Mohamed Sherif .M", 23);
person1.display();
