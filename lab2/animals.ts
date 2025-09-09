interface Animal {
    name: string,
    age: number,
    breed?: string,
    makeSound(): void,
    move(): void,
}

class Cat implements Animal {
    name: string;
    age: number;
    breed?: string;

    constructor(name: string, age: number, breed?: string) {
        this.name = name;
        this.age = age;
        if(breed) this.breed = breed;
    };
    
    makeSound(): void {
        console.log('Meow!');
    }
    
    move(): void {
        console.log(`${this.name} walks gracefully.`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    
    makeSound(): void {
        console.log('HELL YEAH!!! 🦅🦅🦅');
    }
    
    move(): void {
        console.log(`${this.name} flies like an eagle!`);
    }
}

class Fish implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    
    makeSound(): void {
        console.log('Buble.');
    }
    
    move(): void {
        console.log(`${this.name} jumps out of the water and does double 360 flex.`);
    }
}

const cat = new Cat('Bill', 5);
cat.makeSound();
cat.move();

const eagle = new Bird('Amerima', 3);
eagle.makeSound();
eagle.move();

const killerFish = new Fish('Killer fish', 0.3);
killerFish.makeSound();
killerFish.move();