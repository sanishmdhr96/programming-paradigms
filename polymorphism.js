class Animal {
    constructor(name) {
        this.name = name
    }

    animalSound() {
        console.log(this.name + ' General animal sound')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    animalSound() {
        console.log(this.name + ' Bhow bhow')
    }
}


class Biralo extends Animal {
    constructor(name) {
        super(name)
    }

    animalSound() {
        console.log(this.name + ' Meow Meow')
    }
}

const animal = new Animal('Dog')
const dog = new Dog('KUKUR')
const cat = new Biralo('Biralo')
animal.animalSound()
dog.animalSound()
cat.animalSound()