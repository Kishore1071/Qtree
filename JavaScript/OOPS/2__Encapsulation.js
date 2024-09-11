// Encapsulation is the concept of bundling data (properties) and the methods that operate on that data into a single unit (Mainly a class).

class PersonData{
    
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return `My name is ${this.name}`
    }

    setAge(new_age) {
        this.age = new_age
        return this.age
    }   
}